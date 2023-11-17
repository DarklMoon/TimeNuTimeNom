import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CardEvent = ({ onPress, title, day, color, time }) => {
    console.log(day)
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor: color}]}>
      <Text style={[styles.time, { color: "white" }]}>{day + " " + time}</Text>
      <Text style={[styles.title, { color: "white" }]}>{title}</Text>

      {/*<View style={{ flexDirection: "row", marginTop: 10 }}>
      {days.map((str, index) => (
        <Text key={index} style={[styles.days, { color: "white" }]}>
          {index === days.length - 1 ? str + ". " : str + ". "}
        </Text>
      ))}
    </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {

    padding: 15,
    paddingHorizontal: 30,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "black",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  time: {
    fontSize: 15,
  },
});

export default CardEvent;
