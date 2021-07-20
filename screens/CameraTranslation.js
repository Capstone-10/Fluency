import React from "react";
import { Text, View, ImageBackground, TextInput } from "react-native";
import { PlayCircle, StopCircle, ArrowRight } from "react-native-feather";
import * as Speech from "expo-speech";
import styles from "../styles";
import Languages from "../languages";

export default function CameraTranslation(props) {
  let originalText = props.route.params.output;
  let translatedVersion = props.route.params.translatedText;
  let detected = props.route.params.detectedSourceLang;
  let selectedLang = props.route.params.selectedLanguage;

  const playSpeech = async () => {
    Speech.speak(translatedVersion, {
      language: selectedLang,
      pitch: 1,
      rate: 1,
    });
  };

  const stopSpeech = () => {
    Speech.stop();
  };

  return (
    <ImageBackground style={styles.cameraTranslation_background}>
      <View style={styles.languageBox}>
        <View style={styles.detectedLanduageView}>
          <Text style={styles.topViewText}>{Languages[detected]}</Text>
        </View>
        <ArrowRight style={styles.arrowRight} strokeWidth="3px"></ArrowRight>
        <View style={styles.selectedLanguageView}>
          <Text style={styles.selectedLanguageText}>
            {`${Languages[selectedLang]}`}
          </Text>
        </View>
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
        <Text style={styles.topViewText}></Text>
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
      <View style={styles.cameraAudio}>
        <PlayCircle
          style={styles.cameraSpeakerButton}
          onPress={playSpeech}
          width={50}
          height={50}
        />
        <StopCircle
          style={styles.cameraSpeakerButton}
          onPress={stopSpeech}
          width={50}
          height={50}
        />
      </View>
    </ImageBackground>
  );
}
