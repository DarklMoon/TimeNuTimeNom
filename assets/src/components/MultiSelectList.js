import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { MultipleSelectList } from "react-native-dropdown-select-list";

const MultiSelectList = ({ info }) => {
    const [selected, setSelected] = React.useState([]);
    
  return (
    <View>
      <View>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={info}
          save="value"
        />
      </View>
      <View>
        <MultipleSelectList
          setSelected={(val) => setSelected(val)}
          data={info}
          save="value"
          onSelect={() => alert(selected)}
          label="Categories"
        />
      </View>
    </View>
  );
};

export default MultiSelectList;
