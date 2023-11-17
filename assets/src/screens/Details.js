import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const DetailEvent = ({ route, navigation }) => {
  const detail = route.params.data;
  console.log(detail.categories.Name);
  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.root}
    >
      <View style={{ flex: 1, margin: 20 }}>
        <View style={[styles.TopView, {}]}>
          <View style={{ marginTop: 50 }}>
            <Text style={[styles.title, { color: "white", fontWeight: "600" }]}>
              {detail.title}
            </Text>
          </View>
          <View style={{ alignItems: "flex-start" }}>
            <Text
              style={{
                fontSize: 18,
                color: "white",
                backgroundColor: detail.categories.bg,
                padding: 10,
                borderRadius: 15,
              }}
            >
              {detail.startDate}, {detail.startTime}
            </Text>
          </View>
          <View style={{ alignItems: "flex-start", marginTop: 5 }}>
            <Text
              style={{
                fontSize: 18,
                color: "white",
                backgroundColor: detail.categories.bg,
                padding: 8,
                borderRadius: 15,
              }}
            >
              #{detail.categories.Name}
            </Text>
          </View>
        </View>

        <View style={[styles.BottomView, {}]}>
          <View style={{ margin: 25 }}>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.header}>Place</Text>
              <Text style={styles.detail}>{detail.place}</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.header}>Starts</Text>
              <Text style={styles.detail}>
                {detail.startDate}, {detail.startTime}
              </Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.header}>Ends</Text>
              <Text style={styles.detail}>{detail.endDate}</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.header}>Description</Text>
              <Text style={styles.detail}>{detail.description}</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DetailEvent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  TopView: {
    flex: 1,
    margin: 20,
  },
  BottomView: {
    flex: 1.6,
    margin: -20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
  },
  detail: {
    fontSize: 18,
    marginLeft: 15,
    marginTop: 5,
  },
  title: {
    fontSize: 40,
  },
});
