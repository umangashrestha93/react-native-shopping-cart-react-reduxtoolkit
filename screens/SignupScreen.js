import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BASE_URL } from '../components/Config'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setToken } from '../redux/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignupScreen = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const dispatch = useDispatch()

  const register = () =>{
    axios.post(`${BASE_URL}/ecommerce/users/register`,{
            name,
            email,
            password: pass
    })
    .then((res)=>{
        console.log(res.data)
        dispatch(setToken(res.data.accessToken))
        AsyncStorage.setItem("accessToken", data.accessToken)
        setName('')
        setEmail('')
        setPass('')
        navigation.navigate('Login')
    })
    .catch(error=>{
        console.log("register error", error)
    })
  }


  return (
    <View style={registerUI.registerContainer}>
        <View style={registerUI.registerImage}>
            <Image source = {require('../assets/images/RegisterLogo.png')}/>
        </View>
      <View style={registerUI.registerTextContainer}>
        <TextInput placeholder='Enter your name' value={name} onChangeText={(text)=>setName(text)}/>
      </View>
      <View style={registerUI.registerEmailContainer}>
        <TextInput placeholder='Enter your email' value={email} onChangeText={(text)=>setEmail(text)}/>
      </View>
      <View style={registerUI.registerPassContainer}>
        <TextInput placeholder='Enter your password' value={pass} onChangeText={(text)=>setPass(text)}/>
      </View>
      <TouchableOpacity style={registerUI.registerBtn} onPress={register}>
            <Text style={registerUI.registerTextBtn} >Register Now</Text>
      </TouchableOpacity>
      <View style={{marginTop: 55}}>
            <Text style={{color: 'white'}}>Already have an account?</Text>
            <TouchableOpacity style={{marginLeft: 170, top: -17}} onPress={()=>navigation.navigate('Login')}>
                <Text style={{color: '#64CCC5'}}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const registerUI =  StyleSheet.create({
    registerContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#001C30'
    },
    registerImage:{
        width: '100%',
        alignItems: 'center'
    },
    registerTextContainer:{
        backgroundColor: 'white',
        padding: 15,
        borderWidth: 0.2,
        borderColor: 'gray',
        width: 270,
        alignItems: 'center',
        position: 'absolute',
        top:380,
        borderRadius: 3
    },
    registerEmailContainer:{
        backgroundColor: 'white',
        padding: 15,
        borderWidth: 0.2,
        borderColor: 'gray',
        width: 270,
        alignItems: 'center',
        position: 'absolute',
        top:435,
        borderRadius: 3,

    },
    registerPassContainer:{
        backgroundColor: 'white',
        padding: 15,
        borderWidth: 0.2,
        borderColor: 'gray',
        width: 270,
        alignItems: 'center',
        position: 'absolute',
        top:490,
        borderRadius: 3,
    },
    registerBtn:{
        backgroundColor: '#64CCC5',
        width: 105,
        padding: 7,
        borderRadius: 4,
        shadowOpacity: 0.2,
        shadowColor: '#64CCC5',
        borderWidth: 1,
        borderColor: 'gray',
        top: 48

    }, 
    registerTextBtn:{
        color: 'white',
        textAlign: 'center'
    }
})

export default SignupScreen