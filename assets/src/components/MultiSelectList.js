import { setDate } from "date-fns";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { MultipleSelectList } from "react-native-dropdown-select-list";

const MultiSelectList = ({ info, day, setData }) => {
  const [selected, setSelected] = React.useState([]);
  const dayName = day.slice(0, 3);
  // console.log("INFO:", info);
  // console.log("DAY:", dayName);

  return (
    <View>
      <View style={{ margin: 10 }}>
        <MultipleSelectList
          placeholder={"Select your events"}
          setSelected={(val) => {
            setSelected(val)
            setData(val)
          }}
          data={info}
          save="key"
          onSelect={() => console.log(selected)}
          label="Events"
          dropdownItemStyles={
            {
              // backgroundColor: "red"
            }
          }
          dropdownTextStyles={{
            color: "gray",
          }}
        />
      </View>
    </View>
  );
};

export default MultiSelectList;
