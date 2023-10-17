import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";

const Reset = (props) =>  {
    return (
        <LinearGradient
              colors={["#2FBCBC", "#D8FFF8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.container}
        >
          <View style={{ alignItems:'center', justifyContent:'center',width:'100%',marginTop:80}}>
            <View style ={{backgroundColor:'white',  width:350, height:380, borderBottomLeftRadius:10, borderBottomRightRadius:10,borderTopLeftRadius:10, borderTopRightRadius:10, alignItems:'center'}}>
                <Text style={{marginTop:20,marginLeft:15, fontWeight:'bold', fontSize:25, alignSelf:'left'}}>Reset Password</Text>
                <View style = {{width:300, height:300, marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>New Password</Text>
                    <TextInput style={{width:"100%", height:50, backgroundColor:'transparent', marginTop:15, borderWidth:3,opacity:0.4, borderColor:'grey', borderBottomLeftRadius:10, borderBottomRightRadius:10,borderTopLeftRadius:10, borderTopRightRadius:10}}
                               keyboardType='text'
                               placeholder='Enter new password'
                    />
                    <Text style={{fontWeight:'bold', fontSize:20, marginTop:45}}>Confirm Password</Text>
                    <TextInput style={{width:"100%", height:50, backgroundColor:'transparent', marginTop:15, borderWidth:3,opacity:0.4, borderColor:'grey',borderBottomLeftRadius:10, borderBottomRightRadius:10,borderTopLeftRadius:10, borderTopRightRadius:10, marginBottom:25}}
                               keyboardType='text'
                               placeholder='Enter new password'
                    />
                    <Button title='Confirm' color={'black'} />
                </View>
            </View>
          </View>
        </LinearGradient>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

export default Reset;