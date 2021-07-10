import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";

export default function CameraTranslation(prop) {

  console.log("prop-->", prop.route.params);
  
  let originalText = prop.route.params.output;
  let translatedVersion = prop.route.params.translatedText;
  return (
    <SafeAreaView style={{ marginTop: 20, marginBottom: 20 }}>
      <View>
        <Text style={styles.language}>Engish -> Spanish</Text>
      </View>

      <Text style={styles.input}>{originalText}</Text>

      <Text style={styles.output}>{translatedVersion}</Text>
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
