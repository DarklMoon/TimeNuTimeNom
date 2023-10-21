
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import CatagoryPage from "./CatagoryPage";
import CalendarPage from "./CalendarPage";
import AddEvent from "../assets/src/screens/AddEvent";
import EventPage from "./EventPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";

const stack = createStackNavigator();
const drawer = createDrawerNavigator();
const bottom = createBottomTabNavigator();

function Calendar() {
    return (
        <stack.Navigator>
            <stack.Screen name="CatagoryPage" component={CalendarPage} options={{
                title: "Calendar", headerShown: true,
                headerStyle: {
                    height: 0
                }
            }} />
            <stack.Screen name="EventPage" component={AddEvent} />
        </stack.Navigator>
    );
}


function MainNavigator() {
    return (
        <drawer.Navigator initialRouteName="Calendar" screenOptions={{
            drawerStyle: {
                backgroundColor: '#5BC8B2',
                width: 240,

            }, drawerActiveBackgroundColor: "#A2E8DC",
            drawerInactiveTintColor: "white",
            drawerLabelStyle: { fontSize: 18 },


        }} >
            <drawer.Screen name="Calendar" component={Calendar} options={{
                title: "Calendar", headerShown: true,
                headerStyle: {
                    height: 0,
                },
            }} />
            <drawer.Screen name="Catagory" component={CatagoryPage} options={{
                headerShown: true,
                headerStyle: {
                    height: 0
                },

            }} />
        </drawer.Navigator>
    )

}

export default function MyNavigator() {
    return (
        <NavigationContainer>
            <MainNavigator>
            </MainNavigator>
        </NavigationContainer>

    );
}