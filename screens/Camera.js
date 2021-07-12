import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
  StyleSheet
} from "react-native";
import { Camera } from "expo-camera";
import { Picker } from "@react-native-picker/picker"
import Languages from "../languages"
import styles from "./styles"
import GOOGLE_CLOUD_VISION_API_KEY from "../config/environment";


var photo;

export default function App({ navigation }) {
  const handleTranslatePress = (output) => {
    navigation.navigate("Camera Translation", output);
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uploading, setUploading] = useState(false);
  const [googleResponse, setGoogleResponse] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');

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

  const takePicture = async () => {
    if (!camera) return;
    const options = {
      base64: true,
    };

    photo = await camera.takePictureAsync(options);
    //console.log(photo.base64);
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
      //console.log("is it defined?--->", responseJson);
      const responseParsed = JSON.parse(JSON.stringify(responseJson));
      const output = responseParsed.responses[0].fullTextAnnotation.text;
      console.log("detected texts--> ", output);
      setGoogleResponse(responseParsed);
      //setuploading(false);
      handleTranslatePress(output);
    } catch (error) {
      console.log(error);
    }
  };

  // const target = 'The target language for language names, e.g. ru';

  // async function listLanguagesWithTarget() {
  //   // Lists available translation language with their names in a target language
  //   const [languages] = await translate.getLanguages(target);
  
  //   // console.log('Languages:');
  //   languages.forEach(language => console.log(language));
  // }

 

  return (
    <View
      style={styles.mainView}
    >
      {previewVisible ? (
        <ImageBackground
          source={{ uri: capturedImage && capturedImage.uri }}
          style={styles.capturedImage}
        >
          <View
            style={styles.nestedView}
          >
            <View
              style={styles.view}
            >
              <TouchableOpacity
                onPress={() => setPreviewVisible(false)}
                style={styles.previewVisible}
              >
                <Text
                  style={styles.textRetake}
                >
                  Re-take
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={submitToGoogle}
                style={styles.submitToGoogle}
              >
                <Text
                  style={styles.textTranslate}
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
          ref={(ref) => {
            camera = ref;
          }}
        >
          <View
            style={styles.cameraView}
          >
            <TouchableOpacity
              style={styles.cameraType}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.textFlip}>
                {" "}
                Flip{" "}
              </Text>
            </TouchableOpacity>
              {/* <Text style={styles.selectLanguageText}>
                What language are you in the mood for today?
              </Text> */}
        <View style={styles.languagePicker}>
            <Picker
            selectedValue={selectedLanguage}
            style={{ height: 100, width: 200 }}
            onValueChange={itemValue => setSelectedLanguage(itemValue)}
            >
                {Object.keys(Languages).map(key => (
                 <Picker.Item key={key} label={Languages[key]} value={key} />
                ))
                }
                {/* <Picker.Item label="Korean" value="korean" color="white"/>
                <Picker.Item label="German" value="german" color="white"/> */}
              </Picker>
        </View>
            <View
              style={styles.generalView}
            >
              <View
                style={styles.alignmentView}
              >
                <TouchableOpacity
                  onPress={takePicture}
                  style={styles.takePicture}
                />
              </View>
            </View>
          </View>
        </Camera>
      )}
    </View>
  );
}
