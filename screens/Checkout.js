import { View, Text, Image, Dimensions, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const checkOutItems = useSelector((state)=> state.cart)

    const windowWidth = Dimensions.get("window").width;
    const imageWidth = windowWidth * 0.3;
    const imageHeight = imageWidth;

    const getTotalAmount = ()=>{
        let totalAmount = 0;
        checkOutItems.map((item)=>{
            totalAmount = totalAmount + item.price * item.quantity
        });
        return totalAmount.toFixed(0)
    }
  return (
    <View style={checkOut.mainContainer}>
            {checkOutItems.map((items, index)=>(
                <View style={checkOut.checkoutItems} key={`checkOutItems${index}`}>
                    <Image source={{uri: items.image}} style={{width: imageWidth, height: imageHeight, borderRadius: 3}}/>
                    <View style={checkOut.tiltleAndPrice}>
                      <Text style={checkOut.checkTitle}>{items.title}</Text>
                      <Text style={checkOut.checkPrice}>${items.price}</Text>
                      </View>
                </View>
              
              
            ))}
            <View style={checkOut.totalContainer}>
                <Text style={checkOut.totalText}>Total: ${getTotalAmount()}</Text>
                <TouchableOpacity style={checkOut.placeAnOrder}>
                    <Text style={checkOut.textColor}>Place Order</Text>
                </TouchableOpacity>
            </View>
            
    </View>
  )
}

const checkOut = StyleSheet.create({
    mainContainer:{
            flex: 1,
            padding: 5,
            // justifyContent: 'flex-start',
            alignItems: 'center',
            top: 5
    },
    checkoutItems:{
        padding: 6,
        // alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 5,
        borderWidth: 0.3,
        borderRadius: 3,
    },
    tiltleAndPrice:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 5,
        marginLeft: 10,
        padding: 10,
    },
    checkTitle:{
        fontSize: 15,
        marginBottom: 5,

    },
    checkPrice:{
        fontSize: 15,
        color: '#176B87',
        fontWeight: '500'
    },
    totalContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: "gray"  
    },
    totalText:{
        fontSize: 15,
        fontWeight: '500'
    },
    placeAnOrder:{
        backgroundColor: '#176B87',
        padding: 6,
        borderRadius: 3,
        margin: 10
    },
    textColor:{
        color: 'white',
    }
})
export default Checkout