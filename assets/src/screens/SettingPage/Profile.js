import { StyleSheet, Text, View, TouchableOpacity,Image, TextInput} from 'react-native';
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../../config/firebase";
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';


const Profile = (props) => {
  const { user } = useSelector(state=>state.user)
  const [image, setImage] = useState(null);
  const [email, onChangeEmail] = React.useState(user.email);
  console.log("USER_DATA: ", user)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

  };


    return(
        <LinearGradient
          colors={["#2FBCBC", "#D8FFF8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
    >
      <View style={{ alignItems:'center', justifyContent:'center',width:'100%',marginTop:80}}>
        <View style ={{backgroundColor:'white',  width:350, height:550, borderBottomLeftRadius:10, borderBottomRightRadius:10,borderTopLeftRadius:10, borderTopRightRadius:10, alignItems:'center'}}>
          <View style = {{width:150,height:150,marginTop:15}}>
            <Image
                source={image === null ? require('../../../image/settingImage/profile(MDP).png') : uri= image}
                style= {{flex:1 , width: undefined, height: undefined}}
            />
          </View>

          <TouchableOpacity style={{width:'100%', height:60, alignItems:'flex-end'}}
            onPress={pickImage}
          >
            <View style = {{width:60,height:'100%', backgroundColor:'#D9D9D9', marginRight:30, borderRadius:30}}>
              <Image
                  source={require('../../../image/settingImage/upload(MDP).png')}
                  style= {{flex:1 , width: undefined, height: undefined}}
              />
            </View>
          </TouchableOpacity>

          <View style={{width:300,height:200, marginTop:5}}>
            {/* <Text style ={{fontWeight:'bold', fontSize:30}}>Name:</Text>
            <TextInput style={{width:"100%", height:50, backgroundColor:'transparent', marginTop:15, borderWidth:3,opacity:0.4, borderColor:'grey', borderBottomLeftRadius:10, borderBottomRightRadius:10,borderTopLeftRadius:10, borderTopRightRadius:10}}
                               keyboardType='default'
                               placeholder='Enter new name'

                    /> */}

            <Text style ={{fontWeight:'bold', fontSize:30}}>Email:</Text>
            <TextInput style={{width:"100%", height:50, backgroundColor:'transparent', marginTop:15, borderWidth:3,opacity:0.4, borderColor:'grey', borderBottomLeftRadius:10, borderBottomRightRadius:10,borderTopLeftRadius:10, borderTopRightRadius:10}}
                               keyboardType='default'
                               placeholder='Enter new email'
                               onChangeText={onChangeEmail}
                               value = {email}
                    />

            <TouchableOpacity style={{alignSelf:'flex-end',width:150,height:60,backgroundColor:'red', marginTop:30,borderRadius:10, justifyContent:'center'}}
              onPress={ () => {

              }}
            >
              <Text style={{textAlign:'center',fontSize:20,color:'white',fontWeight:'bold'}}>Confirm</Text>
            </TouchableOpacity>
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

export default Profile;