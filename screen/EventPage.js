import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
// import RNCalendarEvents from "react-native-calendar-events";
const stack = createStackNavigator();
const drawer = createDrawerNavigator();
const bottom = createBottomTabNavigator();

// RNCalendarEvents.checkPermissions((readOnly = false));

export default function EventPage() {
    return (
        <LinearGradient
            colors={["#2FBCBC", "#D8FFF8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}>
            <View>
                <Text>555</Text>
            </View>
        </LinearGradient>
    )

};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      // alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: ['#ff6347', '#3498db'],
  
    },
  });