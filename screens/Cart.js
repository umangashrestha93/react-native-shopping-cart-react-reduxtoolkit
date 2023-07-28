import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const cardItem = useSelector((state)=> state.cart)
  return (
    <View style={style.cartContainer}>
        {
            cardItem.map((item)=>(
                <View style={style.itemContainer}>
                    <Image 
                        source={{uri: item.image}}
                        style={style.imageContainer}
                    />
                    <Text style={style.cartTitle}>{item.title}</Text>
                    <Text>{item.price}</Text>
                </View>
            ))
        }
    </View>
  )
}

const style = StyleSheet.create({
    cartContainer:{
        flex: 1,
        flexDirection: 'column',
        padding: 12
    },
    itemContainer:{
        marginBottom: 10
    },
    imageContainer:{
        width: 90,
        height: 150,

    },
    cartTitle:{
        fontSize: 15,
        padding: 20,
        marginLeft: 80,
        textAlign: 'center',
        





    }

})

export default Cart