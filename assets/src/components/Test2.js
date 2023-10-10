import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const Test2 = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Your App Name</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => {
          // Additional action on item press
        }}
      >
        <Text style={styles.drawerItemText}>Custom Drawer Item</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: "lightblue",
  },
  drawerHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  drawerItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  drawerItemText: {
    fontSize: 16,
  },
});

export default Test2;
