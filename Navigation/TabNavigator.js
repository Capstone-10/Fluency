import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator } from "./StackNavigator";
import { View } from "react-native";
import { Home } from "react-native-feather";
import styles from "../styles";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "relative",
          height: "8%",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: () => (
              <Home style={styles.homeImage} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
