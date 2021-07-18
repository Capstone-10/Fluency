import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import {
  useFonts,
  CedarvilleCursive_400Regular,
} from "@expo-google-fonts/cedarville-cursive";
import { ActivityIndicator } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import Tooltip from "react-native-walkthrough-tooltip";
import { Camera } from "react-native-feather";
import styles from "../styles"

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
  

  return (
    <ImageBackground
      source={require("../assets/homescreen.jpg")}
      style={styles.background}
    >
      <View style={styles.topView}>
        <View style={styles.helpButton}>
          <TouchableOpacity
            onPress={() => {
              setScreenTooltip(true);
            }}
          >
            <MaterialIcons name="help" size={35} color="#032D38" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.homeMiddleView}>
        <Text style={styles.homeMiddleViewText}>
          welcome to
        </Text>
        <Text style={styles.fluencyText}>
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
        <View style={styles.cameraButton}>
          <Camera
            onPress={handleCameraPress}
            stroke="black"
            width={60}
            height={60}
          >
            Camera
          </Camera>
        </View>
        <View style={styles.textButton}>
          <Text
            onPress={handleTranslatePress}
            style={styles.handleTranslateText}
          >
            Translate
          </Text>
        </View>
      </View>
      <View style={styles.tooltipView}>
        <Tooltip
          isVisible={screenTooltip}
          content={
            <View>
              <Text style={styles.tooltip}>
                Welcome to{" "}
                <Text
                  style={styles.welcomeToFluencyText}
                >
                  {" "}
                  Fluency{" "}
                </Text>
                , the place for all of your translation needs!
              </Text>

              <Text style={styles.tooltip}>
                You can click the camera icon to capture text from any image to
                translate.
              </Text>

              <Text style={styles.tooltip}>
                You can also click the "Translate" button to type your desired
                text for translation. After your text is translated, you can
                also have it read to you.
              </Text>

              <Text style={styles.tooltip}>
                You can translate up to 100 lines of text at once!
              </Text>

              <Text style={styles.tooltip}>
                Start by clicking either the camera icon or the "Translate"
                button!
              </Text>
            </View>
          }
          onClose={() => {
            setScreenTooltip(false);
          }}
        />
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
