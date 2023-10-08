import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { MultipleSelectList } from "react-native-dropdown-select-list";


const SearchDropDownList = ({info}) => {
    const [search, setSearch] = useState("");
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(info);
    const [selectedCountry, setSelectedCountry] = useState("");
    const searchRef = useRef();
    const onSearch = (search) => {
      if (search !== "") {
        let tempData = data.filter((item) => {
          return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setData(tempData);
      } else {
        setData(info);
      }
    };

    return (
      <View style={{ flex: 1 }}>
        <View>
          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              borderRadius: 10,
              borderWidth: 0.5,
              alignSelf: "center",
              marginTop: 100,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: 15,
              paddingRight: 15,
            }}
            onPress={() => {
              setClicked(!clicked);
            }}
          >
            <Text style={{ fontWeight: "600" }}>
              {selectedCountry == "" ? "Select Country" : selectedCountry}
            </Text>
            {clicked ? (
              <Image
                source={require("../../image/upload.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../image/dropdown.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </TouchableOpacity>
          {clicked ? (
            <View
              style={{
                elevation: 5,
                marginTop: 20,
                height: 300,
                alignSelf: "center",
                width: "90%",
                backgroundColor: "#fff",
                borderRadius: 10,
              }}
            >
              <TextInput
                placeholder="Search.."
                value={search}
                ref={searchRef}
                onChangeText={(txt) => {
                  onSearch(txt);
                  setSearch(txt);
                }}
                style={{
                  width: "90%",
                  height: 50,
                  alignSelf: "center",
                  borderWidth: 0.2,
                  borderColor: "#8e8e8e",
                  borderRadius: 7,
                  marginTop: 20,
                  paddingLeft: 20,
                }}
              />

              <FlatList
                data={data}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      style={{
                        width: "85%",
                        alignSelf: "center",
                        height: 50,
                        justifyContent: "center",
                        borderBottomWidth: 0.5,
                        borderColor: "#8e8e8e",
                      }}
                      onPress={() => {
                        setSelectedCountry(item.country);
                        setClicked(!clicked);
                        onSearch("");
                        setSearch("");
                      }}
                    >
                      <Text style={{ fontWeight: "600" }}>{item.country} Time:</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : null}
        </View>
      </View>
    );

}

export default SearchDropDownList;