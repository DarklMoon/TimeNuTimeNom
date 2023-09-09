import React from "react";

import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import Home from "../screens/Home"
import Calendar from "../screens/Calendar"
import Event from "../screens/Event"
import Category from "../screens/Category"
import Setting from "../screens/Setting"

const DrawerNavigator = createDrawerNavigator();
const BottmTapNavigator = createBottomTabNavigator();

function HomeNavigator(){
  return(
  <BottmTapNavigator.Navigator>
    <BottmTapNavigator.Screen name="home" component={Home} />
    <BottmTapNavigator.Screen name="calendar" component={Calendar} />
    <BottmTapNavigator.Screen name="event" component={Event} />
    <BottmTapNavigator.Screen name="category" component={Category} />
    <BottmTapNavigator.Screen name="setting" component={Setting} />
  </BottmTapNavigator.Navigator>
  )
}

function MainNavigator() {
  return (
    <DrawerNavigator.Navigator screenOptions={{headerShown: false}}>
      <DrawerNavigator.Screen name="home" component={HomeNavigator} />
      <DrawerNavigator.Screen name="calendar" component={Calendar} />
      <DrawerNavigator.Screen name="event" component={Event} />
      <DrawerNavigator.Screen name="category" component={Category}/>
      <DrawerNavigator.Screen name="setting" component={Setting}/>
    </DrawerNavigator.Navigator>
  );
}




export default function Navigator() {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
}
