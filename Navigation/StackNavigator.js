import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Translate from "../screens/TextTranslate";
import Camera from "../screens/Camera";
import CameraTranslation from "../screens/CameraTranslation";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen
        name="Camera Translation"
        component={CameraTranslation}
        prop
      />
      <Stack.Screen name="Translate" component={Translate} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
