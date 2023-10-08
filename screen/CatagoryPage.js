import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";


export default function CatagoryPage() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { id: 1, label: 'Apple', value: 'apple' },
        { id: 2, label: 'Banana', value: 'banana' }
    ]);

    return (
        <LinearGradient
            colors={["#2FBCBC", "#D8FFF8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}>
            <View style={{ margin: 30, alignItems: 'center' }}>
                {/* <FlatList
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={() => {
                        return ( */}
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        {/* ) */}
                    {/* }} */}

                {/* /> */}

            </View>
        </LinearGradient>
    )

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});