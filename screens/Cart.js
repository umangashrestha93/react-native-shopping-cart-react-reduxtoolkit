import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, remove } from "../redux/cartSlice";
// import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const cardItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
//   const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart)

  const handleRemove = (item) => {
    dispatch(remove(item));
  };
  const handleDelete = () => {
  };

  const getTotal = ()=>{
    let total = 0;
    cartItems.map((item)=>{
        total = total + item.price
    })
    return total
  }
  const windowWidth = Dimensions.get("window").width;
  const imageWidth = windowWidth * 0.3;
  const imageHeight = imageWidth;
  const decreaseQuantity = (item)=>{
    if(item.quantity == 1){
      dispatch(remove(item))
    }else{
      dispatch(decrementQuantity(item))
    }
  }
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item))
  }
  return (
    <>
    <View style={{backgroundColor: 'white', width: '100%', height: '8%', top: 35, borderRadius: 2, borderWidth: 0.1}}>
    </View>
    <View style={style.cartContainer}>
      <TouchableOpacity>
        <Text
          style={{
            flexDirection: "row",
            textAlign: "right",
            marginBottom: 5,
            marginRight: 5,
            fontSize: 18,
            color: "red",
            top: -15
          }}
          onPress={() => handleDelete()}
        >
          Delete
        </Text>
      </TouchableOpacity>
      <ScrollView style={{flex: 1}}>
        {cardItem.map((item, i) => (
          <View style={style.itemContainer} key={`cardItem${i}`}>
            <Image
              source={{ uri: item.image }}
              style={[
                style.imageContainer,
                { width: imageWidth, height: imageHeight },
              ]}
            />
            <View style={style.cartDetailsContainer}>
              <Text style={style.cartTitle}>{item.title}</Text>
              <Text style={style.cartPrice}>{item.price}</Text>
            </View>
            {/* <TouchableOpacity style={style.cartRemoveBtn}>
                                <Text onPress={()=>handleRemove(item.id)}>Remove</Text>
                            </TouchableOpacity> */}

            {cartItems !== 0 ? (    <TouchableOpacity style={style.minusBtn} onPress={()=> decreaseQuantity(item)}>
              <Text style={style.minusBtnText}>-</Text>
            </TouchableOpacity>): null}
                {cartItems !== 0? (<Text style={{ marginRight: 7 }}>{item.quantity}</Text>): null}
              
           {cartItems !== 0?( <TouchableOpacity style={style.plusBtn} onPress={()=> increaseQuantity(item)}>
              <Text style={style.plusBtnText}>+</Text>
            </TouchableOpacity>): null}
           
            <TouchableOpacity style={style.addToCartBtn}>
              <Text style={style.addToCartBtnText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
          
        ))}
      </ScrollView>
      

      {cartItems.length > 0? (<View
        style={{
          justifyContent: 'space-evenly',
          alignItems: "center",
         flexDirection: 'row',
          position: "absolute",
          backgroundColor: "white",
          width: "100%",
          height: 70,
          bottom: 0,
          marginLeft: 12,
          borderWidth: 0.2,
          borderColor: "gray",
          borderRadius: 3,
        }}
      >
        <View style={{width: '50%', justifyContent: 'center', alignItems: "center", height: '100%'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{'added items'+'('+cartItems.length+')'}</Text>
        <Text style={{fontSize: 16}}>{'Total:'+getTotal()}</Text>
        </View>
        <View style={{width: '50%', justifyContent: 'center', alignItems: "center", height: '100%'}}>
        <TouchableOpacity style={{backgroundColor: 'green',  borderRadius: 3, width: '70%', height: 30, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>checkout</Text>
        </TouchableOpacity>
        </View>
      </View>): null}
      
    </View>
    </>
  );
};

const style = StyleSheet.create({
  cartContainer: {
    flex: 1,
    padding: 12,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 5,
    borderWidth: 0.2,
    borderColor: "gray",
    borderRadius: 3,
    padding: 5,
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    borderRadius: 3,
  },
  cartDetailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  cartTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  cartPrice: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartRemoveBtn: {
    backgroundColor: "red",
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    padding: 3,
  },
  minusBtn: {
    backgroundColor: "green",
    width: 20,
    alignItems: "center",
    borderRadius: 3,
    padding: 2,
    marginRight: 5,
  },
  minusBtnText: {
    color: "white",
  },
  plusBtn: {
    backgroundColor: "green",
    width: 20,
    alignItems: "center",
    borderRadius: 3,
    padding: 2,
    marginRight: 5,
  },
  plusBtnText: {
    color: "white",
  },
  addToCartBtn: {
    position: "absolute",
    top: 95,
    width: 90,
    marginLeft: 190,
    backgroundColor: "black",
    borderRadius: 3,
    padding: 5,
  },
  addToCartBtnText: {
    color: "white",
    textAlign: "center",
  },
});

export default Cart;
