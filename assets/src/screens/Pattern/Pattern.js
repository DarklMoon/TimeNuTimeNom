import React, { useState, useEffect } from "react";
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
import { AntDesign } from "@expo/vector-icons";   
import { LinearGradient } from "expo-linear-gradient"
;

import Modal from "react-native-modal";

import { PATTERN_DATA } from "../../data/PatternData"
import HeaderComponent from "../../components/HeaderComponent";
import CardPattern from "../../components/CardPattern";
import InputField from "../../components/InputField";
import CustomCheckBox from "../../components/CustomCheckBox"
import CheckboxComponent from "../../components/CheckboxComponent";
import MultiSelectList from "../../components/MultiSelectList";
import ButtonComponent from "../../components/ButtonComponent";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { async } from "@firebase/util";
import { addDoc, doc, getDocs, query, where } from "firebase/firestore";
import { patternRef } from "../../config/firebase";
import { useIsFocused } from "@react-navigation/native";


const Pattern = ({navigation}) => {
    const [selectedId, setSelectedId] = useState();
    const [patternTitle, setPatternTitle] = useState("");
    const[isModalVisible, setModalVisible] = useState(false);
    const [mondayEvent, setMondayEvent] = useState([]);
    const [tuesdayEvent, setTuesdayEvent] = useState([]);
    const [wednesdayEvent, setWednesdayEvent] = useState([]);
    const [thursdayEvent, setThursdayEvent] = useState([]);
    const [fridayEvent, setFridayEvent] = useState([]);
    const [saturdayEvent, setSaturdayEvent] = useState([]);
    const [sundayEvent, setSundayEvent] = useState([]);
    const [stateCreate, setStateCreate] = useState(false);
    const { user } = useSelector(state=>state.user);
    const [patternShow, setPatternShow] = useState([])
    const [pattern, setPattern] = useState(
      {
      id: "test",
      title: "",
      bgColor: "#FFFFFF",
      days: {},
    }
    );
    const isFocused = useIsFocused();

    // const { user } = useAuth();
    // setUid(user.uid)
    console.log("UID_: ", user.uid)

    const fetchPattern = async ()=>{
      const q = query(patternRef, where("userId", "==", user.uid))
      const querySnapshot = await getDocs(q);
      let data=[];
      querySnapshot.forEach(doc=>{
        data.push({...doc.data(), id: doc.id})
      })
      setPatternShow(data)
    }

    const handleCreatePattern = async ()=> {
      if (pattern && stateCreate){
        let doc = await addDoc(patternRef, {
          title: pattern.title,
          days: pattern.days,
          userId: user.uid
        })
        if(doc && doc.id){
          console.log("ADD DATA SUCCESSFUL")
        }
      }
    }


    const updatePattern = ({ daysPattern, pattern }) => {
      return {
        ...pattern,
        title: patternTitle,
        days: {
          ...pattern.days,
          ...daysPattern,
        },
      };
    };

    const resetPattern = () => {
      setPatternTitle("");
      setMondayEvent([]);
      setTuesdayEvent([]);
      setWednesdayEvent([]);
      setThursdayEvent([]);
      setFridayEvent([]);
      setSaturdayEvent([]);
      setSundayEvent([]);
    }

    const setUpEvent = () => {
      let updatedPattern = { ...pattern };

      if (mondayEvent.length !== 0) {
        var mondayPattern = { Mon: mondayEvent };
        updatedPattern = updatePattern({
          daysPattern: mondayPattern,
          pattern: updatedPattern,
        });
      }

      if (tuesdayEvent.length !== 0) {
        var tuesdayPattern = { Tue: tuesdayEvent };
        updatedPattern = updatePattern({
          daysPattern: tuesdayPattern,
          pattern: updatedPattern,
        });
      }
      if (wednesdayEvent.length != 0) {
        var wednesdayPattern = { Wed: wednesdayEvent };
        updatedPattern = updatePattern({
          daysPattern: wednesdayPattern,
          pattern: updatedPattern,
        });
      }
      if (thursdayEvent.length != 0) {
        var thursdayPattern = { Thu: thursdayEvent };
        updatedPattern = updatePattern({
          daysPattern: thursdayPattern,
          pattern: updatedPattern,
        });
      }
      if (fridayEvent.length != 0) {
        var fridayPattern = { Fri: fridayEvent };
        updatedPattern = updatePattern({
          daysPattern: fridayPattern,
          pattern: updatedPattern,
        });
      }
      if (saturdayEvent.length != 0) {
        var saturdayPattern = { Sat: saturdayEvent };
        updatedPattern = updatePattern({
          daysPattern: saturdayPattern,
          pattern: updatedPattern,
        });
      }
      if (sundayEvent.length != 0) {
        var sundayPattern = { Sun: sundayEvent };
        updatedPattern = updatePattern({
          daysPattern: sundayPattern,
          pattern: updatedPattern,
        });
      }

      setPattern(updatedPattern);
      setStateCreate(true);
    }
    
    useEffect(() => {
      console.log("useEffect_PATTERN: ", pattern);
      if(stateCreate === true)
        handleCreatePattern()
        fetchPattern();
      setStateCreate(false);
    }, [stateCreate]);

     useEffect(() => {
       if(isFocused)
        fetchPattern()
       console.log("PATTERN_SHOW: ",patternShow)
     }, [isFocused])

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const renderItem = ({ item }) => {
      // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      // const color = item.id === selectedId ? "black" : "white";
      const sortOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const arrayOfDays = Object.keys(item.days)
      console.log("DAY_OF_PATTERN: ", arrayOfDays)
      const sortedArray = arrayOfDays.sort((a, b) => {
        const dayOrderA = sortOrder.indexOf(a);
        const dayOrderB = sortOrder.indexOf(b);
        return dayOrderA - dayOrderB;
      });
      console.log(sortedArray)

      // console.log("ITEM_IN_CARD: ", item)
      // fetchPattern();
      // console.log("Item:", item)
      
      return (
        <CardPattern
          item={item}
          onPress={() => {
            setSelectedId(item.id);
            navigation.navigate("PatternDetail", {
              id: item.id,
              title: item.title,
              // bgColor: item.bgColor,
              days: item.days,
            });
          }}
          backgroundColor={"white"}
          textColor={"black"}
          days={sortedArray}
        />
      );
    };

    

    return (
      <LinearGradient
        colors={["#2FBCBC", "#FFFFFF"]}
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
                    paddingBottom:20,
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
                  data={patternShow}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  extraData={selectedId}
                />
              </SafeAreaView>

              <View style={styles.img}>
                <TouchableOpacity onPress={()=>{
                  toggleModal();
                  setPattern({
                    id: "test",
                    title: "",
                    bgColor: "#FFFFFF",
                    days: {},
                  });
                }}>
                  <Image
                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                    source={require("../../../image/IconAdded.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <Modal
            onBackdropPress={() => {
              setModalVisible(false);
              setPatternTitle("");
            }}
            onBackButtonPress={() => {
              setModalVisible(false);
              setPatternTitle("");
            }}
            isVisible={isModalVisible}
            onSwipeComplete={toggleModal}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 50 }}
            >
              <View style={styles.modalContent}>
                <AntDesign
                  name="close"
                  size={24}
                  color="black"
                  style={{ alignSelf: "flex-end" }}
                  onPress={() => {
                    setModalVisible(false);
                    resetPattern();
                  }}
                />
                <View style={styles.center}>
                  <Text
                    style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}
                  >
                    Create your pattern!
                  </Text>
                </View>
                <View style={{ flex: 1, marginTop: 45, alignItems: "center" }}>
                  <View
                    style={{
                      position: "relative",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        position: "absolute",
                        top: -16,
                        left: 35,
                        // fontSize: 12,
                        fontWeight: "700",
                      }}
                    >
                      Pattern Title
                    </Text>
                    <InputField
                      placeholder={"Enter pattern title"}
                      value={patternTitle}
                      setValue={setPatternTitle}
                    />
                  </View>
                </View>
                {/* <CustomCheckBox/> */}
                <View style={{ padding: 20 }}>
                  <View style={{ marginLeft: 15, marginBottom: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>Select day</Text>
                  </View>
                  <CheckboxComponent
                    label={"Monday"}
                    setData={setMondayEvent}
                  />
                  <CheckboxComponent
                    label={"Tuesday"}
                    setData={setTuesdayEvent}
                  />
                  <CheckboxComponent
                    label={"Wednesday"}
                    setData={setWednesdayEvent}
                  />
                  <CheckboxComponent
                    label={"Thursday"}
                    setData={setThursdayEvent}
                  />
                  <CheckboxComponent
                    label={"Friday"}
                    setData={setFridayEvent}
                  />
                  <CheckboxComponent
                    label={"Saturday"}
                    setData={setSaturdayEvent}
                  />
                  <CheckboxComponent
                    label={"Sunday"}
                    setData={setSundayEvent}
                  />

                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: 30,
                      paddingBottom: 30,
                    }}
                  >
                    <ButtonComponent
                      text={"Add Pattern"}
                      width={"40%"}
                      onPress={()=>{
                        setUpEvent();
                        setModalVisible(false);
                        resetPattern()
                        setStateCreate(true)
                        
                      }}
                    />
                    <ButtonComponent
                      text={"Cancel"}
                      width={"40%"}
                      type={"Cancel"}
                      onPress={() => {
                        setModalVisible(false);
                        setPatternTitle("");
                        resetPattern();
                      }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </Modal>
        </View>
      </LinearGradient>
    );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    // maxHeight: 500,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    // backgroundColor: ["#ff6347", "#3498db"],
  },
  boxBackground: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    marginTop: 10,
    borderRadius: 10,
    paddingBottom:20,
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
  img: {
    position: "absolute",
    right: 15,
    bottom:15,
  },
});

export default Pattern