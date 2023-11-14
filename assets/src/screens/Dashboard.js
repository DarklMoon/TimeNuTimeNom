import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import { TimeDatePicker, Modes } from "react-native-time-date-picker";
import Modal from "react-native-modal";

import React, { useState, useEffect } from "react";
import { Calendar, Agenda } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";   
import { addDoc, doc, getDocs, query, where } from "firebase/firestore";
import { eventRef } from "../config/firebase";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

import HeaderComponent from "../components/HeaderComponent";

const Dashboard = ({ navigation, route }) => {
  const [selected, setSelected] = useState("");
  const [selectedDate, setSelectedDate] = useState([""]);
  const [onPressDays , setOnPressDays] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [eventShow, setEventShow] = useState([]);
  const isFocused = useIsFocused();
  const { user } = useSelector(state=>state.user)
  const [usePattern, setUsePattern] = ([]);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const fetchEvents = async () => {
    const q = query(eventRef, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setEventShow(data);
    console.log("EVENT_SHOW_UP_IN_FETCH: ", eventShow);
  };

  // console.log("OUT_ROUTE_>>>: ", route.params)
  // if (route.params){
  //   console.log("THIS_IS_ROUTE: ", route.params);
  //   console.log("----------------------------------------");
  // } 
  

  

  useEffect(() => {
    if (isFocused) {
      fetchEvents();
    }
    // console.log("ROUTE_DAYS_PATTERN: ", usePattern)
    console.log("EVENT_SHOW_UP: ", eventShow);
  }, [isFocused]);

  useEffect(() => {
    // This effect runs once when the component mounts
    const currentDay = new Date();
    const currentDayS = currentDay.toISOString().slice(0, 10);
    setSelected(currentDayS);
  }, []);

  const rawSelectdDay = new Date(selected);
  console.log("SELECTED:", selected);

  const dayNumber = rawSelectdDay.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[dayNumber];
  console.log("CONVERT:", dayName); 

  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar hidden={false} />
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
                Dashboard
              </Text>
              <Text style={{ position: "absolute", right: 25, bottom: 25 }}>
                {selected}
              </Text>
              <View style={styles.line}></View>
            </View>
            {/* Calendar */}
            <View style={{ flex: 2 }}>
              <Calendar
                style={styles.carlender}
                theme={{
                  "stylesheet.calendar.header": {
                    dayTextAtIndex0: {
                      color: "red",
                    },
                  },
                  textDayFontSize: 20,
                  textMonthFontSize: 25,
                  textDayHeaderFontSize: 16,
                  // calendarBackground: 0,
                  todayTextColor: "blue",
                  selectedDayTextColor: "white",
                  textSectionTitleColor: "gray",
                  todayButtonFontSize: 50,
                  headerstyle: {
                    gap: 200,
                  },
                }}
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
                  fetchEvents();
                  toggleModal();
                }}
                markingType="multi-period"
                markedDates={{
                  "2023-09-14": {
                    periods: [
                      { startingDay: false, endingDay: true, color: "#5f9ea0" },
                      { startingDay: false, endingDay: true, color: "#ffa500" },
                      { startingDay: true, endingDay: false, color: "#f0e68c" },
                    ],
                  },
                  "2023-09-15": {
                    periods: [
                      { startingDay: true, endingDay: false, color: "#ffa500" },
                      { color: "transparent" },
                      {
                        startingDay: false,
                        endingDay: true,
                        color: "#f0e68c",
                      },
                    ],
                  },
                  [selected]: { selected: true, selectedColor: "orange" },
                }}
              />
            </View>
            {/* Analyzis */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: "#30C184",
                  width: 100,
                  height: 100,
                  margin: 10,
                  borderRadius: 10,
                }}
              >
                <View style={{ position: "relative" }}>
                  <View style={{ position: "relative", top: 12, left: 15 }}>
                    <Text style={{ color: "white", fontSize: 18 }}>
                      Completed
                    </Text>
                  </View>
                  <View style={{ position: "relative", top: 23, left: 35 }}>
                    <Text style={{ color: "white", fontSize: 15 }}>
                      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                        15
                      </Text>{" "}
                      events
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: "#4987FF",
                  width: 100,
                  height: 100,
                  margin: 10,
                  marginBottom: 100,
                  borderRadius: 10,
                }}
              >
                <View style={{ position: "relative" }}>
                  <View style={{ position: "relative", top: 12, left: 15 }}>
                    <Text style={{ color: "white", fontSize: 18 }}>To Do</Text>
                  </View>
                  <View style={{ position: "relative", top: 23, left: 35 }}>
                    <Text style={{ color: "white", fontSize: 15 }}>
                      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                        20
                      </Text>{" "}
                      events
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <Modal
          onBackdropPress={() => {
            setModalVisible(false);
          }}
          onBackButtonPress={() => {
            setModalVisible(false);
          }}
          isVisible={isModalVisible}
          onSwipeComplete={toggleModal}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 300 }}
          >
            <View style={styles.modalContent}>
              {/* <AntDesign
                name="close"
                size={24}
                color="black"
                style={{ alignSelf: "flex-end" }}
                onPress={() => {
                  setModalVisible(false);
                }}
              /> */}
              <View style={styles.center}>
                
              </View>
              
              
            </View>
          </ScrollView>
        </Modal>
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
    marginTop: 10,
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
  modalContent: {
    backgroundColor: "white",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    minHeight: 500,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#bbb",
    fontSize: 24,
    marginTop: 100,
  },
});

export default Dashboard;
