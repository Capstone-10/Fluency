import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Translate from "../screens/VoiceAndTextTranslate";
import Camera from "../screens/Camera";
import Settings from "../screens/Settings";
import CameraTranslation from "../screens/CameraTranslation";
import History from "../screens/History";

const Stack = createStackNavigator();

// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 55, height: 30 }}
//       source={require("./RightPointer.gif")}
//     />
//   );
// }

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   headerLeft: () => LogoTitle(),
        // }}
      />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen
        name="Camera Translation"
        component={CameraTranslation}
        props
      />
      <Stack.Screen name="Translate" component={Translate} />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, SettingsStackNavigator };
