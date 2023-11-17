import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderComponent from "../../components/HeaderComponent";

const Helps = () => {
  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <HeaderComponent navigation={navigation} />
      <SafeAreaView
        style={{
          width: 320,
          backgroundColor: "white",
          height: 550,
          borderRadius: 10,
        }}
      >
        <ScrollView>
          <Text
            style={{
              marginTop: 40,
              marginLeft: 20,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            1. Dashboard
          </Text>

          <Text
            style={{
              marginTop: 20,
              marginLeft: 45,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            -
            หากผู้ใช้ต้องการที่จะสิ่งที่ต้องทําในเเต่ละวันผู้ใช้สามารถกดเลือกวันที่ต้องการดูได้ในปฏิทิน{" "}
          </Text>
          <View
            style={{
              width: "100%",
              height: 250,
              marginTop: 50,
              flexDirection: "row",
            }}
          >
            <View style={{ height: "100%", width: 140 }}>
              <Image
                source={require("../../../image/Helps/Dashboard.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
            <View style={{ height: "100%", width: 140, marginLeft: 40 }}>
              <Image
                source={require("../../../image/Helps/Calendarpage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
          </View>

          <Text
            style={{
              marginTop: 20,
              marginLeft: 45,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            - เมื่อผู้ใช้ต้องการที่จะดูรายละเอียดสิ่งที่ต้องทํา
            ผู้ใช้สามารถกดดูได้ โดยจะมีรายละเอียดซึ่งได้เเก่ สถานที่ เวลาเริ่ม
            เวลาจบ คําบรรยาย เเละ รูปประกอบ{" "}
          </Text>
          <View
            style={{
              width: "100%",
              height: 250,
              marginTop: 50,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View style={{ height: "100%", width: 140 }}>
              <Image
                source={require("../../../image/Helps/EventDetailpage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
          </View>

          <Text
            style={{
              marginTop: 40,
              marginLeft: 20,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            2. Categories
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 45,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            - หากผู้ใช้ต้องการที่จะเพิ่มหมวดหมู่สามารถกดที่ไอคอนมุมขวาล่าง เเละ
            ใส่หมวดหมู่กับสีที่ต้องการ{" "}
          </Text>
          <View
            style={{
              width: "100%",
              height: 250,
              marginTop: 50,
              flexDirection: "row",
            }}
          >
            <View style={{ height: "100%", width: 140 }}>
              <Image
                source={require("../../../image/Helps/Catagorypage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
            <View style={{ height: "100%", width: 140, marginLeft: 40 }}>
              <Image
                source={require("../../../image/Helps/Addcatagorypage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
          </View>

          <Text
            style={{
              marginTop: 20,
              marginLeft: 45,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            - หากผู้ใช้ต้องการเพิ่ม หรือ เเก้ไข Events ในหมวดหมู่
            สามารถเเก้ไขได้โดยกดไอคอนดินสอ เเละ ทําเเก้ไขข้อมูลที่ต้องการ เเละ
            ลบได้โดยกดไอคอนถังขยะ
          </Text>
          <View
            style={{
              width: "100%",
              height: 250,
              marginTop: 50,
              flexDirection: "row",
            }}
          >
            <View style={{ height: "100%", width: 140 }}>
              <Image
                source={require("../../../image/Helps/Catagorypage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
            <View style={{ height: "100%", width: 140, marginLeft: 40 }}>
              <Image
                source={require("../../../image/Helps/Addcatagorypage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
          </View>

          <Text
            style={{
              marginTop: 40,
              marginLeft: 20,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            3. Events
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 45,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            - หากผู้ใช้ต้องการที่จะเพิ่มEventsสามารถกดที่ไอคอนมุมขวาล่าง
            เเละใส่ข้อมูลตามที่กําหนด
          </Text>
          <View
            style={{
              width: "100%",
              height: 250,
              marginTop: 50,
              flexDirection: "row",
            }}
          >
            <View style={{ height: "100%", width: 140 }}>
              <Image
                source={require("../../../image/Helps/EventPage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
            <View style={{ height: "100%", width: 140, marginLeft: 40 }}>
              <Image
                source={require("../../../image/Helps/AddandEditEventpage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
          </View>

          <Text
            style={{
              marginTop: 20,
              marginLeft: 45,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            - หากผู้ใช้ต้องการเเก้ไข หรือ ลบ Events
            สามารถเเก้ไขได้โดยกดไอคอนดินสอ เเละ ทําเเก้ไขข้อมูลที่ต้องการ เเละ
            ลบได้โดยกดไอคอนถังขยะ
          </Text>

          <Text
            style={{
              marginTop: 40,
              marginLeft: 20,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            4. Pattern
          </Text>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 45,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            - หากผู้ใช้ต้องการที่จะเพิ่มPatternสามารถกดที่ไอคอนมุมขวาล่าง
            เเละใส่ข้อมูลตามที่กําหนด เเละกด "Add Pattern"
          </Text>
          <View
            style={{
              width: "100%",
              height: 250,
              marginTop: 50,
              flexDirection: "row",
            }}
          >
            <View style={{ height: "100%", width: 140 }}>
              <Image
                source={require("../../../image/Helps/Patternpage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
            <View style={{ height: "100%", width: 140, marginLeft: 40 }}>
              <Image
                source={require("../../../image/Helps/AddPatternpage.png")}
                style={{ flex: 1, width: undefined, height: undefined }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Helps;
