import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Provider, useSelector } from 'react-redux'
import store from './redux/store'
import Cart from './screens/Cart'

// Custom Cart Icon Component
const CartIcon = () => {
  const navigation = useNavigation()
  const items = useSelector(state => state.cart)

  const handleAddToCart = () => {
    navigation.navigate('Cart')
  }

  return (
    <TouchableOpacity onPress={handleAddToCart} style={{ marginRight: 15, backgroundColor: 'black', borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}>
      <Ionicons name="cart" size={30} color="white" />
      {items.length ? (
      <View style={{position: 'absolute', top: -10, left: 20, backgroundColor: 'black', width: 20, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
          <Text style={app.cartLength}>{items.length}</Text>
        </View>) : null}
      {/* <Text>items:{items.length} </Text> */}
    </TouchableOpacity>
  )
}

const App = () => {
  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerRight: () => <CartIcon />,
          }}
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
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
