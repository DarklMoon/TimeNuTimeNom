import React, {useState} from "react";
import { Button,
  StyleSheet,
  Text,
  View,
  ScrollView, 
  FlatList, 
  SafeAreaView, 
  StatusBar, 
  Image,
  TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { DATA } from "../../data/PatternData"
import HeaderComponent from "../../components/HeaderComponent";

const Item = ({ item, onPress, backgroundColor, textColor, days }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <View style={{ flexDirection: "row", marginTop:10 }}>
      {days.map((str, index) => (
        <Text key={index} style={[styles.days, { color: textColor }]}>
          {index === days.length - 1 ? str + ". " : str + ". "}
        </Text>
      ))}
    </View>
  </TouchableOpacity>
);

const Pattern = ({navigation}) => {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({ item }) => {
      // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      const backgroundColor = item.backgroundColor;
      const color = item.id === selectedId ? "black" : "white";
      const arrayOfDays = Object.keys(item.days)

      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
          days={arrayOfDays}
        />
      );
    };

    return (
      <LinearGradient
        colors={["#2FBCBC", "#D8FFF8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <HeaderComponent navigation={navigation} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.boxBackground}>
              <View style={{ position: "relative" }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    paddingTop: 30,
                    paddingLeft: 20,
                    paddingBottom: 10,
                  }}
                >
                  Pattern
                </Text>
                <View style={styles.line}></View>
              </View>
              {/* End Header In Box */}
              <SafeAreaView style={styles.flatContainer}>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  extraData={selectedId}
                />
              </SafeAreaView>
              <View style={styles.img}>
                <Image
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                  source={require("../../../image/IconAdded.png")}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    backgroundColor: ["#ff6347", "#3498db"],
    // marginTop: StatusBar.currentHeight || 0,
  },
  boxBackground: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    height: 680,
    marginTop: 10,
    borderRadius: 10,
  },
  line: {
    position: "absolute",
    right: 25,
    bottom: 25,
    height: 1,
    width: "60%",
    backgroundColor: "black",
  },

  flatContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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
  img: {
    position: "absolute",
    right: 15,
    bottom:20
  },
});

export default Pattern