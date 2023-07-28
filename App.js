import { View, Text, TouchableOpacity } from 'react-native'
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
    <TouchableOpacity onPress={handleAddToCart} style={{ marginRight: 15 }}>
      {items.length ? (<Text>{items.length}</Text>) : (<Ionicons name="cart" size={30} color="black" />)}
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

export default App
