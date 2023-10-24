import React, { useRef, useState, useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import InputField from "../../components/InputField";
import ButtonComponent from "../../components/ButtonComponent";

const ResetPw = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const { height } = useWindowDimensions();

  const signInPress = () => {
    console.log("SEE")
    alert('HelloWolrd')
    // Alert.alert('Alert Title', 'My Alert Msg', [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ])
  };

  const loginNavigator = () => {
    navigation.navigate("Login");
  };


  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ height: "100%" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.boxBackground, { marginTop: height * 0.2 }]}>
            <View style={styles.img}>
              <Image
                style={{ width: 80, height: 80, resizeMode: "contain" }}
                source={require("../../../image/calendar-icon.png")}
              />
            </View>
            <View style={styles.header}>
              <Text
                style={{ fontSize: 25, fontWeight: "800", color: "#272835" }}
              >
                Forgot Password
              </Text>
            </View>
            <View style={{ paddingHorizontal: 30, marginTop: 30 }}>
              <Text style={{ color: "#7C7C7C", textAlign: "center" }}>
                Please enter your registered email address to retrieve your
                account information.
              </Text>
            </View>
            <View style={{ flex: 1, marginTop: 60, alignItems: "center" }}>
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
                    top: -13,
                    left: 35,
                    fontSize: 12,
                    fontWeight: "700",
                  }}
                >
                  Email Address
                </Text>
                <InputField
                  placeholder={"Email Address"}
                  value={email}
                  setValue={setEmail}
                />
              </View>

              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 50,
                }}
              >
                <ButtonComponent
                  text={"Cancel"}
                  width={"30%"}
                  type={"Cancel"}
                  onPress={loginNavigator}
                />
                <ButtonComponent
                  text={"Send"}
                  width={"30%"}
                  onPress={() => {alert("hello")}}

                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxBackground: {
    backgroundColor: "#D8FFF8",
    width: "80%",
    height: 400,
    borderRadius: 10,
  },
  header: {
    marginLeft: 15,
    marginTop: 30,
  },
  img: {
    position: "absolute",
    right: 15,
    opacity: 0.9,
  },
});

export default ResetPw;
