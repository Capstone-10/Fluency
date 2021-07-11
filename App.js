import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import TabNavigator from "./Navigation/TabNavigator";
// import { MainStackNavigator } from "./Navigation/StackNavigator";
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <DrawerNavigator /> */}
      {/* <MainStackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
