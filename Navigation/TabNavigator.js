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
          // height: "8%",
          display: "flex",
          //flexDirection: "row",
          //backgroundColor: "yellow",
          //textAlign: "center",
          alignItems: "center",
          //alignContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabView}>
              <Home style={styles.homeStarImage} />
              <Text style={styles.homeStarText}>HOME</Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="☆"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.tabView}>
              <Star style={styles.homeStarImage} />
              <Text style={styles.homeStarText}>History</Text>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabView: {
    textAlign: "center",
    alignItems: "center",
    alignContent: "center",
    // display: "flex",
    // flex: 1,
    minHeight: "8%",
    //backgroundColor: "pink",
  },
  homeStarImage: {
    //width: 25,
    // height: 25,
    color: "black",
    top: "38%",
  },
  homeStarText: {
    color: "black",
    fontSize: 12,
    top: "38%",
  },
});

export default TabNavigator;
