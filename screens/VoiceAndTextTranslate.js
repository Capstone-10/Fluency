import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import GOOGLE_CLOUD_VISION_API_KEY from "../config/environment";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function VoiceAndTextTranslate() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  const onChangeText = (text) => {
    (text) => setText(text);
    if (text === "") {
      setTranslated("");
    }
    submitToGoogleTranslate(text);
  };

  const submitToGoogleTranslate = async (text) => {
    try {
      let body = JSON.stringify({
        target: "en",
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
      const responseJson = await response.json();
      const responseParsed = await JSON.parse(JSON.stringify(responseJson));
      let result = await responseParsed.data.translations[0].translatedText;
      setTranslated(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DismissKeyboard>
      <ImageBackground style={styles.background}>
        <View style={styles.topView}>
          <Text style={{ fontSize: 30, top: 10 }}>Detected Language</Text>
        </View>
        <TextInput
          style={styles.middleView}
          onChangeText={onChangeText}
          defaultValue={text}
          placeholder="Type here to translate!"
        />
        <View style={styles.bottomView}>
          <Text style={{ fontSize: 20 }}>{translated}</Text>
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F5EFE8",
    alignItems: "center",
  },
  topView: {
    height: "8%",
    width: "85%",
    top: "5%",
    borderRadius: 10,
    backgroundColor: "#439654",
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
    textAlign: "center",
    fontSize: 20,
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
