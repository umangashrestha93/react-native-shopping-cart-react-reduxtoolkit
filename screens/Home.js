import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/cartSlice'

const Home = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const getProduct = async () => {
        try{
        const url = "https://fakestoreapi.com/products"
        const result = await fetch(url)
        // console.log(result)
        const data = await result.json()
        // console.log(data)
        setProducts(data)
        } catch(error){
            console.log("Got this error.");
            console.log(error)
        }

    }

    useEffect(() => {
        getProduct()
    }, [])
    
    const handleAdd = (product)=>{
        dispatch(add(product))
    }

    return (
        <ScrollView>
        <View style={styles.homeContainer}>
            {
                products.map((product) => (
                    <View style={styles.productContainer}key={product.id}>
                        <Image
                            source={{ uri: product.image }} 
                            style={styles.productImage} 
                        />
                        <Text styles={styles.productTitle}>{product.title}</Text>
                        <Text styles={styles.productPrice}>{product.price}</Text>
                        <TouchableOpacity style={styles.addToCartButton}>
                            <Text style={{color: 'white'}} onPress={()=>handleAdd(product)}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 12, 
    },
    productContainer: {
        width: '49%', 
        marginBottom: 16, 
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8, 
        color: 'white',
    },
    productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain', 
        marginBottom: 8, 
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4, 
    },
    productPrice: {
        fontSize: 14,
        color: 'black',
        marginBottom: 8, 
    },
    addToCartButton: {
        backgroundColor: 'black',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
});

export default Home
