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
    <ImageBackground
      source={require("./homescreen.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        {/* <Image source={require("./KakaoTalkGif.gif")} style={styles.logo} /> */}
        <Image source={require("./homegif2.gif")} style={styles.logo} />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            // marginTop: 130,
            textAlign: "center",
          }}
        >
          What can I translate for you today?
        </Text>
      </View>

      <View style={styles.mainBox}>
        <View style={styles.CameraButton}>
          <Camera
            onPress={handleCameraPress}
            stroke="black"
            width={60}
            height={60}
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
            }}
          >
            Translate
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 100,
    width: 300,
    height: 300,
    // position: "relative",
    // opacity: 0.8,
    // backgroundColor: "#FFF4EB",
    // borderRadius: 10,
  },
  mainBox: {
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  CameraButton: {
    width: 130,
    height: 130,
    backgroundColor: "#FFF4EB",
    marginRight: 25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  TextButton: {
    width: 130,
    height: 130,
    backgroundColor: "#FFF4EB",
    marginLeft: 25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 0,
    marginBottom: 0,
  },
});

export default HomeScreen;
