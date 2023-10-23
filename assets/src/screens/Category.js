import { it } from "date-fns/locale";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
// import library ที่จำเป็น
import {
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from "reanimated-color-picker";

const Category = ({ navigation }) => {
  //Input
  const [CatagoryName, setCatagoryName] = useState("");
  const [ColorName, setColorName] = useState("red");

  //test search
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (text) => {
    setSearchTerm(text);
  };
  const handleSearch = () => {};

  //colorpicker
  const [color, setColor] = useState([
    "#FF3030",
    "#ffa733",
    "#fffa69",
    "#9aff52",
    "#57ffb6",
    "#66f7ff",
    "#5274ff",
    "#b152ff",
  ]);

  const onSelectColor = ({ hex }) => {
    // do something with the selected color.
    setColorName(hex);

    console.log(ColorName);
  };

  //modal
  const [modalVisible, setModalVisible] = useState(false);

  //list of Catagory
  const [data, setData] = useState([]);

  const addCatagory = () => {
    let checkTitle = true;
    let checkColor = true;
    const newCatagory = {
      title: CatagoryName,
      backgroundColor: ColorName,
    };
    // console.log(newCatagory.backgroundColor)
    if (newCatagory.title != "") {
      const fillterCatagory = data.filter((item) => {
        // console.log(item.title == newCatagory.title);
        if (item.title == newCatagory.title) {
          checkTitle = false;
          return false;
        } else {
          return true;
        }
      });
      const fillterColor = data.filter((item) => {
        if (item.backgroundColor == newCatagory.backgroundColor) {
          checkColor = false;
          return false;
        } else {
          return true;
        }
      });

      if ((checkTitle = !checkTitle)) {
        alert("This name is already used");
      } else if ((checkColor = !checkColor)) {
        alert("This color is already used");
      } else {
        console.log("added");
        setData([...data, newCatagory]);
        checkTitle = !checkTitle;
        checkColor = !checkColor;

        setModalVisible(!modalVisible);
      }
    } else {
      alert("Please Fill Catagory Name");
    }
  };

  const Item = (data) => (
    <TouchableOpacity
      onPress={() => {
        data.onSelect();
      }}
    >
      <View
        style={{
          backgroundColor: data.backgroundColor,
          padding: 22,
          margin: 5,
          borderRadius: 15,
          border: 0,
        }}
      >
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </TouchableOpacity>
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
          <View
            style={styles.centeredView}
            // onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.modalView}>
              <TextInput
                style={{
                  borderWidth: 0.5,
                  marginBottom: 15,
                  padding: 10,
                  borderRadius: 5,
                  fontWeight: "500",
                }}
                placeholder="Catagory's Title"
                value={CatagoryName}
                onChangeText={(input) => {
                  setCatagoryName(input);
                }}
              ></TextInput>
              <ColorPicker style={{}} value="red" onComplete={onSelectColor}>
                <Preview hideInitialColor={true} />
                <Panel1 style={{ margin: 5 }} />
                <HueSlider style={{ margin: 5 }} />
                <OpacitySlider style={{ margin: 5 }} />
                <Swatches
                  colors={color}
                  style={{ maxHeight: 40, overflow: "hidden" }}
                />
              </ColorPicker>
              <View style={{ width: 200, flexDirection: "row" }}>
                <Pressable
                  style={[styles.buttonClose, { marginRight: 10 }]}
                  onPress={() => addCatagory()}
                >
                  <Text style={styles.textStyle}>Add Categories</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.buttonClose,
                    { marginLeft: 10, backgroundColor: "#a8a8a8" },
                  ]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Canceled</Text>
                </Pressable>
              </View>
              <Text style={{ marginTop: 10, color: "red", fontSize: 20 }}>
                !!Be careful about choosing shades.!!
              </Text>
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
                <Text style={styles.header}>Category</Text>
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
                data={data}
                renderItem={({ item }) => (
                  <Item
                    onSelect={()=>{
                      navigation.navigate("Event",{title:item.title,background:item.backgroundColor,Catagory:item})
                    }}
                    backgroundColor={item.backgroundColor}
                    title={item.title}
                  />
                )}
                // keyExtractor={(item) => item.id}
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
    fontSize: 30,
    fontWeight: "500",
  },
  //modalstyle
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    width: 400,
    height: 550,
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
});

export default Category;
