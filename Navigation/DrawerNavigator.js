import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingsStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import SignIn from "../screens/SignIn";
import Register from "../screens/Register";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Sign In" component={SignIn} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
