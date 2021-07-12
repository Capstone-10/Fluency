import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  TouchableWithoutFeedback,
  Keyboard,
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
    // console.log("text in-->", text);
  };

  const handleSubmit = () => {};

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
      //console.log("responseParsed-->", responseParsed);
      let result = await responseParsed.data.translations[0].translatedText;
      setTranslated(result);
      //console.log("text in google->", text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={{ marginTop: 20, marginBottom: 20 }}>
        <View>
          <Text style={styles.language}>Detected Language</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          defaultValue={text}
          placeholder="Type here to translate!"
        />

        {/* <Button title="Translate" onPress={handleSubmit} /> */}
        <Text style={styles.output}>{translated}</Text>
      </SafeAreaView>
    </DismissKeyboard>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    fontSize: 20,
    padding: 20,
  },
  output: {
    height: 350,
    margin: 12,
    borderWidth: 1,
    fontSize: 20,
    padding: 20,
  },
  language: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    textAlign: "center",
  },
});
