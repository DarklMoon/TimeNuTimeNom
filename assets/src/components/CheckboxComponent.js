import Checkbox from "expo-checkbox";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MultiSelectList from "./MultiSelectList";
import SearchDropDownList from "./SearchDropDownList";
import { EVENT_FOR_MUTI } from "../data/EventData";
import { eventRef } from "../config/firebase";
import { addDoc, doc, getDocs, query, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";


// const data = [
//   { key: "1", value: "Mobiles" },
//   { key: "2", value: "Appliances" },
//   { key: "3", value: "Cameras" },
//   { key: "4", value: "Computers" },
//   { key: "5", value: "Vegetables" },
//   { key: "6", value: "Diary Products" },
//   { key: "7", value: "Drinks" },
// ];

export default function CheckboxComponent({label, setData}) {
  const [isChecked, setChecked] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [events, setEvents] = useState([]);
  const { user } = useSelector((state) => state.user);

  const fetchevents = async () => {
    const q = query(eventRef, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    var convertedData = data.map((item) => ({
      key: item.id,
      value: item.title,
    }));
    console.log("CONVERT_DATA: ", convertedData);
    setEvents(convertedData);
    console.log("Fetch_QueryDB:  ", events);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isChecked && events.length === 0) {
          await fetchevents();
        }

        console.log("EVENT_DATA: ", events);

      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, [isChecked, events]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={() => {
            {
              isChecked ? setChecked(false) : setChecked(true);
            }
            {
              showComponent ? setShowComponent(false) : setShowComponent(true);
            }
          }}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.paragraph}>{label}</Text>
      </View>
      {showComponent && (
        <MultiSelectList
          info={events}
          day={label}
          setData={setData}
          events={events}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
