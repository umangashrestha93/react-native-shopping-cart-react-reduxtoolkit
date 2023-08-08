import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
            <TouchableOpacity style={{backgroundColor: '#001C30', width: 80, padding: 10, borderRadius: 5}} onPress={()=>navigation.navigate('Login')}>
            <Text style={{color: 'white', textAlign: 'center'}}>Log out</Text>
            </TouchableOpacity>
            
        </View>
    
    </View>
  )
}

export default Profile