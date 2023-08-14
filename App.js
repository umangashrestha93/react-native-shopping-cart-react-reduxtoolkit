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
import { setToken } from './redux/userSlice'

const Stack = createStackNavigator()
// const CartIcon = () => {
//   const navigation = useNavigation()
//   const items = useSelector(state => state.cart)

//   const handleAddToCart = () => {
//     navigation.navigate('Cart')
//   }

//   return (
//     <TouchableOpacity onPress={handleAddToCart} style={{ marginRight: 15, backgroundColor: 'black', borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
//       {items.length ? (
//       <View style={{position: 'absolute', top: -10, left: 20, backgroundColor: 'black', width: 20, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
//           <Text style={app.cartLength}>{items.length}</Text>
//         </View>) : null}
//       {/* <Text>items:{items.length} </Text> */}
//     </TouchableOpacity>
//   )
// }



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
  const {token} = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

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
    <Stack.Navigator >
         <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={SignupScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Tab' component={TabNavigator} options={{headerShown: false}}/>
          <Stack.Screen name='checkout' component={Checkout}/>
      {/* {token ? (
        <>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={SignupScreen} options={{headerShown: false}}/>
        </>

      ): (
        <>
        <Stack.Screen name='Tab' component={TabNavigator} options={{headerShown: false}}/>
          <Stack.Screen name='checkout' component={Checkout}/>
          </>
      )}
           */}
    </Stack.Navigator>
  )
 }

const App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          {/* <TabNavigator /> */}
          <View style={{flex: 1}}>
            <StackNavigator />
            <FlashMessage position="top" />
            </View>
          
          
      </NavigationContainer>
    </Provider>
  )
}

const app = StyleSheet.create({
  cartLength:{
      fontSize: 15,
      color: 'white',
      



  }
})

export default App
