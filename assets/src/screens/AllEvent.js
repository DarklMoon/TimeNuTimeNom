import EVENT_DATA from "../data/EventData";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
// import library ที่จำเป็น

import {
  Dimensions,
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
import { Entypo } from "@expo/vector-icons";
import {
  Firestore,
  addDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import initDB from "../config/firebase";
import { useSelector } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useEffect } from "react";
import firebase from "@react-native-firebase/firestore";
import { it } from "date-fns/locale";
import { Button } from "react-native-paper";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { TouchableOpacity } from "react-native-gesture-handler";
// import firebase from "../config/firebase";

const AllEvent = ({ navigation, route }) => {
  Geocoder.init("AIzaSyDhf8S__daUXzZmM7SbeiMXaU_XcfhIu4M");

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

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [Starttime, setStarttime] = useState("00.00");
  const [Endtime, setEndtime] = useState("00.00");
  const [checkTime, setcheckTime] = useState("");

  const [Event, setEvent] = useState([]);
  const [Allevent, setAllevent] = useState([]);

  const [State, setState] = useState(true);

  const [MapVisible, setMapVisible] = useState(false);
  const [longitude, setlongitude] = useState("");
  const [latitude, setlatitude] = useState("");
  const [location, setLocation] = useState("");
  const [prelocation, setpreLocation] = useState("");

  const { width, height } = Dimensions.get("window");
  const Aspect = width / height;
  const defalut_Position = {
    latitude: 13.74682616342151,
    longitude: 100.5744206160307,
    latitudeDelta: 0.5,
    longitudeDelta: Aspect * 0.5,
  };
  const setlocation = (item) => {
    setlatitude(item.latitude);
    setlongitude(item.longitude);
    console.log("Location Address:", prelocation);
  };

  Geocoder.from(latitude, longitude)
    .then((json) => {
      const address = json.results[0].formatted_address;
      setpreLocation(address);
    })
    .catch((error) => console.log(error));

  //firebase
  const fetchPattern = async () => {
    const q = query(eventRef, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setAllevent(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPattern();
    setState(false);
  }, [State]);

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

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const [markerPosition, setMarkerPosition] = useState(null);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setMarkerPosition(coordinate);
  };

  const handleTimeConfirm = (time) => {
    const date = new Date(time);
    const Time_formatted = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (checkTime == "E") {
      console.warn("A Enddtime picked: ", Time_formatted);
      setEndtime(Time_formatted);
    }
    if (checkTime == "S") {
      console.warn("A Starttime picked: ", Time_formatted);
      setStarttime(Time_formatted);
    }
    hideTimePicker();
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
        startDate: Event.startDate,
        endDate: Event.endDate,
        startTime: Event.StartTime,
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
      place: location,
      startDate: Startdate,
      endDate: Enddate,
      StartTime: Starttime,
      description: description,
      userId: user.uid,
    };
    console.log(Event);
    setEvent(dataEvent);
    setState(true);
    clearInput();
  };

  useEffect(() => {
    if (State == true) {
      handleCreateEvent();
    }
    setState(false);
  }, [State]);

  const clearInput = () => {
    setName("");
    setStartdate("0000-00-00");
    setEnddate("0000-00-00");
    setStarttime("00.00");
    setLocation("");
    setDescription("");
  };

  const removeFirstObject = async (item) => {};

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
          onPress={() => {
            removeFirstObject(data.datas);
          }}
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
              <View style={{ margin: 10, marginLeft: 15 }}>
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
                <View style={{ marginTop: 10 }}>
                  <Text
                    style={{ fontSize: 20, marginBottom: 10, marginLeft: 20 }}
                  >
                    Date & Time
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginBottom: 10,
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>Start</Text>
                    <Text style={{ fontSize: 16 }}>End</Text>
                  </View>
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

                  {/* Time */}
                  <View
                    style={{
                      marginTop: 30,
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Pressable
                      style={{ flexDirection: "row" }}
                      onPress={() => {
                        showTimePicker();
                        setcheckTime("S");
                      }}
                    >
                      <Text style={{ marginTop: 5 }}>{Starttime}</Text>
                      <AntDesign
                        style={{ marginLeft: 5 }}
                        name="clockcircle"
                        size={28}
                        color="black"
                      />
                    </Pressable>
                    <Pressable
                      style={{ flexDirection: "row", marginLeft: 5 }}
                      onPress={() => {
                        showTimePicker();
                        setcheckTime("E");
                      }}
                    >
                      <Text style={{ marginTop: 5 }}>{Endtime}</Text>
                      <AntDesign
                        style={{ marginLeft: 5 }}
                        name="clockcircle"
                        size={28}
                        color="orange"
                      />
                    </Pressable>
                    <DateTimePickerModal
                      isVisible={isTimePickerVisible}
                      mode="time"
                      onConfirm={handleTimeConfirm}
                      onCancel={hideTimePicker}
                    />
                  </View>
                </View>

                <View style={{ marginLeft: 20 }}>
                  <TouchableOpacity
                    style={{
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Map</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Entypo
                        style={{
                          borderWidth: 1,
                          shadowColor: "black",
                          padding: 4,
                          paddingLeft: 15,
                          paddingRight: 15,
                          borderRadius: 10,
                          marginRight: 10,
                        }}
                        name="map"
                        size={30}
                        color="black"
                        onPress={() => {
                          setMapVisible(!MapVisible);
                        }}
                      />
                      <View></View>
                      <Pressable
                        style={{
                          margin: 4,
                          borderWidth: 1,
                          borderColor: "#1EE85F",
                          borderRadius: 10,
                          padding: 4,
                          paddingLeft: 15,
                          paddingRight: 15,
                          backgroundColor: "#1EE85F",
                          shadowColor: "black",
                          shadowOffset: { width: 2, height: 2 },
                          shadowOpacity: 0.5,
                          shadowRadius: 5,
                          elevation: 5,
                        }}
                        onPress={() => {
                          setLocation("");
                        }}
                      >
                        <Text style={{ fontSize: 16 }}>reset</Text>
                      </Pressable>
                    </View>
                  </TouchableOpacity>
                  <Text style={{ marginRight: 10, fontSize: 16 }}>
                    {location}
                  </Text>
                </View>
                <TouchableOpacity>
                  <View style={{ justifyContent: "flex-start" }}>
                    <Text
                      style={{ margin: 15, fontSize: 22, marginBottom: -5 }}
                    >
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
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                    height: Aspect * 100,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
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
                            paddingRight: 20,
                            elevation: 5,
                          },
                        ]}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                          clearInput();
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
                          setModalVisible(!modalVisible);
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
          </View>
        </Modal>
        {/* modal */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={MapVisible}
          onRequestClose={() => {
            setModalVisible(!MapVisible);
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={defalut_Position}
                onPress={(e) => {
                  setlocation(e.nativeEvent.coordinate);
                  handleMapPress(e);
                }}
              >
                {markerPosition && (
                  <Marker
                    style={{}}
                    coordinate={markerPosition}
                    title={prelocation}
                  ></Marker>
                )}
              </MapView>
              <View
                style={{
                  margin: 10,
                  marginTop: 20,
                  justifyContent: "flex-start",
                  backgroundColor: "white",
                  borderRadius: 15,
                  shadowColor: "black",
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 18, margin: 5 }}>{prelocation}</Text>
              </View>
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: "20%",
                  }}
                >
                  <Pressable
                    style={{
                      backgroundColor: "red",
                      padding: 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                      borderRadius: 15,
                      shadowColor: "black",
                      shadowOffset: { width: 2, height: 2 },
                      shadowOpacity: 0.5,
                      shadowRadius: 5,
                      elevation: 5,
                    }}
                    onPress={() => {
                      setMapVisible(!MapVisible);
                      setLocation(prelocation);
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>Go Back</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>

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
                data={Allevent}
                renderItem={({ item }) => (
                  <Item
                    datas={item}
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
  root: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default AllEvent;
