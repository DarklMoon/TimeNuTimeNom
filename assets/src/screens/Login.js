import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Login = (props) => {
  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View>
        <Text>WELCOME TO</Text>
      </View>
      <View>
        <Text>TimeNuTimeNom</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
