import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigator from "./assets/src/navigation/Navigator";
import Login from "./assets/src/screens/Login"

export default function App() {
  return (
    // <Login/>
    <Navigator/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
