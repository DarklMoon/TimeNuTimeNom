import React, { useState } from 'react';
import { StyleSheet , Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Calendar,Agenda } from 'react-native-calendars';
import { Provider } from "react-redux";
import { store } from "./assets/src/redux/store";

import Navigator from "./assets/src/navigation/Navigator";
import Dashboard from './assets/src/screens/Dashboard';
import Mynavigation from './screen/Mynavigation';

export default function App() {
  return (
    <Provider store={ store }>
      <Navigator/>
    </Provider>
    // <Dashboard/>
    // <Mynavigation></Mynavigation>
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


// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, StatusBar, FlatList } from 'react-native';
// import { Agenda } from 'react-native-calendars';
// import { Card, Paragraph, Title } from 'react-native-paper';

// const timeToString = (time) => {
//   const date = new Date(time);
//   return date.toISOString().split('T')[0];
// }

// const App = () => {
//   // const [items, setItems] = React.useState({});
//   // const items = 
  

//   // const loadItems = (day) => {

//   //   setTimeout(() => {
//   //     for (let i = -15; i < 85; i++) {
//   //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//   //       const strTime = timeToString(time);

//   //       if (!items[strTime]) {
//   //         items[strTime] = [];

//   //         const numItems = Math.floor(Math.random() * 3 + 1);
//   //         for (let j = 0; j < numItems; j++) {
//   //           items[strTime].push({
//   //             id: j * numItems,
//   //             name: 'Item for ' + strTime + ' #' + j,
//   //             height: Math.max(10, Math.floor(Math.random() * 150)),
//   //             day: strTime
//   //           });
//   //         }
//   //       }
//   //     }
//   //     const newItems = {};
//   //     Object.keys(items).forEach(key => {
//   //       newItems[key] = items[key];
//   //     });
//   //     setItems(newItems);
//   //   }, 1000);
//   // }
//   const items = [
//     { id: '1', name: 'Item 1', day: 'Description for Item 1' },
//     { id: '2', name: 'Item 2', day: 'Description for Item 2' },
//     // Add more data as needed
//   ];
//   console.log(items)
//   const renderItem = ({ item }) => (
//     <Card>
//       <Card.Content>
//         <Title>{item.name}</Title>
//         <Paragraph>{item.day}</Paragraph>
//       </Card.Content>
//     </Card>
//   )

//   return (
//     <View style={styles.container}>
//       {/* <Card style={{margin:20,}}>
//         <Card.Content style={{backgroundColor:'pink'}}>
//           <View>
//             <Text>555</Text>
//           </View>
//         </Card.Content>
//       </Card> */}
//       {/* <FlatList
//         // style={styles.container}
//         data={items}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => {
//           return ( */}
//       <View style={{ flex: 1 }}>
//         <FlatList
//           data={items}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//         />
//       </View>
//       {/* ); */}
//       {/* }} */}
//       {/* /> */}
//       {/* <Agenda
//         items={items}
//         loadItemsForMonth={loadItems}
//         selected={'2022-07-07'}
//         refreshControl={null}
//         showClosingKnob={true}
//         refreshing={false}
//         renderItem={renderItem}
//       /> */}
//       <StatusBar />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17
//   },
// });

// export default App;