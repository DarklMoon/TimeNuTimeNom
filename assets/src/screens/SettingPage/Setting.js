import React from "react";
// import library ที่จำเป็น
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, StatusBar} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeaderComponent from "../../components/HeaderComponent";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";


const Item = ({ item, onPress, backgroundColor, textColor, days }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      {days.map((str, index) => (
        <Text key={index} style={[styles.days, { color: textColor }]}>
          {index === days.length - 1 ? str + ". " : str + ". "}
        </Text>
      ))}
    </View>
  </TouchableOpacity>
);

const handleLogout = async ()=>{
  await signOut(auth);
}

const Setting = ({navigation}) => {
  return (
    <LinearGradient
      colors={["#2FBCBC", "#D8FFF8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar hidden={true} />
      {/* <View> */}
        <HeaderComponent />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* หัวข้อ */}
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
              marginHorizontal: 40,
              marginTop: 50,
            }}
          >
            Settings
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              marginHorizontal: 40,
              marginTop: 5,
              opacity: 0.5,
            }}
          >
            Account Information
          </Text>

          {/* กล่องของ settings ฟังชันก์ต่าง ๆ */}

          <View style={{ alignItems: "center", marginTop: 15 }}>
            <View
              style={{
                backgroundColor: "white",
                width: 350,
                height: 360,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  opacity: 0.3,
                  alignSelf: "left",
                  marginLeft: 15,
                  marginTop: 20,
                }}
              >
                Login and Security
              </Text>

              {/*function ต่าง ๆ*/}
              <View style={{ alignItems: "center" }}>
                <View style={{ width: 300, height: 240, marginTop: 20 }}>
                  {/*เเต่ละfunction*/}
                  <TouchableOpacity
                    style={{ width: "100%", height: 60, flexDirection: "row" }}
                    onPress={() => {navigation.navigate("Profile")}}
                  >
                    {/*รูป*/}
                    <View style={{ width: 60, height: "100%" }}>
                      <Image
                        source={require("../../../image/settingImage/profile(MDP).png")}
                        style={{ flex: 1, width: undefined, height: undefined }}
                      />
                    </View>
                    {/*function name*/}
                    <View
                      style={{
                        height: "100%",
                        width: 210,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 15,
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Profile
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 30,
                        height: "100%",
                        justifyContent: "right",
                      }}
                    >
                      <Image
                        source={require("../../../image/settingImage/next(MDP).png")}
                        style={{
                          flex: 1,
                          width: undefined,
                          height: undefined,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 60,
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                    onPress={() => {navigation.navigate("Reset")}}
                  >
                    {/*รูป*/}
                    <View style={{ width: 60, height: "100%" }}>
                      <Image
                        source={require("../../../image/settingImage/Lock(MDP).png")}
                        style={{ flex: 1, width: undefined, height: undefined }}
                      />
                    </View>
                    {/*function name*/}
                    <View
                      style={{
                        height: "100%",
                        width: 210,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 15,
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Reset Password
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 30,
                        height: "100%",
                        justifyContent: "right",
                      }}
                    >
                      <Image
                        source={require("../../../image/settingImage/next(MDP).png")}
                        style={{
                          flex: 1,
                          width: undefined,
                          height: undefined,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 60,
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    {/*รูป*/}
                    <View style={{ width: 60, height: "100%" }}>
                      <Image
                        source={require("../../../image/settingImage/helps(MDP).png")}
                        style={{ flex: 1, width: undefined, height: undefined }}
                      />
                    </View>
                    {/*function name*/}
                    <View
                      style={{
                        height: "100%",
                        width: 210,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 15,
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Helps
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 30,
                        height: "100%",
                        justifyContent: "right",
                      }}
                    >
                      <Image
                        source={require("../../../image/settingImage/next(MDP).png")}
                        style={{
                          flex: 1,
                          width: undefined,
                          height: undefined,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 60,
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                    onPress={handleLogout}
                  >
                    {/*รูป*/}
                    <View style={{ width: 60, height: "100%" }}>
                      <Image
                        source={require("../../../image/settingImage/logout(MDP).png")}
                        style={{ flex: 1, width: undefined, height: undefined }}
                      />
                    </View>
                    {/*function name*/}
                    <View
                      style={{
                        height: "100%",
                        width: 210,
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: 15,
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        Log Out
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 30,
                        height: "100%",
                        justifyContent: "right",
                      }}
                    >
                      <Image
                        source={require("../../../image/settingImage/next(MDP).png")}
                        style={{
                          flex: 1,
                          width: undefined,
                          height: undefined,
                          resizeMode: "contain",
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      {/* </View> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    backgroundColor: ["#ff6347", "#3498db"],
  },
});

export default Setting;
