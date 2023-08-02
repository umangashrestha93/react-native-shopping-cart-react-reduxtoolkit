import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style= {{backgroundColor: 'black', width: 70, padding: 8, marginBottom: 10, borderRadius: 4}}>
            <TouchableOpacity>
            <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
            </TouchableOpacity>
            </View>
            <View style= {{backgroundColor: 'black', width: 70, padding: 8, marginBottom: 10, borderRadius: 4}}>
                <TouchableOpacity>
            <Text style={{color: 'white', textAlign: 'center'}}>Register</Text>
            </TouchableOpacity>
            </View>
        
    </View>
  )
}

export default Account