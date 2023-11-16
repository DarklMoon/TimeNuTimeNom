import React, { useState, useEffect } from "react";
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


import { db } from "../../config/firebase";
import { eventRef } from "../../config/firebase";
import {
  addDoc,
  doc,
  deleteDoc,
  collection,
  getDocs,
  documentId,
  query,
  where,
  getFirestore,
} from "firebase/firestore";
import { useSelector } from "react-redux";



// import { PATTERN_DATA } from "../../data/PatternData";
import HeaderComponent from "../../components/HeaderComponent";
import ButtonComponent from "../../components/ButtonComponent";
import CardPattern from "../../components/CardPattern";
import CardEvent from "../../components/CardEvent";

const PatternDetail =  ({ navigation, route }) => {
  const [selectedId, setSelectedId] = useState();
  const data = route.params;
  const rawArrayOfDays = Object.keys(data.days);
  // console.log("DATA_PATTERN: ", data);

  const rawEvents = Object.entries(data.days);
  // console.log("PatternDetail:", rawEvents.length);
  // console.log("PatternId:", data.id);

  const sortDataByDay = (data, type) => {
    const sortOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    if (type === "event") {
      return data.sort((a, b) => {
        const dayOrderA = sortOrder.indexOf(a[0]);
        const dayOrderB = sortOrder.indexOf(b[0]);
        return dayOrderA - dayOrderB;
      });
    } else {
      return data.sort((a, b) => {
        const dayOrderA = sortOrder.indexOf(a);
        const dayOrderB = sortOrder.indexOf(b);
        return dayOrderA - dayOrderB;
      });
    }
  };

  const arrayOfDays = sortDataByDay(rawArrayOfDays, "pattern");
  const events = sortDataByDay(rawEvents, "event");

  const [renderCardEvent, setCardEvent] = useState([]);

  const fetchData = async (eventId) => {
    // console.log(`Call Fetch_Data by Agrument(${eventId})`);
    try {
      const q = query(eventRef, where(documentId(), "in", [eventId]));
      const querySnapshot = await getDocs(q); // Execute the query
      
      if (!querySnapshot.empty) {
        
        const docData = querySnapshot.docs[0].data();
        // console.log("DOCUMENT_LOG: ", docData);
        return docData

      } else {
        console.log("Document does not exist!");
        return null;
      }
    } catch (error) {
      console.log("Error fetching document:", error);
      return "error"
    }
  };

  const renderEvents = async () => {
    var uniqueEventId = [];
    var fetchEvent = [];
    var returnResult = []
    for (let i = 0; i < events.length; i++) {
      const day = events[i][0];
      const getKey = events[i][1];

      for (let j = 0; j < getKey.length; j++) {

        if (uniqueEventId.includes(getKey[j]) === false) {
          uniqueEventId.push(getKey[j]);
          const handlerFetch = await fetchData(getKey[j]);

          if (handlerFetch) {
            fetchEvent.push({
              key: getKey[j],
              event: handlerFetch,
            });

            returnResult.push({
              day: day,
              event: handlerFetch,
            });
          } else {
            console.log("Fetch data failed for ID:", getKey[j]);
          }
        } else {
          const matchedEventKey = fetchEvent.find((item) => item.key === getKey[j]);
          returnResult.push({
            day: day,
            event: matchedEventKey.event,
          });
        }     
    }    
  };
    await Promise.all(returnResult);

    setCardEvent(returnResult);
    
    return returnResult;
  }
  
  useEffect(() => {
    const fetchDataAndRender = async () => {
      const result = await renderEvents();
      console.log("Result_UseEffect:", result);
      // You can set the state here
      setCardEvent(result);
      console.log("EventUseState:", renderCardEvent)
    };

    // Call the fetchDataAndRender function
    fetchDataAndRender();
  }, []);

  const usePattern = () => {
    const currentDay = new Date();
    console.log(currentDay);
    navigation.navigate("Dashboard", {
      days: arrayOfDays,
    });
  };

  const deletePattern = async () => {
    try {
      const db = getFirestore(); // Make sure to initialize your Firestore instance
      const documentRef = doc(db, "patterns", data.id);
      await deleteDoc(documentRef);
      navigation.navigate("Pattern");
      console.log("Document deleted successfully");
    } catch (error) {
      console.error("Error deleting document: ", error.message);
    }
  };

  return (
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

            <View>
              {renderCardEvent.map((events, index) => (
                <View key={index}>
                  <CardEvent
                    onPress={() => {
                      console.warn("Go to Event Detail Page.");
                    }}
                    title={events.event.title}
                    day={events.day}
                    color={events.event.categories.bg}
                  />
                </View>
              ))}
            </View>

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
                onPress={usePattern}
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
