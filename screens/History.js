import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function History() {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={{ fontSize: 80 }}>History</Text>
      <Text>word 1</Text>
      <Text>word 2</Text>
      <Text>word 3</Text>
      <Text>word 4</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
