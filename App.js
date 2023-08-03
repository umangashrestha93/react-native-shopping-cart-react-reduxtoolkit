import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Provider, useSelector } from 'react-redux'
import store from './redux/store'
import Cart from './screens/Cart'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from './screens/Account'

const Stack = createStackNavigator()
const CartIcon = () => {
  const navigation = useNavigation()
  const items = useSelector(state => state.cart)

  const handleAddToCart = () => {
    navigation.navigate('Cart')
  }

  return (
    <TouchableOpacity onPress={handleAddToCart} style={{ marginRight: 15, backgroundColor: 'black', borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
      {items.length ? (
      <View style={{position: 'absolute', top: -10, left: 20, backgroundColor: 'black', width: 20, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
          <Text style={app.cartLength}>{items.length}</Text>
        </View>) : null}
      {/* <Text>items:{items.length} </Text> */}
    </TouchableOpacity>
  )
}

 function TabNavigator(){
  const Tab = createBottomTabNavigator()
  const items = useSelector(state => state.cart)
  console.log({items})
  return(
    <Tab.Navigator >
      <Tab.Screen name='Products' component={Home} options={{
        // headerShown: false,
        tabBarIcon: ()=>(
          <Ionicons name='home-outline' size={30}/>
        )
      }}/>
      <Tab.Screen name='Cart' component={Cart} options={{
        tabBarIcon: ()=>(
          <View>
            <Ionicons name='cart-outline' size={30}/>
            {items.length ? (<Text style={{position: 'absolute', marginLeft: 28}}>{items.length}</Text>): null}
            
          </View>
        )
      }}/>
      <Tab.Screen name='Account' component={StackNavigator} options={{
        tabBarIcon: ()=>(
          <Ionicons name='person-outline' size={30}/>
        )
      }} />
    </Tab.Navigator>
  )
 }
 function StackNavigator(){
  
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name='Account' component={Account}/> */}
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name='Register' component={SignupScreen} />
          {/* <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Cart' component={Cart}/> */}
          {/* <Stack.Screen name='StackNavigator' component={TabNavigator}/> */}
          
    </Stack.Navigator>
  )
 }

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <TabNavigator />
          {/* <StackNavigator /> */}
          
      </NavigationContainer>
    </Provider>
  )
}

const app = StyleSheet.create({
  cartLength:{
      fontSize: 15,
      // backgroundColor: 'black',
      // width: 20,
      // height: 20,
      // borderRadius: 60,
      color: 'white',
      // padding: 2,
      // left: 5,

      



  }
})

export default App
