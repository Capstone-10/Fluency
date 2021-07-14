import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import TabNavigator from "./Navigation/TabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
