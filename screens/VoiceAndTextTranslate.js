import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Languages from "../languages";
import { Mic, Volume2, PlayCircle } from "react-native-feather";
import GOOGLE_CLOUD_VISION_API_KEY from "../config/environment";
import * as Speech from "expo-speech";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function VoiceAndTextTranslate() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("af");

  useEffect(() => {
    submitToGoogleTranslate(text);
  }, [selectedLanguage]);

  const speechToText = async () => {
    console.log(translated);
    console.log(selectedLanguage);
    Speech.speak(translated, {
      language: selectedLanguage,
      pitch: 1,
      rate: 1,
    });
  };

  const onChangeText = async (text) => {
    setText(text);
    if (text === "") {
      setTranslated("");
    }
    submitToGoogleTranslate(text);
  };

  const submitToGoogleTranslate = async (text) => {
    console.log(
      "selected language in submitToGoogleTranslate-->",
      selectedLanguage
    );
    try {
      let body = JSON.stringify({
        target: selectedLanguage,
        q: text,
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
      const initialText = await response.json();
      const initialTextParsed = await JSON.parse(JSON.stringify(initialText));
      //console.log("responseParsed-->", responseParsed);
      let result =
        await initialTextParsed.data.translations[0].translatedText.replace(
          /&quot;|&#39;/g,
          "'"
        );
      setTranslated(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DismissKeyboard>
      <ImageBackground style={styles.background}>
        <View style={styles.topView}>
          <Picker
            style={styles.picker}
            onValueChange={(itemValue) => {
              setSelectedLanguage(itemValue);
              console.log("Item value in onValueChange??", itemValue);
              console.log(
                "Selected language in onValueChange?",
                selectedLanguage
              );
              submitToGoogleTranslate(text);
            }}
            selectedValue={selectedLanguage}
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

        <TextInput
          style={styles.middleView}
          multiline
        numberOfLines={100}
          onChangeText={onChangeText}
          defaultValue={text}
          placeholder="Type here to translate!"
        />
        <View style={styles.bottomView}>
          <TextInput 
          multiline 
        numberOfLines={100}
        editable={false}
          style={styles.bottomText}>
            {translated}
          </TextInput>
        </View>
        <View>
          <PlayCircle
            style={styles.SpeakerButton}
            onPress={speechToText}
            width={50}
            height={50}
          />
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F5EFE8",
    alignItems: "center",
  },
  topView: {
    //5
    height: "7%",
    width: "85%",
    top: "4%",
    opacity: 0.8,
    borderRadius: 10,
    backgroundColor: "#439654",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 11,
  },
  picker: {
    position: "relative",
    bottom: 82,
    maxHeight: 100,
    width: 200,
    //opacity: 1,
  },

  middleView: {
    //40
    top: "10%",
    height: "30%",
    width: "85%",
    paddingTop: "5%",
    padding: "5%",
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 10,
    //alignItems: "center",
    //textAlign: "center",
    fontSize: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 11,
  },

  bottomView: {
    //45
    top: "14%",
    height: "38%",
    width: "85%",
    padding: "5%",
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 10,
    borderColor: "white",
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 11,
  },
  bottomText: {
    fontSize: 15,
  },
  SpeakerButton: {
    color: "#439654",
    top: "230%",
  },
});
