import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import { Camera } from 'react-native-feather'

function HomeScreen({ navigation }) {
  const handleCameraPress = () => {
    console.log("Testing image press");
    navigation.navigate("Camera");
  };
  const handleTranslatePress = () => {
    navigation.navigate("Translate");
  };
  const handleNavBarPress = () => {
    navigation.navigate("NavBar");
  };
  
  return (
    <ImageBackground
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image onPress={handleCameraPress} style={styles.logo} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          What can I translate for you today?
        </Text>
      </View>

      <TouchableOpacity style={styles.CameraButton}>
        <Camera
          onPress={handleCameraPress}
          stroke='black' width={40} height={40}
        >
          Camera
        </Camera>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TextButton}>
        <Text
          onPress={handleTranslatePress}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Translate
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.VoiceButton}>
        <Text
          onPress={handleNavBarPress}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Navbar placeholder
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.DictionaryButton}>
        <Text
          onPress={handleDictionaryPress}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Dictionary
        </Text>
      </TouchableOpacity> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  CameraButton: {
    width: "100%",
    height: 75,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  TextButton: {
    width: "100%",
    height: 75,
    backgroundColor: "#4ecdc4",
    alignItems: "center",
    justifyContent: "center",
  },
  VoiceButton: {
    width: "100%",
    height: 75,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  DictionaryButton: {
    width: "100%",
    height: 75,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;


