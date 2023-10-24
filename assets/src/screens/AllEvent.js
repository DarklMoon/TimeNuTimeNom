import EVENT_DATA from "../data/EventData";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
// import library ที่จำเป็น
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import RNCalendarEvents from "react-native-calendar-events";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { eventRef } from "../config/firebase";
import { addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useEffect } from "react";
// RNCalendarEvents.checkPermissions((readOnly = false));

const AllEvent = ({ navigation, route }) => {
  // console.log(EVENT_DATA);
  const [Name, setName] = useState("");
  // const [Name, sestName] = useState("");
  const [description, setDescription] = useState("");
  //modal
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useSelector((state) => state.user);
  //Date & Time
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Startdate, setStartdate] = useState("0000-00-00");
  const [Enddate, setEnddate] = useState("0000-00-00");
  const [SorE, setSorE] = useState("");

  const [Event, setEvent] = useState([]);

  const [State, setState] = useState(false);
  // console.log(Event);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (text) => {
    setSearchTerm(text);
  };
  const handleSearch = () => {};

  //Date & Time
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().slice(0, 10);
    if (SorE == "e") {
      console.warn("A Enddate picked: ", formattedDate);
      setEnddate(formattedDate);
    }
    if (SorE == "s") {
      console.warn("A Startdate picked: ", formattedDate);
      setStartdate(formattedDate);
    }
    hideDatePicker();
  };

  const handleCreateEvent = async () => {
    if (Event) {
      let doc = await addDoc(eventRef, {
        title: Event.title,
        categories: Event.categories,
        place: Event.place,
        startTime: Event.startTime,
        endTime: Event.endTime,
        description: Event.description,
        userId: user.uid,
      });
      if (doc && doc.id) {
        console.log("ADD DATA SUCCESSFUL");
      }
    }
  };

  const Eventhandler = () => {
    const dataEvent = {
      title: Name,
      categories: {
        WorkOut: "#FFA607",
        Name: "WorkOut",
        bg: "#ffce47",
      },
      place: "",
      startTime: Startdate,
      endTime: Enddate,
      description: description,
      userId: user.uid,
    };
    setEvent(...Event, dataEvent);
    setState(true);
    // console.log(Event);

    console.log("5555");
  };

  useEffect(() => {
    if (State == true) {
      handleCreateEvent();
    }
    setState(false);
  }, [State]);

  const removeFirstObject = (item, Index) => {
    console.log(Index);
    const newList = Event.splice(Index, 1);
    setEvent(newList);
  };

  const Item = (data) => (
    <View
      style={{
        // backgroundColor:'skyblue',
        backgroundColor: data.bg,
        padding: 22,
        margin: 5,
        borderRadius: 15,
        border: 0,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 16, marginRight: 10 }}>{data.endTime}</Text>
        <Text style={{ fontSize: 16 }}>19/9/65</Text>
      </View>
      <Text style={styles.title}>{data.title}</Text>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 30,
          right: 20,
        }}
      >
        <Feather name="edit" size={24} color="black" />
        <FontAwesome5
          name="trash"
          marginLeft={20}
          size={24}
          color="black"
          onPress={removeFirstObject}
        />
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.root}
    >
      <View style={styles.root}>
        {/* modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={[styles.AddEventsite]}>
              <View style={{ margin: 10 }}>
                <TextInput
                  style={styles.Input}
                  placeholder="Name"
                  value={Name}
                  onChangeText={(input) => {
                    setName(input);
                  }}
                ></TextInput>
                {/* <TextInput
                  style={styles.Input}
                  placeholder="Catagory"
                  value={CatagoryName}
                  onChangeText={(input) => {
                    setCatagoryName(input);
                  }}
                ></TextInput> */}
                {/* <TextInput style={styles.Input} placeholder="Place"></TextInput> */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Pressable
                    style={{ flexDirection: "row" }}
                    onPress={() => {
                      showDatePicker();
                      setSorE("s");
                    }}
                  >
                    <Text style={{ marginTop: 5 }}>{Startdate}</Text>
                    <AntDesign
                      style={{ marginLeft: 5 }}
                      name="calendar"
                      size={28}
                      color="black"
                    />
                  </Pressable>
                  <Pressable
                    style={{ flexDirection: "row", marginLeft: 5 }}
                    onPress={() => {
                      showDatePicker();
                      setSorE("e");
                    }}
                  >
                    <Text style={{ marginTop: 5 }}>{Enddate}</Text>
                    <AntDesign
                      style={{ marginLeft: 5 }}
                      name="calendar"
                      size={28}
                      color="orange"
                    />
                  </Pressable>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                </View>
                <View style={{ justifyContent: "flex-start" }}>
                  <Text style={{ margin: 15, fontSize: 22, marginBottom: -5 }}>
                    Description
                  </Text>

                  <View>
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
                      value={description}
                      onChangeText={(input) => {
                        setDescription(input);
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    height: 400,
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <View style={{}}>
                    <Pressable
                      style={[
                        styles.buttons,
                        {
                          backgroundColor: "#d9d9d9",
                          marginRight: 15,
                          paddingLeft: 20,
                          paddingRight: 30,
                          elevation: 5,
                        },
                      ]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={{ fontSize: 22 }}>Canceled</Text>
                    </Pressable>
                  </View>
                  <View>
                    <Pressable
                      style={[
                        styles.buttons,
                        { backgroundColor: "red", elevation: 5 },
                      ]}
                      onPress={() => {
                        Eventhandler();
                        setState(true);
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          paddingLeft: 30,
                          paddingRight: 30,
                        }}
                      >
                        Apply
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* modal */}

        {/* searchbar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            value={searchTerm}
            onChangeText={handleChange}
            onSubmitEditing={handleSearch}
            style={{ marginRight: 125 }}
          />
          <EvilIcons
            name="search"
            size={24}
            color="black"
            style={{ marginTop: 2, borderLeftWidth: 0.5, paddingLeft: 5 }}
          />
        </View>
        {/* searchbar */}

        {/* add button */}
        <Pressable
          style={[styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={[styles.textStyle, styles.Open]}>+</Text>
        </Pressable>
        {/* add button */}

        <View style={styles.CategoryContainer}>
          <View style={{ margin: 20 }}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.header}>Event</Text>
                {/* count ที่ยังไม่ได้ทำ */}
                <Text style={styles.header}> </Text>
                <View
                  style={{
                    flex: 1,
                    height: 2,
                    backgroundColor: "black",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                />
              </View>
              <FlatList
                style={{ marginBottom: 130 }}
                data={Event}
                renderItem={({ item }) => (
                  <Item
                    title={item.title}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    description={item.description}
                    categoryName={item.categories.Name}
                    bg={item.categories.bg}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    padding: 5,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 30,
    backgroundColor: "#fff",
    borderWidth: 0.2,
  },
  CategoryContainer: {
    flex: 1,
    borderRadius: 15,
    margin: 8,
    backgroundColor: "#fcfcfc",
  },
  header: {
    fontSize: 50,
    fontWeight: "500",
  },
  catogoryItem: {},
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  //modalstyle
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    width: 300,
    height: 430,
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

    // alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
  },

  buttonOpen: {
    borderRadius: 100,
    width: 60,
    height: 60,
    elevation: 5,
    position: "absolute",
    right: 20,
    bottom: 20,
    zIndex: 9999,
    justifyContent: "center",
    backgroundColor: "#ff5757",
  },
  buttonClose: {
    borderRadius: 10,
    elevation: 5,
    padding: 15,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  Open: {
    fontSize: 40,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
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
    fontSize: 22,
    borderBottomWidth: 2,
  },
  buttons: {
    padding: 10,
    borderRadius: 8,
  },
});

export default AllEvent;

// import EVENT_DATA from "../data/EventData";
// import { Text, View, Button, Pressable } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { StyleSheet } from "react-native";
// import React, { useState } from "react";
// import { AntDesign } from "@expo/vector-icons";
// import { set } from "date-fns";
// import { FlatList } from "react-native";

// const AllEvent = ({ navigation, route }) => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [Startdate, setStartdate] = useState("0000-00-00");
//   const [Enddate, setEnddate] = useState("0000-00-00");
//   const [SorE, setSorE] = useState("");

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date) => {
//     const formattedDate = date.toISOString().slice(0, 10);
//     if (SorE == "e") {
//       console.warn("A Enddate picked: ", formattedDate);
//       setEnddate(formattedDate);
//     }
//     if (SorE == "s") {
//       console.warn("A Startdate picked: ", formattedDate);
//       setStartdate(formattedDate)
//     }
//     hideDatePicker();
//   };
//   //   const test = ()=>{
//   //     console.log(EVENT_DATA[0].event00);
//   //   }
// return (
//   <LinearGradient
//     colors={["#2FBCBC", "#D8FFF8"]}
//     start={{ x: 0, y: 0 }}
//     end={{ x: 1, y: 1 }}
//     style={styles.root}
//   >
//     <View>
//       <Pressable
//         onPress={() => {
//           showDatePicker();
//           setSorE("s");
//         }}
//       >
//         <AntDesign name="calendar" size={24} color="black" />
//       </Pressable>
//       <Pressable
//         onPress={() => {
//           showDatePicker();
//           setSorE("e");
//         }}
//       >
//         <AntDesign name="calendar" size={24} color="orange" />
//       </Pressable>
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//       <View>
//           <Text style={{color:'red'}}>{Startdate}</Text>
//           <Text style={{color:'blue'}}>{Enddate}</Text>
//       </View>
{
  /* <FlatList
                style={{ marginBottom: 130 }}
                data={EVENT_DATA}
            
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.title}</Text>
                  </View>
                  // <Item
                  //   backgroundColor={item.backgroundColor}
                  //   description={item.description}
                  //   Name={item.Name}
                  // />
                )}
                keyExtractor={(item) => item.id}
              /> */
}
{
  /* </View>
    </LinearGradient>
  );
};
export default AllEvent;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); */
}
