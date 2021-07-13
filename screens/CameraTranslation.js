import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Mic, Volume2, PlayCircle } from "react-native-feather";
import * as Speech from "expo-speech";

//import styles from "./styles";
import Languages from "../languages";

export default function CameraTranslation(prop) {
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

  const speechToText = async () => {
    console.log(translatedVersion);
    console.log(selectedLang);
    Speech.speak(translatedVersion, {
      language: selectedLang,
      pitch: 1,
      rate: 1,
    });
  };

  return (
    <ImageBackground style={styles.cameraTranslation_background}>
      <View style={styles.cameraTranslation_topView}>
        <Text style={styles.topViewText}>{Languages[detected]}</Text>
      </View>

      <View style={styles.middleView}>
        <Text multiline style={styles.middleText}>
          {originalText.replace(/&quot;|&#39;/g, "'")}
        </Text>
      </View>

      <View style={styles.topView2}>
        <Text
          multiline
          style={styles.topViewText}
        >{`${Languages[selectedLang]}`}</Text>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>
          {translatedVersion.replace(/&quot;|&#39;/g, "'")}
        </Text>
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
  );
}

const styles = StyleSheet.create({
  cameraTranslation_background: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F5EFE8",
    alignItems: "center",
    textAlign: "center",
  },
  cameraTranslation_topView: {
    height: "7%",
    width: "85%",
    top: "4%",
    opacity: 0.8,
    borderRadius: 10,
    backgroundColor: "#DD8138",
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
    //40
    top: "4%",
    height: "35%",
    width: "85%",
    paddingTop: "5%",
    padding: "5%",
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
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
  middleText: {
    fontSize: 15,
  },

  topView2: {
    //5
    height: "7%",
    width: "85%",
    top: "8%",
    opacity: 0.8,
    borderRadius: 10,
    backgroundColor: "#DD8138",
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

  bottomView: {
    //45
    top: "8%",
    height: "32%",
    width: "85%",
    padding: "5%",
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 10,
    borderColor: "white",
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
  bottomText: { fontSize: 15 },
  SpeakerButton: {
    color: "#DD8138",
    top: "150%",
  },
});
