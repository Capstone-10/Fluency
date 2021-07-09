import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from "react-native";

export default function VoiceAndTextTranslate() {
  const [text, setText] = useState("");
  const [tanslated, setTranslated] = useState("");

  const translateNow = async (text) => {
    //translate and then
    let ourTranslation = "translated version";
    setTranslated(ourTranslation);
  };

  const onChangeText = () => {
    (text) => setText(text);
    if (text === "") {
      setTranslated("");
    }
  };

  return (
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

      <Button
        title="Translate"
        onPress={() => {
          translateNow(text);
        }}
      />
      <Text style={styles.output}>
        {tanslated
          .split(" ")
          .map((word) => word && word)
          .join(" ")}
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 300,
    margin: 12,
    borderWidth: 1,
    fontSize: 20,
    padding: 20,
  },
  output: {
    height: 300,
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
