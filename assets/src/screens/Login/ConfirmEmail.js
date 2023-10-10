import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import InputField from "../../components/InputField";
import ButtonComponent from "../../components/ButtonComponent";
import OTPTextInput from "react-native-otp-textinput"

const ConfirmEmail = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const { height } = useWindowDimensions();
  const signInPress = () => {
    console.warn("Sin in");
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
      <SafeAreaView>
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
                  style={{ fontSize: 23, fontWeight: "800", color: "#272835" }}
                >
                  Email Confirmation
                </Text>
              </View>
              <View style={{ paddingHorizontal: 30, marginTop: 50 }}>
                <Text style={{ color: "#7C7C7C", textAlign: "center" }}>
                  Enter your code
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: 30, alignItems: "center" }}>
                <View
                  style={{
                    position: "relative",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <OTPTextInput
                    tintColor={"#2FBCBC"}
                    inputCount={6}
                    textInputStyle={{
                      borderColor: "black",
                      borderWidth: 1,
                      borderRadius: 6,
                      borderBottomWidth: 1,
                    }}
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
                    onPress={signInPress}
                  />
                </View>
              </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  boxBackground: {
    backgroundColor: "#D8FFF8",
    width: "90%",
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

export default ConfirmEmail;
