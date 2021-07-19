import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { PlayCircle, StopCircle } from "react-native-feather";
import GOOGLE_CLOUD_VISION_API_KEY from "../config/environment";
import Languages from "../languages";
import styles from "../styles"
import * as Speech from "expo-speech";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function VoiceAndTextTranslate(props) {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  

  useEffect(() => {
    submitToGoogleTranslate(text);
  }, [selectedLanguage]);

  const speechToText = async () => {
    Speech.speak(translated, {
      language: selectedLanguage,
      pitch: 1,
      rate: 1,
    });
  };
  const stopSpeech = () => {
    Speech.stop();
  };

  const onChangeText = async (text) => {
    setText(text);
    if (text === "") {
      setTranslated("");
    }
    submitToGoogleTranslate(text);
  };

  const submitToGoogleTranslate = async (text) => {
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
      let result =
        await initialTextParsed.data.translations[0].translatedText.replace(
          /&quot;|&#39;/g,
          "'"
        );
        console.log("INITIAL TEXT -->", initialTextParsed)
      setTranslated(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DismissKeyboard>
      <ImageBackground style={styles.translateBackground}>
        <View style={styles.translateTopView}>
          <Picker
            style={styles.translatePicker}
            onValueChange={(itemValue) => {
              setSelectedLanguage(itemValue);
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
          style={styles.translateMiddleView}
          multiline
          numberOfLines={100}
          onChangeText={onChangeText}
          defaultValue={text}
          placeholder="Type here to translate!"
        />
        <View style={styles.translateBottomView}>
          <TextInput
            multiline
            numberOfLines={100}
            editable={false}
            style={styles.translateBottomText}
          >
            {translated}
          </TextInput>
        </View>
        <View style={styles.audio}>
          <PlayCircle
            style={styles.speakerButton}
            onPress={speechToText}
            width={50}
            height={50}
          />
          <StopCircle
            style={styles.speakerButton}
            onPress={stopSpeech}
            width={50}
            height={50}
          />
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
}


