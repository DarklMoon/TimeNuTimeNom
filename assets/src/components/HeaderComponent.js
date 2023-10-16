import React, { useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons"; 

const HeaderComponent = ({navigation}) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ marginLeft: 10, marginTop: 5, flex: 1 }}>
            <Ionicons
              name="ios-menu"
              size={40}
              color="black"
              onPress={() => navigation.openDrawer()}
            />
          </View>
          <View style={{ flex: 2, justifyContent: "center", marginTop: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              TimeNuTimeNom
            </Text>
          </View>
          <View style={{ flex: 0.35, marginTop: 10 }}>
            <Ionicons
              name={isModalVisible ? "notifications" : "notifications-outline"}
              size={35}
              color={isModalVisible ? "#FD6B68" : "black"}
              onPress={toggleModal}
            />
          </View>
        </View>

        <Modal
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
          isVisible={isModalVisible}
          swipeDirection="down"
          onSwipeComplete={toggleModal}
          animationIn="bounceInUp"
          animationOut="bounceOutDown"
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          style={styles.modal}
        >
          <View style={styles.modalContent}>
            <View style={styles.center}>
              <View style={styles.barIcon} />
              <Text style={styles.text}>Welcome To My Bottom Sheet</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#161616",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 24,
    marginTop: 100,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
});


export default HeaderComponent;