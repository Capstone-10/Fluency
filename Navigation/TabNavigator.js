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
import { Home, Star } from "react-native-feather";
import History from "../screens/History";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          // position: "absolute",
          // bottom: 15,
          // marginLeft: 10,
          // marginRight: 10,
          // left: 20,
          // right: 20,
          // elevation: 0,
          // borderRadius: 15,

          height: "8%",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                height: "8%",
              }}
            >
              {/* <Image
                source={require("../assets/homeButton.png")}
                style={{
                  width: 25,
                  height: 25,
                  top: 15,
                }}
              /> */}
              <Home
                style={{
                  width: 25,
                  height: 25,
                  top: 15,
                  color: "black",
                }}
              ></Home>
              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                  top: 15,
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
          tabBarIcon: () => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                height: "8%",
              }}
            >
              {/* <Image
                source={require("../assets/star.png")}
                style={{
                  width: 25,
                  height: 25,
                  top: 15,
                }}
              /> */}
              <Star
                style={{
                  width: 25,
                  height: 25,
                  top: 15,
                  color: "black",
                }}
              ></Star>
              <Text
                style={{
                  color: "black",
                  fontSize: 12,
                  top: 15,
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
