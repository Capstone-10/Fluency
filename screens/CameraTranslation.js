import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { PlayCircle, StopCircle } from "react-native-feather";
import * as Speech from "expo-speech";

//import styles from "./styles";
import Languages from "../languages";

export default function CameraTranslation(prop) {
  // const [input, setInput] = useState("")
  // const [height, setHeight] = useState(0)

  let originalText = prop.route.params.output;
  let translatedVersion = prop.route.params.translatedText;
  let detected = prop.route.params.detectedSourceLang;
  // console.log(
  //   "detected source carried to cameraTranslation screen-->",
  //   detected
  // );
  let selectedLang = prop.route.params.selectedLanguage;
  // if(selectedLang === "null") {
  //   selectedLang = "af"
  // }
  // console.log(
  //   "detected target carried to cameraTranslation screen-->",
  //   selectedLang
  // );

  const playSpeech = async () => {
    console.log(translatedVersion);
    console.log(selectedLang);
    Speech.speak(translatedVersion, {
      language: selectedLang,
      pitch: 1,
      rate: 1,
    });
  };

  // const playSpeech = async () => {
  //   Speech.speak(translated, {
  //     language: selectedLanguage,
  //     pitch: 1,
  //     rate: 1,
  //   });
  // };
  const pauseSpeech = () => {
    Speech.pause();
  };
  const stopSpeech = () => {
    Speech.stop();
  };

  return (
    <ImageBackground style={styles.cameraTranslation_background}>
      <View style={styles.cameraTranslation_topView}>
        <Text style={styles.topViewText}>{Languages[detected]}</Text>
      </View>

      <View style={styles.middleView}>
        <TextInput
          multiline
          numberOfLines={100}
          editable={false}
          // onChange={(event) => {
          //   setInput(event.nativeEvent.input)
          //   setHeight(event.nativeEvent.contentSize.height)
          // }}
          style={styles.middleText}
        >
          {originalText}
        </TextInput>
      </View>

      <View style={styles.topView2}>
        <Text
          // onChange={(event) => {
          //   setInput(event.nativeEvent.input)
          //   setHeight(event.nativeEvent.contentSize.height)
          // }}
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

const styles = StyleSheet.create({
  cameraTranslation_background: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F5EFE8",
    alignItems: "center",
    //textAlign: "center",
  },
  cameraTranslation_topView: {
    marginTop: "7%",
    height: "7%",
    width: "85%",
    backgroundColor: "#DD8138",
    opacity: 0.8,
    borderRadius: 10,
    textAlign: "center",
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

  topViewText: {
    fontSize: 20,
    top: "25%",
    color: "white",
  },

  middleView: {
    marginBottom: "6%",
    height: "25%",
    width: "85%",
    backgroundColor: "white",
    paddingTop: "5%",
    padding: "5%",
    opacity: 0.8,
    borderRadius: 10,
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
  middleText: {
    fontSize: 15,
  },
  topView2: {
    height: "7%",
    width: "85%",
    backgroundColor: "#DD8138",
    opacity: 0.8,
    borderRadius: 10,
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

  bottomView: {
    height: "37%",
    width: "85%",
    marginBottom: "5%",
    padding: "5%",
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 10,
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
  bottomText: { fontSize: 15 },
  audio: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  SpeakerButton: {
    color: "#DD8138",
    opacity: 0.9,
  },
});
