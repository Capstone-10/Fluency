import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from "react-native";

export default function CameraTranslation(output) {
  const [text, setText] = useState("");
  const [tanslated, setTranslated] = useState("");
  //pass down from Camera.js the output
  const detectedText = output.route.params;
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
        <Text style={styles.language}>Engish -> Spanish</Text>
      </View>

      <Text style={styles.input}>{detectedText}</Text>

      {/* <Button
        title="Translate"
        onPress={() => {
          translateNow(text);
        }}
      /> */}
      <Text style={styles.output}>{}</Text>
    </SafeAreaView>
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