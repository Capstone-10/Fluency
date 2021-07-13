import React, { useState } from "react";
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

import { MaterialIcons } from "@expo/vector-icons";
import Tooltip from "react-native-walkthrough-tooltip";

import { Camera } from "react-native-feather";

//expo install @expo-google-fonts/cedarville-cursive
import {
  useFonts,
  CedarvilleCursive_400Regular,
} from "@expo-google-fonts/cedarville-cursive";

function HomeScreen({ navigation }) {
  const [screenTooltip, setScreenTooltip] = useState(false);

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
      source={require("../assets/homescreen.jpg")}
      style={styles.background}
    >
      <View style={styles.topView}>
        <View style={styles.HelpButton}>
          <TouchableOpacity
            onPress={() => {
              setScreenTooltip(true);
            }}
            // style={{ marginRight: 25, marginBottom: 25 }}
          >
            <MaterialIcons name="help" size={35} color="#032D38" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middleView}>
        <Text
          style={{
            //marginTop: 15,
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
          <Image
            source={require("../assets/homegif2.gif")}
            style={styles.logo}
          />
        </View>
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

      <Tooltip
        isVisible={screenTooltip}
        content={
          <View>
            <Text style={styles.Tooltip}>
              Click the Camera icon to take a picture of some text you'd like to
              translate.
            </Text>
            <Text />
            <Text style={styles.Tooltip}>
              Click the Translate button to type or speak your desired
              translation
            </Text>
          </View>
        }
        onClose={() => {
          setScreenTooltip(false);
        }}
      ></Tooltip>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  topView: {
    //10
    height: "10%",
    paddingTop: "5%",
    paddingRight: "5%",
    alignSelf: "flex-end",
  },
  middleView: {
    //50
    height: "50%",
    top: 15,
    //bottom: 10,
    // marginTop: "10%",
    //paddingBottom: "10%",
    //paddingBottom: "10%",
  },
  mainBox: {
    //30
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "40%",
    // paddingBottom: "10%",
    //paddingTop: "20%",
  },

  CameraButton: {
    width: 130,
    height: 130,
    backgroundColor: "#DD8138",
    marginRight: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  TextButton: {
    width: 130,
    height: 130,
    backgroundColor: "#439654",
    marginLeft: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    //marginTop: 30,
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
  HelpButton: {
    alignSelf: "flex-end",
    //marginTop: 10,
    //marginBottom: 40,
  },
  Tooltip: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
