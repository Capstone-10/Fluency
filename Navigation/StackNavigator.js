import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Translate from "../screens/VoiceAndTextTranslate";
import Camera from "../screens/Camera";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Translate" component={Translate} />
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