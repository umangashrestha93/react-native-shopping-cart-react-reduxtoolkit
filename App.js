import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/store'
import Cart from './screens/Cart'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FlashMessage from "react-native-flash-message";
import Checkout from './screens/Checkout'
import Profile from './components/Profile'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { removeToken, setToken } from './redux/userSlice'
import { StatusBar } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createStackNavigator()


 function TabNavigator(){
  const Tab = createBottomTabNavigator()
  
  const items = useSelector(state => state.cart)
  console.log({items})
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{
        // headerShown: false,
        tabBarIcon: ()=>(
          <Ionicons name='home-outline' size={30}/>
        )
      }}/>
      <Tab.Screen name='Cart' component={Cart} options={{
        // headerShown: false,
        tabBarIcon: ()=>(
          <View>
            <Ionicons name='cart-outline' size={30}/>
            {items.length ? (<Text style={{position: 'absolute', marginLeft: 28}}>{items.length}</Text>): null}
          </View>
        )
      }}/>
      <Tab.Screen name='profile' component={Profile} options={{
        headerShown: false,
        tabBarIcon: ()=>(
          <View>
            <Ionicons size={30} name='person-outline' />
          </View>
        )
      }}/>


    </Tab.Navigator>
  )
 }
 function StackNavigator(){
  const navigation = useNavigation()
  const {token} = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  const loadInitials = async()=>{
    const accessToken = await AsyncStorage.getItem("accessToken")
    console.log("AsyncStorage accessToken", accessToken)
    if(accessToken){
      dispatch(setToken(accessToken))
    }
    setIsLoading(false)
  }

  useEffect(()=>{
      loadInitials()
  },[])



  return(
    <Stack.Navigator>
         {/* <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={SignupScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Tab' component={TabNavigator} options={{headerShown: false}}/>
          <Stack.Screen name='checkout' component={Checkout}/> */}
      {token ? (
        <>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={SignupScreen} options={{headerShown: false}}/>
        </>

      ): (
        <>
        <Stack.Screen name='Tab' component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name='checkout' component={Checkout}/>
          </>
      )}
          
    </Stack.Navigator>
  )
 }

//  function DrawerNavigator(){
//   const Drawer = createDrawerNavigator()
//   return(
//     <Drawer.Navigator>
//        <Drawer.Screen name='Tab' component={TabNavigator} />
//       <Drawer.Screen name='Cart' component={Cart} />
//     </Drawer.Navigator>
//   )
//  }

const App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          {/* <TabNavigator /> */}
          <View style={{flex: 1}}>
            <StackNavigator />
            {/* <DrawerNavigator /> */}
            <FlashMessage position="top" />
            </View>
          
          
      </NavigationContainer>
    </Provider>
  )
}

export default App
