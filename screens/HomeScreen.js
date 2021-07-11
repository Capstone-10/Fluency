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

import { Camera } from "react-native-feather";

function HomeScreen({ navigation }) {
  const handleCameraPress = () => {
    navigation.navigate("Camera");
  };
  const handleTranslatePress = () => {
    navigation.navigate("Translate");
  };
  const handleNavBarPress = () => {
    navigation.navigate("NavBar");
  };

  return (
    <ImageBackground style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("./KakaoTalkGif.gif")} style={styles.logo} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          What can I translate for you today?
        </Text>
      </View>

      <View style={styles.mainBox}>
        <View style={styles.CameraButton}>
          <Camera
            onPress={handleCameraPress}
            stroke="black"
            width={75}
            height={75}
            marginLeft={28}
            marginTop={27}
          >
            Camera
          </Camera>
        </View>

        <View style={styles.TextButton}>
          <Text
            onPress={handleTranslatePress}
            style={{
              fontSize: 23,
              fontWeight: "bold",
              marginLeft: 15,
              marginTop: 50,
            }}
          >
            Translate
          </Text>
        </View>

        {/* <TouchableOpacity style={styles.VoiceButton}>
          <Text
            onPress={handleNavBarPress}
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            Navbar placeholder
          </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={styles.DictionaryButton}>
        <Text
          onPress={handleDictionaryPress}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          Dictionary
        </Text>
      </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "center",
    // backgroundColor: "white",
    backgroundColor: "white",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    //flexDirection: "row",
  },
  mainBox: {
    marginTop: 400,
    // //padding: 20,
    // backgroundColor: "white",
    // flex: 1,
    // alignItems: "center", // ignore this - we'll come back to it
    // justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  CameraButton: {
    width: 130,
    height: 130,
    backgroundColor: "#fc5c65",
    // alignItems: "center",
    // justifyContent: "center",
    marginRight: 25,
    borderRadius: 10,
  },
  TextButton: {
    width: 130,
    height: 130,
    backgroundColor: "#4ecdc4",
    marginLeft: 25,
    borderRadius: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 110,
    marginBottom: 30,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },

  // VoiceButton: {
  //   width: "100%",
  //   height: 75,
  //   backgroundColor: "teal",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // DictionaryButton: {
  //   width: "100%",
  //   height: 75,
  //   backgroundColor: "blue",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

export default HomeScreen;
