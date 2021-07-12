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
var output;
var translatedText;

export default function App({ navigation }) {


  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  //const [uploading, setUploading] = useState(false);
  const [googleResponse, setGoogleResponse] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  //const [translatedText, setTranslatedText] = useState(null);
  //const [text, setText] = useState(null);


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
    Alert.alert("Hey! Below, is this the text you want translated?", output, [
      {
        text: "No! Re-take",
        onPress: () => setPreviewVisible(false),
        style: "cancel",
      },
      {
        text: "Yes, translate",
        onPress: async () => {
          {
            await submitToGoogleTranslate();
            handleTranslatePress(output, translatedText);
          }
          setPreviewVisible(false);
        },
      },
    ]);

  const takePicture = async () => {
    if (!camera) return;
    const options = {
      base64: true,
    };
    photo = await camera.takePictureAsync(options);
    setCapturedImage(photo);
    setPreviewVisible(true);
    submitToGoogleVision();
  };

  const submitToGoogleVision = async () => {
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
      const responseParsed = JSON.parse(JSON.stringify(responseJson));
      output = responseParsed.responses[0].fullTextAnnotation.text;
      createTwoButtonAlert(output);
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

 

  const submitToGoogleTranslate = async () => {
    try {
      let body = JSON.stringify({
        target: "en",
        q: output,
      });
      let response = await fetch(
        "https://translation.googleapis.com/language/translate/v2?key=" +
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
      const responseParsed = await JSON.parse(JSON.stringify(responseJson));
      translatedText = await responseParsed.data.translations[0].translatedText;
      //console.log("in submitToGoogleTranslate ", translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTranslatePress = (output, translatedText) => {
    submitToGoogleTranslate(output);
    let prop = { output, translatedText };
    navigation.navigate("Camera Translation", prop);
  };


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
