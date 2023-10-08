import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TimeDatePicker, Modes } from "react-native-time-date-picker";


import React, { useState } from 'react';
import { Calendar,Agenda } from 'react-native-calendars';
import { LinearGradient } from 'expo-linear-gradient';
import EventPage from './EventPage';



const CalendarPage = () => {


    const [selected, setSelected] = useState('');
    const [selectedDate, setSelectedDate] = useState(['']);
    
    console.log(selected);

    return (
        <LinearGradient
            colors={["#2FBCBC", "#D8FFF8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}>
            <View style={styles.container}>
                <View style={{ flex: 2, justifyContent: 'center', }}>
                    <Calendar style={styles.carlender}
                        theme={{
                            'stylesheet.calendar.header': {
                                dayTextAtIndex0: {
                                    color: 'red'
                                },
                            },
                            textDayFontSize: 20,
                            textMonthFontSize: 25,
                            textDayHeaderFontSize: 16,
                            // calendarBackground: 0,
                            todayTextColor: "blue",
                            selectedDayTextColor: "white",
                            textSectionTitleColor: "gray",
                            todayButtonFontSize: 50,
                            headerstyle:{
                                gap:200
                            }
                            

                        }}

                        dayHeaderStyle={{ color: 'red', fontWeight: 'bold' }}
                        current={Date()}
                        minDate={'2000-01-01'}
                        maxDate={'2100-12-31'}
                        monthFormat={'MMMM yyyy'}
                        hideExtraDays={false}
                        firstDay={0}
                        // Hide day names. Default = false
                        hideDayNames={false}
                        // Show week numbers to the left. Default = false
                        showWeekNumbers={false}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                        onPressArrowLeft={(subtractMonth) => subtractMonth()}
                        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                        onPressArrowRight={(addMonth) => addMonth()}
                        enableSwipeMonths={true}
                        // onMonthChange={}
                        onDayPress={day => {
                            setSelected(day.dateString);



                        }}
                        markingType="multi-period"
                        markedDates={{
                            '2023-09-14': {
                                periods: [
                                    { startingDay: false, endingDay: true, color: '#5f9ea0' },
                                    { startingDay: false, endingDay: true, color: '#ffa500' },
                                    { startingDay: true, endingDay: false, color: '#f0e68c' }
                                ]
                            },
                            '2023-09-15': {
                                periods: [
                                    { startingDay: true, endingDay: false, color: '#ffa500' },
                                    { color: 'transparent' },
                                    { startingDay: false, endingDay: false, color: '#f0e68c' }
                                ]
                            },
                            [selected]:{selected:true, selectedColor:'orange'}
                        }}
                    />
                </View>
                <View style={{ flex: 0, marginTop: 30, marginRight: 75, marginLeft: 75, }}>
                    <Button title='Add Activity' onPress={Date()}></Button>
                </View>

            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        backgroundColor: ['#ff6347', '#3498db'],

    },
    carlender: {
        borderRadius: 10,
        margin: 5,
        padding: 50,
        borderWidth: 1,
        borderColor: '#D8FFF8',
        maxHeight: 1000,

    },
});


export default CalendarPage;
