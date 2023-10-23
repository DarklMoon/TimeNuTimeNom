import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const CardPattern = ({ item, onPress, backgroundColor, textColor, days }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      {days.map((str, index) => (
        <Text key={index} style={[styles.days, { color: textColor }]}>
          {index === days.length - 1 ? str + ". " : str + ". "}
        </Text>
      ))}
    </View>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  days: {
    fontSize: 15,
  },
});

export default CardPattern;