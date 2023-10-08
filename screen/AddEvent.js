import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import RNCalendarEvents from "react-native-calendar-events";
import CalendarPage from "./CalendarPage";

RNCalendarEvents.checkPermissions((readOnly = false));
RNCalendarEvents.requestPermissions((readOnly = false));
const calendar = RNCalendarEvents.findCalendars();
RNCalendarEvents.saveCalendar(calendar);


export default function AddEvent() {
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
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});