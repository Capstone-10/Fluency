import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";
import GOOGLE_CLOUD_VISION_API_KEY from "../config/environment";

var photo; //If I declare this with "let" cannot use it in "submitToGoogle" POST request below
var output; //If I declare this with var in "submitToGoogle," the app breaks

export default function App({ navigation }) {
  const handleTranslatePress = (output) => {
    navigation.navigate("Camera Translation", output, "something");
  };

  //Get rid of underscores for functions
  //refactor all the styles

  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uploading, setUploading] = useState(false);
  // For some reason, googleResponse state change doesn't occur...const [googleResponse, setGoogleResponse] = useState(null);
  // For some reason, this state refuses to change also...const [detectedText, setDetectedText] = useState(null);

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

  const createTwoButtonAlert = (output) =>
    Alert.alert("Text Verification", output, [
      {
        text: "Re-take",
        onPress: () => setPreviewVisible(false),
        style: "cancel",
      },
      {
        text: "Translate",
        onPress: () => {
          {handleTranslatePress(output)}
          {testFunction()}
          setPreviewVisible(false); //So, if you navigate back to camera, you can take another pic right away
        },
      },
    ]);

  const _takePicture = async () => {
    if (!camera) return;
    const options = {
      base64: true,
    };

    photo = await camera.takePictureAsync(options);
    //console.log(photo.base64);
    setCapturedImage(photo);
    setPreviewVisible(true);
    submitToGoogle();
    
    // setDetectedText(detectedText)
    // createTwoButtonAlert(detection);
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
      //console.log("is it defined?--->", responseJson);
      const responseParsed = JSON.parse(JSON.stringify(responseJson));
      output = responseParsed.responses[0].fullTextAnnotation.text;
      //setDetectedText(output)
      console.log("detected texts--> ", output);
      createTwoButtonAlert(output)
      console.log("this is detectedText --->", output);
      // setGoogleResponse(responseParsed);
      //setuploading(false);
      // handleTranslatePress(output);
    } catch (error) {
      console.log(error);
    }
  };

  const testFunction = () => {
    console.log(`I'm the value of output after testFunction fired ${output}`)
  }

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
            ></View>
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
                  style={styles.takePictureButton}
                  onPress={_takePicture}
                />
              </View>
            </View>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  takePictureButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});
