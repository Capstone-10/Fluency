import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

export default function CameraTranslation(prop) {
  let originalText = prop.route.params.output;
  let translatedVersion = prop.route.params.translatedText;
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.topView}>
        <Text style={{ fontSize: 30, top: 10 }}>Engish Spanish</Text>
      </View>

      <View style={styles.middleView}>
        <Text style={{ fontSize: 20 }}>{originalText}</Text>
      </View>

      <View style={styles.bottomView}>
        <Text style={{ fontSize: 20 }}>{translatedVersion}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F5EFE8",
    alignItems: "center",
    textAlign: "center",
  },
  topView: {
    backgroundColor: "#DD8138",
    height: "8%",
    width: "85%",
    top: "5%",
    borderRadius: 10,
    textAlign: "center",
    alignItems: "center",
    fontSize: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 11,
  },

  middleView: {
    height: "30%",
    width: "85%",
    top: "10%",
    paddingTop: "5%",
    backgroundColor: "white",
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
    top: "15%",
    height: "42%",
    width: "85%",
    paddingTop: "5%",
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
});
