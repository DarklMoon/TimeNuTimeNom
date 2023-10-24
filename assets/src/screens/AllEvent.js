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
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
// RNCalendarEvents.checkPermissions((readOnly = false));

const AllEvent = ({ navigation, route }) => {
  // console.log(EVENT_DATA);
  const [Name, setName] = useState("");
  // const [Name, sestName] = useState("");
  const [description, setDescription] = useState("");
  //modal
  const [modalVisible, setModalVisible] = useState(false);
  //list of Catagory
  const [Event, setEvent] = useState(EVENT_DATA);
  console.log(Event);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (text) => {
    setSearchTerm(text);
  };
  const handleSearch = () => {};

  //addEvent
  // const Eventhandler = () => {
  //   const detail = {
  //     Name: Name,
  //     description: description,
  //     Catagory: Catagory,
  //     backgroundColor: Catagory.backgroundColor,
  //   };
  //   setEvent([...Event, detail]);
  //   setModalVisible(!modalVisible);
  //   console.log(Event);
  // };

  const removeFirstObject = (item, Index) => {
    console.log(Index);
    const newList = Event.splice(Index, 1);
    setEvent(newList);
  };
  //addEvent

  // const Eventfillter = Event.filter((item) => {
  //    Catagory.Catagory == item.Catagory;
  // });
  // console.log(Eventfillter);
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
              <View style={{ margin: 10, justifyContent: "center" }}>
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
                <View style={{ justifyContent: "flex-start" }}>
                  <Text style={{ margin: 15, fontSize: 25, marginBottom: -5 }}>
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
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          paddingLeft: 50,
                          paddingRight: 50,
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
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    width: 400,
    height: 400,
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
    fontSize: 25,
    borderBottomWidth: 2,
  },
  buttons: {
    padding: 10,
    borderRadius: 8,
  },
});

export default AllEvent;
// import EVENT_DATA from "../data/EventData";
// import { Text,View } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { StyleSheet } from "react-native";
// import { FlatList } from "react-native";
// const AllEvent = ({ navigation, route }) => {

//   const test = ()=>{
//     console.log(EVENT_DATA[0].event00);
//   }
//   return (
//     <LinearGradient
//       colors={["#2FBCBC", "#D8FFF8"]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.root}
//     >
//       <View >
//       <FlatList
//                 style={{ marginBottom: 130 }}
//                 data={EVENT_DATA}
//                 renderItem={({ item }) => (
//                   <View>
//                     <Text>{item.title}</Text>
//                   </View>
//                   // <Item
//                   //   backgroundColor={item.backgroundColor}
//                   //   description={item.description}
//                   //   Name={item.Name}
//                   // />
//                 )}
//                 keyExtractor={(item) => item.id}
//               />
//       </View>
//     </LinearGradient>
//   );
// };
// export default AllEvent;
// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     justifyContent:'center'
//   },
// });
