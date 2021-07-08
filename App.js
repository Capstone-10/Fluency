import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import Camera from "./screens/Camera";
import VoiceAndTextTranslate from "./screens/VoiceAndTextTranslate";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Translate" component={VoiceAndTextTranslate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
