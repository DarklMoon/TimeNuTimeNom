import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import { TimeDatePicker, Modes } from "react-native-time-date-picker";

import React, { useState } from "react";
import { Calendar, Agenda } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  const [selected, setSelected] = useState("");
  const [selectedDate, setSelectedDate] = useState([""]);
  const [markedDates, setMarkedDates] = useState({
    "2023-10-14": {
      selected: true,
      selectedColor: "red",
    },
    "2023-10-15": {
      marked: true,
      dots: ["blue", "green"],
      activeOpacity: 0,
    },
    "2023-10-16": {
      selected: true,
    },
  });

  console.log("SELECTED:", selected);

  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.boxBackground}>
            <View>
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
                  Dashboard
                </Text>
                <Text style={{ position: "absolute", right: 25, bottom: 25 }}>
                  2023-10-11
                </Text>
                <View style={styles.line}></View>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <Calendar
                style={styles.carlender}
                // theme={{
                //   "stylesheet.calendar.header": {
                //     dayTextAtIndex0: {
                //       color: "red",
                //     },
                //   },
                //   textDayFontSize: 18,
                //   textMonthFontSize: 25,
                //   textDayHeaderFontSize: 16,
                //   // calendarBackground: 0,
                //   todayTextColor: "blue",
                //   selectedDayTextColor: "white",
                //   textSectionTitleColor: "gray",
                //   todayButtonFontSize: 50,
                //   headerstyle: {
                //     gap: 200,
                //   },
                // }}
                dayHeaderStyle={{
                  color: "red",
                  fontWeight: "bold",
                }}
                // current={Date()}
                minDate={"2000-01-01"}
                maxDate={"2100-12-31"}
                monthFormat={"MMMM yyyy"}
                hideExtraDays={false}
                firstDay={0}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={false}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={(subtractMonth) => subtractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={(addMonth) => addMonth()}
                enableSwipeMonths={true}
                // onMonthChange={}
                onDayPress={(day) => {
                  setSelected(day.dateString);
                }}
                markingType={"multi-dot"}
                // markedDates={markedDates}
                markedDates={{
                  '2023-10-18': {marked: true, dotColor: 'red', activeOpacity: 0},}}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: "#30C184",
                  width: 100,
                  height: 100,
                  margin: 10,
                  marginBottom: 100,
                }}
              >
                <Text>Completed</Text>
                <Text>15 events</Text>
                {/* <Button title="Add Activity" onPress={Date()}></Button> */}
              </View>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: "#4987FF",
                  width: 100,
                  height: 100,
                  margin: 10,
                  marginBottom: 100,
                }}
              >
                <Text>To Do</Text>
                <Text>20 events</Text>
                {/* <Button title="Add Activity" onPress={Date()}></Button> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    backgroundColor: ["#ff6347", "#3498db"],
  },
  boxBackground: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    height: 680,
    marginTop: 80,
    borderRadius: 10,
  },
  carlender: {
    borderRadius: 10,
    margin: 5,
    // paddingTop: 30,
    borderWidth: 1,
    maxHeight: 1000,
  },
  line: {
    position: "absolute",
    right: 25,
    bottom: 25,
    height: 1,
    width: "40%",
    backgroundColor: "black",
  },
});

export default Dashboard;
