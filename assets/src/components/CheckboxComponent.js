import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MultiSelectList from "./MultiSelectList";
import SearchDropDownList from "./SearchDropDownList";

const data = [
  { key: "1", value: "Mobiles", disabled: true },
  { key: "2", value: "Appliances" },
  { key: "3", value: "Cameras" },
  { key: "4", value: "Computers", disabled: true },
  { key: "5", value: "Vegetables" },
  { key: "6", value: "Diary Products" },
  { key: "7", value: "Drinks" },
];

export default function CheckboxComponent({label}) {
  const [isChecked, setChecked] = useState(false);
  const [showComponent, setShowComponent] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={()=>{
              {isChecked ? setChecked(false): setChecked(true)}
              {showComponent ? setShowComponent(false): setShowComponent(true)}
          }}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.paragraph}>{label}</Text>
      </View>
      {showComponent && <MultiSelectList info={data} />}
      {/* <SearchDropDownList /> */}
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
