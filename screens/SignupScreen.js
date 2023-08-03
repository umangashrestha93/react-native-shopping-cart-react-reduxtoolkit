import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SignupScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={registerUI.registerContainer}>
        <View style={registerUI.registerImage}>
            <Image source = {require('../assets/images/RegisterLogo.png')}/>
        </View>
      <View style={registerUI.registerTextContainer}>
        <TextInput placeholder='Enter your name'/>
      </View>
      <View style={registerUI.registerEmailContainer}>
        <TextInput placeholder='Enter your email'/>
      </View>
      <View style={registerUI.registerPassContainer}>
        <TextInput placeholder='Enter your password'/>
      </View>
      <TouchableOpacity style={registerUI.registerBtn} onPress={() => navigation.replace('Home')}>
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