import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigator from "./assets/src/navigation/Navigator";

export default function App() {
  return <Navigator/>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
