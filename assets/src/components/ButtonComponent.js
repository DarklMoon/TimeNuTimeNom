import React from "react";

import { StyleSheet, Text, Pressable } from "react-native";

const ButtonComponent = ({ onPress, text, type = "Primary", bgColor, fgColor, width }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`type${type}`], {width:width}]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  typePrimary: {
    backgroundColor: "#FD6B68",
    elevation: 15,
    shadowColor: "#FD6B68",
  },
  typeCancel: {
    backgroundColor: "#CAC2C1",
  },
  typeDelete: {
    backgroundColor: "red",
  },
});
export default ButtonComponent;
