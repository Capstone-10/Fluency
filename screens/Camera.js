import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Camera } from "expo-camera";
import GOOGLE_CLOUD_VISION_API_KEY from "../config/environment";
//import * as ImagePicker from "expo-image-picker";

var photo;

export default function App({ navigation }) {
  const handleTranslatePress = () => {
    navigation.navigate("translate");
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [googleResponse, setGoogleResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const createTwoButtonAlert = () =>
  // Alert.alert(
  //   "Text Verification",
  //   "Google vision detected text should go into this box. I'm making this text long on purpose to see how this would render.",
  //   [
  //     {
  //       text: "Re-take",
  //       onPress: () => setPreviewVisible(false),
  //       style: "cancel",
  //     },
  //     {
  //       text: "Translate",
  //       onPress: () => {
  //         {navigation.navigate("TranslatedText")}
  //         {submitToGoogle}
  //       },
  //     },
  //   ]
  // );

  const _takePicture = async () => {
    if (!camera) return;
    const options = {
      base64: true,
    };

   photo = await camera.takePictureAsync(options);
    console.log(photo.base64);
    setCapturedImage(photo);
    setPreviewVisible(true);
    // createTwoButtonAlert();
  };

  const submitToGoogle = async () => {
    try {
      let body = JSON.stringify({
        requests: [
          {
            features: [{ type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 }],
            image: {
              content: photo.base64,
            },
          },
        ],
      });
      let response = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=" +
          GOOGLE_CLOUD_VISION_API_KEY,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: body,
        }
      );
      const responseJson = await response.json();
      // console.log(responseJson);
      const responseParsed = JSON.parse(JSON.stringify(responseJson));
      const output = responseParsed.responses[0].fullTextAnnotation.text
      console.log(
        "Parsed response ",
        output
      );
      setGoogleResponse(responseParsed);
      //setuploading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {previewVisible ? (
        <ImageBackground
          source={{ uri: capturedImage && capturedImage.uri }}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              padding: 15,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => setPreviewVisible(false)}
                style={{
                  width: 130,
                  height: 40,

                  alignItems: "center",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  Re-take
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={submitToGoogle}
                style={{
                  width: 130,
                  height: 40,

                  alignItems: "center",
                  borderRadius: 4,
                }}
              >
                <Text
                  onPress={handleTranslatePress}
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  Translate
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      ) : (
        <Camera
          style={{ flex: 1 }}
          type={type}
          ref={(r) => {
            camera = r;
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                top: "5%",
                left: "5%",
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={{ fontSize: 20, marginBottom: 10, color: "white" }}>
                {" "}
                Flip{" "}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                flex: 1,
                width: "100%",
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={_takePicture}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                  }}
                />
              </View>
            </View>
          </View>
        </Camera>
      )}
    </View>
  );
}
