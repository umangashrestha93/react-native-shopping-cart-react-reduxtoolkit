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

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const cardItems = useSelector((state)=> state.cart)
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

  const handleSearch = async (text) => {
    setSearch(text);
    const url = `https://fakestoreapi.com/products?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setProducts(result);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const handleRemove = (product) => {
    dispatch(remove(product))
  }

  return (
    <>
    <View style={{backgroundColor: 'white', width: '100%', height: '8%', top: 35, marginBottom: 28}}>
         <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              height: 40,
              borderRadius: 5,
              marginBottom: 7,
              borderWidth: 0.3,
              top: 10,
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
              style={{
                marginLeft: 10,
                fontSize: 15,
                flexDirection: "row",
                width: "100%",
              }}
              autoCapitalize="none"
              onChangeText={(text) => handleSearch(text)}
              value={search}
            />
          </View>
    </View>
      <ScrollView>
        <View style={styles.homeContainer}>

          {products.map((product) => (
            <View style={styles.productContainer} key={product.id}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text styles={styles.productTitle}>{product.title}</Text>
              <Text styles={styles.productPrice}>{product.price}</Text>
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
                <TouchableOpacity style={styles.addToCartButton}>
                <Text
                  style={{ color: "white" }}
                  onPress={() => handleAdd(product)}
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
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: "black",
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: "center",
  },
});

export default Home;
