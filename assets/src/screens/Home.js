import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text, View } from "react-native";


const Home = (props) => {
    return(
        <View style={styles.root}>
            <Text>Home Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home