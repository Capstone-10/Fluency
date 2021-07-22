import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { Camera } from "expo-camera";
import { Picker } from "@react-native-picker/picker";
import Languages from "../languages";
import styles from "../styles";
import Spinner from "react-native-loading-spinner-overlay";
import GOOGLE_CLOUD_VISION_API_KEY from "../config/environment";

//These variables are used as such because our state refused to change at times, and within our API calls. Ideally, these would be included in our Hooks below.
var photo;
var output;
var translatedText;
var detectedSourceLang;

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 15000);
    };
  }, [loading]);



  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const createTwoButtonAlert = (output) => {
    
    Alert.alert("Did I capture this text correctly?", output, [
      {
        text: "Re-take",
        onPress: () => {
          setPreviewVisible(false);
          setLoading(false);
        },
        style: "cancel",
      },
      {
        text: "Translate",
        onPress: async () => {
          {
            await submitToGoogleTranslate();
            handleTranslatePress(output, translatedText);
          }
          setPreviewVisible(false);
          setLoading(false);
        },
      },
    ]);
  }
  
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
      const capturedText = await response.json();
      const capturedTextParsed = JSON.parse(JSON.stringify(capturedText));
      output = capturedTextParsed.responses[0].fullTextAnnotation.text.replace(
        /&quot;|&#39;/g,
        "'"
      );
      detectedSourceLang =
        capturedTextParsed.responses[0].textAnnotations[0].locale;
      createTwoButtonAlert(output);
      
    } catch (error) {
      Alert.alert(
        "Oh, no!",
        "Are you sure there was text there? If so, was it blury? Try again!"
      );
      setPreviewVisible(false);
      setLoading(false);
      console.log(error);
    }
  };

  const submitToGoogleTranslate = async () => {
    try {
      let body = JSON.stringify({
        target: selectedLanguage,
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
      const text = await response.json();
      const textParsed = await JSON.parse(JSON.stringify(text));
      translatedText = textParsed.data.translations[0].translatedText.replace(
        /&quot;|&#39;/g,
        "'"
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleTranslatePress = (output, translatedText) => {
    submitToGoogleTranslate(output);
    setLoading(false);
    let props = { output, translatedText, detectedSourceLang, selectedLanguage };
    navigation.navigate("Camera Translation", props);
  };

  return (
    <View style={styles.mainView}>
      {previewVisible ? (
        <ImageBackground
          source={{ uri: capturedImage && capturedImage.uri }}
          style={styles.capturedImage}
        ></ImageBackground>
      ) : (
        <Camera
          style={styles.cameraView}
          ref={(ref) => {
            camera = ref;
          }}
        >
          <View style={styles.cameraNestedView}>
            <Spinner
              //Spinner visible only if loading is truthy
              visible={loading}
              textContent={"Thank you! Just a moment"}
              color="#DD8138"
              animation="slide"
              overlayColor="white"
            />
            <View style={styles.languagePicker}>
              <Text style={styles.chooseLanguage}>Choose Language</Text>
              <View style={styles.pickerHolder}>
                <Picker
                  selectedValue={selectedLanguage}
                  style={styles.cameraPicker}
                  onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                >
                  {Object.keys(Languages).map((key) => {
                    return (
                      <Picker.Item
                        key={key}
                        label={Languages[key]}
                        value={key}
                        color="white"
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <View style={styles.generalView}>
              <View style={styles.alignmentView}>
                <TouchableOpacity
                  onPress={() => {
                    {
                      takePicture();
                    }
                    {
                      setLoading(true);
                    }
                  }}
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
