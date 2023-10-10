import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Test = ({ navigation }) => {
  return {
    headerTitle: "Screen Title",
    headerRight: () => (
      <TouchableOpacity
        style={{ marginRight: 16 }}
        onPress={() => {
          // Handle icon press
        }}
      >
        <AntDesign name="staro" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

export default Test;
