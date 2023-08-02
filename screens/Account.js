import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 1, justifyContent: 'center',backgroundColor: 'white', width: '100%', height: '8%', position: 'absolute', top: 35}}>
                  <Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 17, fontWeight: '500'}}>My Account</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'black', width: '99%', height: '25%', borderRadius: 10, position: 'absolute', top: 99 }}>
            <View style= {{backgroundColor: 'white', width: 70, padding: 8, marginBottom: 10, borderRadius: 4,}}>
            <TouchableOpacity>
            <Text style={{color: 'black', textAlign: 'center'}}>Login</Text>
            </TouchableOpacity>
            </View>
            <View style= {{backgroundColor: 'white', width: 70, padding: 8, marginBottom: 10, borderRadius: 4}}>
                <TouchableOpacity>
            <Text style={{color: 'black', textAlign: 'center'}}>Register</Text>
            </TouchableOpacity>
            </View>
            </View>
        
    </View>
  )
}

export default Account