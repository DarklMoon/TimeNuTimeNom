import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { firebaseDB } from "../../config/firebase"

// import firestore from "@react-native-firebase/firestore";
import { getDocs, deleteDoc, collection } from "firebase/firestore";
// import * as firebase from 'firebase';
// import 'firebase/firestore'; // If you're using Firestore
import { firebase } from "../../config/firebase";



// import { PATTERN_DATA } from "../../data/PatternData";
import HeaderComponent from "../../components/HeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import CardPattern from "../../components/CardPattern";
import CardEvent from "../../components/CardEvent";

const PatternDetail = ({ navigation, route }) => {
  const [selectedId, setSelectedId] = useState();
  const data = route.params
  const arrayOfDays = Object.keys(data.days);
  const events = Object.entries(data.days);
  console.log("PatternDetail:", events.length)
  console.log("PatternI_d:", data.id)

  const renderEvents = () =>{
      const showEvent = []
    for(let i=0; i<events.length; i++){
        const day = events[i][0];
        const getKey = Object.keys(events[i][1]);
        console.log("Event In Loop", events[i]);
        console.log("Day:", day);
        console.log("Event:", getKey);
    
    //   console.log("Time:", eventTime);
      for(let j=0; j<getKey.length; j++){
        const eventTitle = events[i][1][getKey[j]].title;
        const eventTime = events[i][1][getKey[j]].startTime;
        console.log("EventKey:", getKey[j]);
        console.log("Title:", eventTitle);
        console.log("Time:", eventTime)
        showEvent.push(
          <View key={getKey[j]}>
            <CardEvent
              onPress={() => {
                console.warn("Go to Event Detail Page.");
              }}
              title={eventTitle}
              time={eventTime}
              day={day}
            />
          </View>
        );

      }
    }
    return showEvent;
  }
const deletePattern = async () => {
  try {
    console.log("FIREBASE_DB: ", firebase);
    const delSubjDoc = firebase.firestore().collection("patterns").doc(data.id);
    await delSubjDoc.delete();
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document: ", error.message);
  }
}

  const deleteSubject= ()=> {
    const delSubjDoc = firestore().collection("patterns").doc(data.id);
    delSubjDoc.delete().then(() => {
        navigation.navigate("Pattern");
        console.log("DELETE PATTERN SUCCESSFUL")
      // Alert.alert(
      //   "Deleting Alert",
      //   "The subject was deleted!! Pls check your DB!!"
      // );
    });
  }
  return (
    // <LinearGradient
    //   //   colors={["#2FBCBC", "#D8FFF8"]
    //   colors={["#2FBCBC", "#D8FFF8"]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }}
    //   style={styles.container}
    // >
    <View style={[styles.container]}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <HeaderComponent navigation={navigation} iconLeft={"arrow-back"} />
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
            <CardPattern
              item={data}
              backgroundColor={"white"}
              textColor={"black"}
              days={arrayOfDays}
            />
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
                Events
              </Text>
              <View style={styles.line}></View>
            </View>

            <View>{renderEvents()}</View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 30,
                paddingBottom: 10,
              }}
            >
              <ButtonComponent
                text={"Use Pattern"}
                width={"30%"}
                // onPress={}
              />
              <ButtonComponent
                text={"Edit"}
                width={"30%"}
                type={"Cancel"}
                // onPress={}
              />
            </View>
            <View
              style={{ alignItems: "center", padding: 10, paddingBottom: 20 }}
            >
              <ButtonComponent
                text={"Delete"}
                width={"40%"}
                type={"Delete"}
                onPress={deletePattern}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  boxBackground: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
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
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default PatternDetail;
