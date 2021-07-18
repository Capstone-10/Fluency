import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { PlayCircle, StopCircle } from "react-native-feather";
import * as Speech from "expo-speech";
import styles from "../styles";
import Languages from "../languages";

export default function CameraTranslation(prop) {
  let originalText = prop.route.params.output;
  let translatedVersion = prop.route.params.translatedText;
  let detected = prop.route.params.detectedSourceLang;
  let selectedLang = prop.route.params.selectedLanguage;


  const playSpeech = async () => {
    // console.log(translatedVersion);
    // console.log(selectedLang);
    Speech.speak(translatedVersion, {
      language: selectedLang,
      pitch: 1,
      rate: 1,
    });
  };

  //where are we using this?
  const pauseSpeech = () => {
    Speech.pause();
  };
  const stopSpeech = () => {
    Speech.stop();
  };

  return (
    <ImageBackground style={styles.cameraTranslationBackground}>
      <View style={styles.cameraTranslationTopView}>
        <Text style={styles.topViewText}>{Languages[detected]}</Text>
      </View>

      <View style={styles.middleView}>
        <TextInput
          multiline
          numberOfLines={100}
          editable={false}
          style={styles.middleText}
        >
          {originalText}
        </TextInput>
      </View>

      <View style={styles.topView2}>
        <Text
          style={styles.topViewText}
        >{`${Languages[selectedLang]}`}</Text>
      </View>

      <View style={styles.bottomView}>
        <TextInput
          multiline
          numberOfLines={100}
          editable={false}
          style={styles.bottomText}
        >
          {translatedVersion}
        </TextInput>
      </View>
      <View style={styles.audio}>
        <PlayCircle
          style={styles.SpeakerButton}
          onPress={playSpeech}
          width={50}
          height={50}
        />
        <StopCircle
          style={styles.SpeakerButton}
          onPress={stopSpeech}
          width={50}
          height={50}
        />
      </View>
    </ImageBackground>
  );
}