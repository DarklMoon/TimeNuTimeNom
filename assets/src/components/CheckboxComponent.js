import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CheckboxComponent({label}) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.paragraph}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
