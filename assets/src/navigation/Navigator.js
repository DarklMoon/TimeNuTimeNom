import React from "react";

import { StyleSheet, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import Loading from "../screens/Login/Loading";
import Login from "../screens/Login/Login";
import Register from "../screens/Login/Register";
import RecoveryPW from "../screens/Login/RecoveryPW";
import ConfirmEmail from "../screens/Login/ConfirmEmail";
import ResetPW from "../screens/Login/ResetPW";

import Dashboard from "../screens/Dashboard";
import Pattern from "../screens/Pattern/Pattern";
import PatternDetail from "../screens/Pattern/PatternDetail";
import Event from "../screens/Event";
import Category from "../screens/Category";
import Setting from "../screens/Setting";

// import Test from "../components/Test";
// import Test2 from "../components/Test2";
const DrawerNavigator = createDrawerNavigator();
const BottmTapNavigator = createBottomTabNavigator();
const StackPatternNavigator = createNativeStackNavigator();
const StackLoginNavigator = createNativeStackNavigator();

export default function Navigator() {

  function PatternNavigator() {
    return (
      <StackPatternNavigator.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Pattern"
      >
        <StackPatternNavigator.Screen
          name="Pattern"
          component={Pattern}
          options={{
            title: "Pattern",
          }}
        />

        <StackPatternNavigator.Screen
          name="PatternDetail"
          component={PatternDetail}
          options={{
            title: "PatternDetail",
          }}
        />
      </StackPatternNavigator.Navigator>
    );
  }

  function HomeNavigator() {
    return (
      <BottmTapNavigator.Navigator screenOptions={{ headerShown: false }}>
        <BottmTapNavigator.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialIcons name="dashboard" size={size} color={color} />
              );
            },
          }}
        />
        <BottmTapNavigator.Screen
          name="Event"
          component={Event}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialIcons name="event-note" size={size} color={color} />
              );
            },
          }}
        />
        <BottmTapNavigator.Screen
          name="Category"
          component={Category}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialIcons name="category" size={size} color={color} />
              );
            },
          }}
        />
        <BottmTapNavigator.Screen
          name="Pattern"
          component={PatternNavigator}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons
                  name="car-shift-pattern"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <BottmTapNavigator.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="settings" size={size} color={color} />;
            },
          }}
        />
      </BottmTapNavigator.Navigator>
    );
  }

  function MainNavigator() {
    return (
      <DrawerNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <DrawerNavigator.Screen
          name="Dashboard"
          component={HomeNavigator}
          options={{
            title: "Dashboard",
            headerShown: false,
            headerStyle: {
              height: 50,
            },
            drawerIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name={focused ? "view-dashboard" : "view-dashboard-outline"}
                size={size}
                color="black"
              />
            ),
          }}
        />
        <DrawerNavigator.Screen
          name="Event"
          component={Event}
          options={{
            title: "Event",
            headerShown: true,
            headerStyle: {
              height: 0,
            },
          }}
        />
        <DrawerNavigator.Screen
          name="Category"
          component={Category}
          options={{
            title: "Dashboard",
            headerShown: true,
            headerStyle: {
              height: 0,
            },
          }}
        />
        <DrawerNavigator.Screen
          name="Pattern"
          component={PatternNavigator}
          options={{
            title: "Pattern",
            headerShown: true,
            headerStyle: {
              height: 0,
            },
          }}
        />
        <DrawerNavigator.Screen
          name="Setting"
          component={Setting}
          options={{
            title: "Setting",
            headerShown: true,
            headerStyle: {
              height: 0,
            },
          }}
        />
      </DrawerNavigator.Navigator>
    );
  }

  function LoginNavigator() {
    return (
      <StackLoginNavigator.Navigator
        initialRouteName="Loading"
        screenOptions={{ headerShown: false }}
      >
        <StackLoginNavigator.Screen name="Loading" component={Loading} />
        <StackLoginNavigator.Screen name="Login" component={Login} />
        <StackLoginNavigator.Screen name="RecoveryPW" component={RecoveryPW} />
        <StackLoginNavigator.Screen
          name="ConfirmEmail"
          component={ConfirmEmail}
        />
        <StackLoginNavigator.Screen name="ResetPW" component={ResetPW} />
        <StackLoginNavigator.Screen name="Register" component={Register} />
        <StackLoginNavigator.Screen name="Main" component={MainNavigator} />
      </StackLoginNavigator.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MainNavigator></MainNavigator>
      {/* <LoginNavigator></LoginNavigator> */}
    </NavigationContainer>
  );
}
