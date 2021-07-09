import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./Navigation/DrawerNavigator";
// import { MainStackNavigator } from "./Navigation/StackNavigator";
import BottomTabNavigator from "./Navigation/TabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <MainStackNavigator /> */}
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
