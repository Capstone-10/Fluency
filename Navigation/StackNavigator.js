import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Translate from "../screens/VoiceAndTextTranslate";
import Camera from "../screens/Camera";
import Settings from "../screens/Settings";
import TranslatedText from "../screens/TranslatedText";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 55, height: 30 }}
      source={require("./RightPointer.gif")}
    />
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => LogoTitle(),
        }}
      />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Translate" component={Translate} />
      <Stack.Screen name="TranslatedText" component={TranslatedText} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, SettingsStackNavigator };
