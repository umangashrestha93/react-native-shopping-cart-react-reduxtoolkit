import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../components/Config'
import { showMessage } from "react-native-flash-message";
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [isloading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    const login = ()=>{
        setIsLoading(true)
        axios.post(`${BASE_URL}/ecommerce/users/login`,{
            email,
            password: password
        })
        .then(res=>{
            console.log(res.data.data)
            let userToken = res.data.data
            dispatch(setToken(userToken.accessToken))
            AsyncStorage.setItem("accessToken",userToken.accessToken)
            setIsLoading(false)
            setEmail('')
            setPassword('')
            navigation.replace('Tab')
            showMessage({
                message: "Login Successful",
                description: "welcome to shopping site",
                type: "success",
              });
        })
        .catch(error=>{
            console.log("login error", error)
            setIsLoading(false)
        })
    }

  return (
    <>
    <View style={LoginUI.loginContainer}>
        <View style={LoginUI.logoContainer}>
            <Image source={require('../assets/images/Logo2.png')}/>
        </View>
        <View style={LoginUI.loginEmail}>
            <TextInput placeholder='Enter your email' value={email} onChangeText={(text)=>setEmail(text)}/>
        </View>
        <View style={LoginUI.loginPassword}>
            <TextInput placeholder='Enter your password' value={password} onChangeText={(text)=>setPassword(text)}/>
        </View>
        <TouchableOpacity style={LoginUI.loginBtn} onPress={login}>
            {isloading?(<ActivityIndicator />): (
                <Text style={LoginUI.loginText}>Login</Text>
            )}
            
        </TouchableOpacity>
        <View style={{marginTop: 8}}>
            <Text style={{color: 'white'}}>Don't have an account?</Text>
            <TouchableOpacity style={{marginLeft: 155, top: -17}} onPress={()=>navigation.navigate('Register')}>
                <Text style={{color: '#64CCC5'}}>Register Now</Text>
            </TouchableOpacity>
        </View>
    </View>
    </>
  )
}

const LoginUI = StyleSheet.create({
    loginContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#001C30'

    },
    logoContainer:{
        width: '100%',
        alignItems: 'center',
    },
    loginEmail:{
        backgroundColor: 'white',
        padding: 15,
        borderWidth: 0.2,
        borderColor: 'gray',
        width: 270,
        alignItems: 'center',
        position: 'absolute',
        top:380,

    },
    loginPassword:{
        backgroundColor: 'white',
        padding: 15,
        borderWidth: 0.2,
        borderColor: 'gray',
        width: 270,
        alignItems: 'center',
        position: 'absolute',
        top:435,

    },
    loginBtn:{
        backgroundColor: '#64CCC5',
        width: 100,
        padding: 7,
        borderRadius: 4,
        shadowOpacity: 0.2,
        shadowColor: '#64CCC5',
        borderColor: 'gray',
        borderWidth: 1

    },
    loginText:{
        color: 'white',
        textAlign: 'center',
    }
})

export default LoginScreen