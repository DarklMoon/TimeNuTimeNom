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
import { set } from "date-fns";


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
    const [patternData, setPatternData] =useState([])

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const renderItem = ({ item }) => {
      // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      const color = item.id === selectedId ? "black" : "white";
      const arrayOfDays = Object.keys(item.days)
      console.log("Item:", item)
      
      return (
        <CardPattern
          item={item}
          onPress={() => {
            setSelectedId(item.id);
            navigation.navigate("PatternDetail", {
              id: item.id,
              title: item.title,
              bgColor: item.bgColor,
              days: item.days,
            });
          }}
          backgroundColor={item.bgColor}
          textColor={color}
          days={arrayOfDays}
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
                  data={PATTERN_DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  extraData={selectedId}
                />
              </SafeAreaView>

              <View style={styles.img}>
                <TouchableOpacity onPress={toggleModal}>
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
                    setPatternTitle("");
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
                        // var [pattern, setPattern] = useState({
                        //   id: "abc",
                        //   title: { patternTitle },
                        //   bgColor: "#FFFFFF",
                        //   days: {}
                        // });
                      
                        // if (mondayEvent.length != 0) {
                        //   console.log("Pattern Monday Ex.:", mondayPattern);
                        //   var mondayPattern = {Mon: mondayEvent}

                        //   console.log(pattern)
                        // }
                        // if(tuesdayEvent.length != 0){
                        //   console.log("Pattern Tuesday Ex.:", tuesdayPattern);
                        //   var tuesdayPattern = { Tue: tuesdayEvent };
                          
                        //   console.log(pattern);
                        // }
                        // if(wednesdayEvent.length != 0){
                        //   console.log("Pattern Wednesday Ex.:", wednesdayPattern);
                        //   var wednesdayPattern = { Wed: wednesdayEvent };
                        // }
                        // if(thursdayEvent.length != 0){
                        //   console.log("Pattern Thursday Ex.:", thursdayPattern);
                        //   var thursdayPattern = { Thu: thursdayEvent };
                        // }
                        // if(fridayEvent.length != 0){
                        //   console.log("Pattern Friday Ex.:", fridayPattern);
                        //   var fridayPattern = { Thu: fridayEvent };
                        // }
                        // if(saturdayEvent.length != 0){
                        //   console.log("Pattern Saturday Ex.:", saturdayPattern);
                        //   var saturdayPattern = { Thu: saturdayEvent };
                        // }
                        // if (sundayEvent.length != 0) {
                        //   console.log("Pattern Sunday Ex.:", sundayPattern);
                        //   var sundayPattern = { Thu: sundayEvent };
                        // }

                        // const updatedPattern = {
                        //   ...pattern,
                        //   days: {
                        //     ...pattern.days,
                        //     ...monday,
                        //     ...wednesday,
                        //   },
                        // };
                        // setPattern(updatedPattern);

                      }}
                    />
                    <ButtonComponent
                      text={"Cancel"}
                      width={"40%"}
                      type={"Cancel"}
                      onPress={() => {
                        setModalVisible(false);
                        setPatternTitle("");
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
    bottom: 10,
  },
});

export default Pattern