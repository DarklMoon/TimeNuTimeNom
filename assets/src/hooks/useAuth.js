import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/user';

export default function useAuth() {
    const [user, setUsers] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user =>{
            console.log('got user: ', user.uid)
            if(user){
                setUsers(user);
                dispatch(setUser(user))
            }else{
                setUser(null)
            }
        })
        return unsub;
    },[])

    

  return { user }
}