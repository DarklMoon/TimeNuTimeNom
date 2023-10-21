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
// RNCalendarEvents.checkPermissions((readOnly = false));

const Event = ({ navigation, route }) => {
  const Catagory = route.params.Catagory;
  // console.log(Catagory)

  const [Name, setName] = useState("");
  // const [Name, sestName] = useState("");
  const [description, setDescription] = useState("");

  //test search
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (text) => {
    setSearchTerm(text);
  };
  const handleSearch = () => {};

  //modal
  const [modalVisible, setModalVisible] = useState(false);

  //list of Catagory
  const [Event, setEvent] = useState([]);

  //addEvent
  const Eventhandler = () => {
    const detail = {
      Name: Name,
      description: description,
      Catagory: Catagory,
      backgroundColor: Catagory.backgroundColor,
    };
    setEvent([...Event, detail]);
    setModalVisible(!modalVisible);
    console.log(Event);
  };

  const removeFirstObject = (item,Index) => {
    console.log(Index)
    const newList = Event.splice(Index,1);
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
        backgroundColor: data.backgroundColor,
        padding: 22,
        margin: 5,
        borderRadius: 15,
        border: 0,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 18, marginRight: 10 }}>19.00</Text>
        <Text style={{ fontSize: 18 }}>19/9/65</Text>
      </View>
      <Text style={styles.title}>{data.Name}</Text>

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 30,
          right: 20,
        }}
      >
        <Feather name="edit" size={32} color="black" />
        <FontAwesome5
          name="trash"
          marginLeft={20}
          size={32}
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
                    backgroundColor={item.backgroundColor}
                    description={item.description}
                    Name={item.Name}
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
    padding: 10,
    marginLeft: 90,
    marginRight: 120,
    marginTop: 40,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  CategoryContainer: {
    flex: 1,
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 50,
    fontWeight: "700",
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
    width: 70,
    height: 70,
    elevation: 5,
    position: "absolute",
    right: 20,
    bottom: 20,
    zIndex: 9999,
    justifyContent: "center",
    backgroundColor: "#F194FF",
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

export default Event;
