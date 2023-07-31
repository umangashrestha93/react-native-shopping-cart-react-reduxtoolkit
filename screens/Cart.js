import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/cartSlice'

const Cart = () => {
    const cardItem = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

    const handleRemove = (id)=>{
        dispatch(remove(id))
    }
    const windowWidth = Dimensions.get('window').width;
    const imageWidth = windowWidth * 0.3;
    const imageHeight = imageWidth;

    return (
        <ScrollView>
            <View style={style.cartContainer}>
                <TouchableOpacity>
                <Text style={{flexDirection:'row', textAlign: 'right', marginBottom: 5, marginRight: 5, fontSize: 15, color: 'red'}}>Delete</Text>
                </TouchableOpacity>
                {
                    cardItem.map((item, i)=>(
                        <View style={style.itemContainer} key={`cardItem${i}`}>
                            <Image 
                                source={{uri: item.image}}
                                style={[style.imageContainer, { width: imageWidth, height: imageHeight }]}
                            />
                            <View style={style.cartDetailsContainer}>
                                <Text style={style.cartTitle}>{item.title}</Text>
                                <Text style={style.cartPrice}>{item.price}</Text>
                            </View>
                            {/* <TouchableOpacity style={style.cartRemoveBtn}>
                                <Text onPress={()=>handleRemove(item.id)}>Remove</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity style={style.minusBtn}>
                                <Text style={style.minusBtnText}>-</Text>
                            </TouchableOpacity>
                            <View>
                                <Text style={{marginRight: 7 }}>0</Text>
                            </View>
                            <TouchableOpacity style={style.plusBtn}>
                                <Text style={style.plusBtnText}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.addToCartBtn}>
                                <Text style={style.addToCartBtnText}>Add to cart</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    cartContainer: {
        flex: 1,
        padding: 12,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 0.2,
        borderColor: 'gray',
        borderRadius: 3,
        padding: 5,
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    imageContainer: {
        borderRadius: 3,
    },
    cartDetailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    cartTitle: {
        fontSize: 14,
        marginBottom: 5,
    },
    cartPrice: {
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartRemoveBtn: {
        backgroundColor: 'red',
        width: 60,
        height: 30, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        padding: 3,
    },
    minusBtn:{
        backgroundColor: 'green',
        width: 20,
        alignItems: 'center',
        borderRadius: 3,
        padding: 2,
        marginRight: 5

    },
    minusBtnText:{
        color: 'white',
    },
    plusBtn:{
        backgroundColor: 'green',
        width: 20,
        alignItems: 'center',
        borderRadius: 3,
        padding: 2,
        marginRight: 5
    },
    plusBtnText:{
        color: 'white',
    },
    addToCartBtn:{
        position: 'absolute',
        top: 95,
        width: 90,
        marginLeft: 190,
        backgroundColor: 'black',
        borderRadius: 3,
        padding: 5,

    },
    addToCartBtnText:{
        color: 'white',
        textAlign: 'center',
    }

})

export default Cart;
