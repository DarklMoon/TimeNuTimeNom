import React from "react";

import { StyleSheet, Text, TextInput, View } from "react-native";

const InputField = ({value, setValue, placeholder, secureText}) => {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#D9D8E0"
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureText}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",

    borderColor: "#CECECE",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    padding:6,
    marginVertical: 5,
  },
});
export default InputField;
