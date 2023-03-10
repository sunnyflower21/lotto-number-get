import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { HistoryListScreen } from "../screens/HistoryListScreen";
import Icons from "../components/Icons";

const Tab = createBottomTabNavigator();

export const BottomTabNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarIcon: ({ color }) => {
            const getIconName = () => {
              if (route.name === "HISTORY") {
                return "time";
              } else {
                return "home";
              }
            };
            const iconName = getIconName();
            return <Icons name={iconName} color={color}></Icons>;
          },
        };
      }}
    >
      <Tab.Screen name="HOME" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="HISTORY" component={HistoryListScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};
