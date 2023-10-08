import React, { useRef, useState, useEffect } from "react";
import { Animated, Text, View, StyleSheet, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Loading = (props) => {
  const navigation = useNavigation();

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      navigation.navigate('Login');
    }, 1000);

    return () => clearTimeout(timeout)
  }, [])

  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
        <View>
          <Text style={styles.font_welcome}>WELCOME TO</Text>
        </View>
        <View>
          <Text style={styles.font_TimeNu}>TimeNuTimeNom</Text>
        </View>
        <View>
          <Image
          style={styles.img}
            source={require("../../../image/calendar-icon.png")}
          />
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
  font_welcome: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  font_TimeNu: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
  },
  img:{
    marginTop: 30,
  }
});

export default Loading;
