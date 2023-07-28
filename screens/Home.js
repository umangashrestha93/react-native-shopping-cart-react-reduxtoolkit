import { View, Text, Button, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [products, setProducts] = useState([])

    const getProduct = async () => {
        const url = "https://fakestoreapi.com/products"
        const result = await fetch(url)
        const data = await result.json()
        setProducts(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

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
                            <Text styles={styles.addToCartButtonText}>Add to cart</Text>
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
        padding: 16, 
    },
    productContainer: {
        width: '48%', 
        marginBottom: 16, 
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8, 
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
        backgroundColor: '#007BFF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Home
