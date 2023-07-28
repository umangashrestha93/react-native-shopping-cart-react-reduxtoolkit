import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'
import store from './redux/store'
import Cart from './screens/Cart'

const App = () => {
  const Stack = createStackNavigator()
  // const navigation = useNavigation()

  const handleAddToCart = () => {
    console.log('button clicked')
    // navigation.navigate('Cart')
  }

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => (
            <TouchableOpacity onPress={handleAddToCart} style={{ marginRight: 15 }}>
              <Ionicons name="cart" size={30} color="black" />
              {/* <Text>items:{items.length} </Text> */}
            </TouchableOpacity>
          ),
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
