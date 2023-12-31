import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/cartSlice";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { showMessage } from "react-native-flash-message";
import filter from "lodash.filter";
import { Toast } from "react-native-toast-message";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([])
  // const cardItems = useSelector((state)=> state.cart)
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      const result = await fetch(url);
      // console.log(result)
      const data = await result.json();
      // console.log(data)
  
      setProducts(data);
  
    } catch (error) {
      console.log("Got this error.");
      console.log(error);
    }
  };

  useEffect(()=>{
    const filterProduct = filter(products, (product)=>{
      const productName = product.title.toLowerCase();
      const productPrice = product.price.toString();
      const searchText = search.toLowerCase()

      return productName.includes(searchText) || productPrice.includes(searchText)
    })
    setFilterProducts(filterProduct)

  },[search, products])

  useEffect(() => {
    getProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
    showMessage({
      message: "successfully added",
      description: "you have successfully added to cart",
      type: "success",
    });
  };
  return (
    <>
    <StatusBar style={{backgroundColor: 'gray'}}/>
   
      <ScrollView>
        <View style={styles.homeContainer}>
        <View style={{ width: '100%', height: 20, marginBottom: 28}}>
         <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              height: 40,
              borderRadius: 5,
              // marginBottom: 2,
              borderWidth: 0.3,
              // top: 20,
              marginLeft: 40
             
            }}
          >
            <Ionicons
              name="search-outline"
              size={20}
              style={{ marginLeft: 10 }}
            />
            <TextInput
              placeholder="search product"
              onChangeText={(text)=>setSearch(text)}
              style={{
                marginLeft: 10,
                fontSize: 15,
                flexDirection: "row",
                width: "100%",
              }}
              autoCapitalize="none"
            />
          </View>
    </View>
          {filterProducts.map((product) => (
            <View style={styles.productContainer} key={product.id}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text styles={styles.productTitle}>{product.title}</Text>
              <Text styles={styles.productPrice}>${product.price}</Text>
              {/* {cardItems.some((value)=>value.id == product.id)? (
                  <TouchableOpacity style={styles.addToCartButton}>
                  <Text
                    style={{ color: "white" }}
                    onPress={() => handleRemove(product)}
                  >
                    Remove from cart
                  </Text>
                </TouchableOpacity>
              ): (
                <TouchableOpacity style={styles.addToCartButton}>
                <Text
                  style={{ color: "white" }}
                  onPress={() => handleAdd(product)}
                >
                  Add to cart
                </Text>
              </TouchableOpacity>
              )} */}
                <TouchableOpacity style={styles.addToCartButton}  onPress={() => handleAdd(product)}>
                <Text
                  style={{ color: "white" }}
                >
                  Add to cart
                </Text>
          
              </TouchableOpacity>
              
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 12,
    // top: -20
  },

  productContainer: {
    width: "49%",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 7,
  },
  productPrice: {
    fontSize: 14,
    color: "#176B87",
    marginBottom: 5,
  },
  addToCartButton: {
    backgroundColor: "#176B87",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 5
  },
});

export default Home;
