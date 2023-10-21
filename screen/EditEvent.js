import { LinearGradient } from "expo-linear-gradient";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as AddCalendarEvent from "react-native-add-calendar-event";
import RNCalendarEvents from "react-native-calendar-events";
import CalendarPage from "./CalendarPage";
import { useState } from "react";
import { TextArea } from "native-base";
import { ImagePicker } from "react-native-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Pressable } from "react-native";

export default function AddEvent() {
  const [date, setDate] = useState(new Date());

  const handleChange = (event) => {
    setDate(new Date(event.target.value));
  };

  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.AddEventsite}>
        <View style={{ margin: 10, justifyContent: "center" }}>
          <TextInput style={styles.Input} placeholder="Name"></TextInput>
          <TextInput style={styles.Input} placeholder="Catagory"></TextInput>
          <TextInput style={styles.Input} placeholder="Place"></TextInput>
          <View style={{ justifyContent: "flex-start" }}>
            <Text style={{ margin: 15, fontSize: 25, marginBottom: -5 }}>
              Description
            </Text>
            <TextInput
              style={{
                margin: 15,
                borderWidth: 0.5,
                justifyContent: "flex-start",
                fontSize: 18,
              }}
              placeholder="description"
              multiline={true}
              numberOfLines={5}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 420,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <View style={{ fontSize: 50 }}>
              <Pressable
                style={[
                  styles.buttons,
                  {
                    backgroundColor: "#d9d9d9",
                    marginRight: 15,
                    paddingLeft: 40,
                    paddingRight: 40,
                    elevation: 5,
                  },
                ]}
              >
                <Text style={{ fontSize: 22 }}>Canceled</Text>
              </Pressable>
            </View>
            <View>
              <Pressable style={[styles.buttons, { backgroundColor: "red" }]}>
                <Text
                  style={{
                    fontSize: 22,
                    paddingLeft: 50,
                    paddingRight: 50,
                    elevation: 5,
                  }}
                >
                  Apply
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AddEventsite: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
    marginTop: 80,
    borderRadius: 15,
  },
  Input: {
    margin: 15,
    fontSize: 25,
    borderBottomWidth: 2,
  },
  buttons: {
    padding: 10,
    borderRadius: 8,
  },
});
