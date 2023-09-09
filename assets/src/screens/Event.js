import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text, View } from "react-native";

const Event = (props) => {
  return (
    <View style={styles.root}>
      <Text>Event Page</Text>
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

export default Event;
