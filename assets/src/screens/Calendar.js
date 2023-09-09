import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text, View } from "react-native";

const Calendar = (props) => {
  return (
    <View style={styles.root}>
      <Text>Calendar Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Calendar;
