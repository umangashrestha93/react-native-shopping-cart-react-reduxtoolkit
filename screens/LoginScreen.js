import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={LoginUI.loginContainer}>
        <View style={LoginUI.logoContainer}>
            <Image source={require('../assets/images/Logo2.png')}/>
        </View>
        <View style={LoginUI.loginEmail}>
            <TextInput placeholder='Enter your email'/>
        </View>
        <View style={LoginUI.loginPassword}>
            <TextInput placeholder='Enter your password'/>
        </View>
        <TouchableOpacity style={LoginUI.loginBtn}>
            <Text style={LoginUI.loginText}>Login</Text>
        </TouchableOpacity>
        <View style={{marginTop: 8}}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity style={{marginLeft: 155, top: -17}} onPress={()=>navigation.navigate('Register')}>
                <Text style={{color: 'red'}}>Register Now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const LoginUI = StyleSheet.create({
    loginContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#9BABB8'
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
        backgroundColor: 'black',
        width: 100,
        padding: 7,
        borderRadius: 4,
        shadowOpacity: 1,
        shadowColor: 'white'

    },
    loginText:{
        color: 'white',
        textAlign: 'center',
    }
})

export default LoginScreen