import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { MultipleSelectList } from "react-native-dropdown-select-list";

const MultiSelectList = ({ info }) => {
    const [selected, setSelected] = React.useState([]);
    
  return (
    <View>
      <View style={{margin: 10}}>
        <MultipleSelectList
          placeholder={"Select your events"}
          setSelected={(val) => setSelected(val)}
          data={info}
          save="value"
          onSelect={() => console.log(selected)}
          label="Events"
        />
      </View>
      {/* <View>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={info}
          save="value"
        />
      </View> */}
    </View>
  );
};

export default MultiSelectList;
