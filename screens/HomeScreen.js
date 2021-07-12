import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";
import { Camera } from "react-native-feather";

//expo install @expo-google-fonts/cedarville-cursive
import {
  useFonts,
  CedarvilleCursive_400Regular,
} from "@expo-google-fonts/cedarville-cursive";

function HomeScreen({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    CedarvilleCursive_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

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
      <Text
        style={{
          marginTop: 15,
          fontSize: 25,
          fontFamily: "CedarvilleCursive_400Regular",
          textAlign: "center",
        }}
      >
        welcome to
      </Text>
      <Text
        style={{
          fontSize: 55,
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "CedarvilleCursive_400Regular",
        }}
      >
        Fluency
      </Text>
      <View style={styles.logoContainer}>
        {/* <Image source={require("./KakaoTalkGif.gif")} style={styles.logo} /> */}
        <Image source={require("./homegif2.gif")} style={styles.logo} />
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
    marginTop: 30,
    marginBottom: 0,
  },
});

export default HomeScreen;
