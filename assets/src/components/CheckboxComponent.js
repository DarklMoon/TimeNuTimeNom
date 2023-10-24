import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MultiSelectList from "./MultiSelectList";
import SearchDropDownList from "./SearchDropDownList";
// import { EVENT_DATA, EVENT_FOR_MUTI } from "../data/EventData";


export default function CheckboxComponent({label, setData}) {
  const [isChecked, setChecked] = useState(false);
  const [showComponent, setShowComponent] = useState(false)
  // console.log(EVENT_FOR_MUTI);
  const data = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers"},
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={() => {
            {
              isChecked ? setChecked(false) : setChecked(true);
            }
            {
              showComponent ? setShowComponent(false) : setShowComponent(true);
            }
          }}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.paragraph}>{label}</Text>
      </View>
      {showComponent && (
        <MultiSelectList info={data} day={label} setData={setData} />
      )}
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
