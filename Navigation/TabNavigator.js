import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, SettingsStackNavigator } from "./StackNavigator";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  StyleSheet,
} from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        // style: {
        //   position: "absolute",
        //   bottom: 15,
        //   marginLeft: 10,
        //   marginRight: 10,
        //   left: 20,
        //   right: 20,
        //   elevation: 0,
        //   borderRadius: 15,
        //   height: 80,
        // },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("../assets/homeButton.png")}
                style={{
                  width: 25,
                  height: 25,
              
                }}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="☆"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Image
                source={require("../assets/star.png")}
                style={{
                  width: 25,
                  height: 25,
                }}
              />

              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                }}
              >
                History
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
