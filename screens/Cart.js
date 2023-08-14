import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  remove,
  removeFromCart,
} from "../redux/cartSlice";
import CheckBox from "react-native-check-box";
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const cardItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(false);

  // console.log({cartItems})
  // console.log({cardItem})
  // console.log('hello')

  const handleRemove = (item) => {
    console.log({ item });
    dispatch(removeFromCart(item));
  };

  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      total = total + item.price * item.quantity;
    });
    return total.toFixed(0);
  };
  const windowWidth = Dimensions.get("window").width;
  const imageWidth = windowWidth * 0.3;
  const imageHeight = imageWidth;

  const decreaseQuantity = (item) => {
    if (item.quantity == 1) {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  return (
    <>
      {cartItems.length == 0 ? (
        <View style={style.emptyCartContainer}>
          <Text style={style.emptyCartText}>Your cart is empty.</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#176B87",
              width: 170,
              padding: 10,
              borderRadius: 3,
              marginTop: 10,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={style.cartContainer}>
          <TouchableOpacity></TouchableOpacity>
          <ScrollView style={{ flex: 1 }}>
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
                  <Text style={style.cartPrice}>${item.price}</Text>
                </View>

                <TouchableOpacity
                  style={style.minusBtn}
                  onPress={() => decreaseQuantity(item)}
                >
                  <Text style={style.minusBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={{ marginRight: 7 }}>{item.quantity}</Text>

                <TouchableOpacity
                  style={style.plusBtn}
                  onPress={() => increaseQuantity(item)}
                >
                  <Text style={style.plusBtnText}>+</Text>
                </TouchableOpacity>
                <Modal transparent={true} visible={showModal} animationType="fade" >
                  <TouchableOpacity style={style.modalContainer} activeOpacity={1} onPress={()=>setShowModal(false)}>
                    <View style={style.modalView}>
                      <Text style={style.modalText}>
                        Are you sure you want to remove this item?
                      </Text>
                      <View style={style.buttonContainer}>
                        <TouchableOpacity
                          style={style.button}
                          onPress={() => setShowModal(false)}
                        >
                          <Text style={style.buttonText}>cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={style.RemoveButton}
                          onPress={() => {handleRemove(item.id); setShowModal(false)}}
                        >
                          <Text style={style.buttonText}>Remove</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Modal>

                <TouchableOpacity
                  style={style.Remove}
                  onPress={() => setShowModal(true)}
                >
                  <Text style={style.removeBtnText}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {cartItems.length > 0 ? (
            <View
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "row",
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
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {"added items" + "(" + cartItems.length + ")"}
                </Text>
                <Text style={{ fontSize: 16 }}>{"Total:$" + getTotal()}</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#176B87",
                    borderRadius: 3,
                    width: "70%",
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => navigation.navigate("checkout")}
                >
                  <Text style={{ textAlign: "center", color: "white" }}>
                    checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      )}
    </>
  );
};

const style = StyleSheet.create({
  cartContainer: {
    flex: 1,
    padding: 5,
  },
  itemContainer: {
    flexDirection: "row",
    // justifyContent: 'center',
    marginBottom: 5,
    borderWidth: 0.2,
    borderColor: "gray",
    borderRadius: 3,
    padding: 7,
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
    color: "#176B87",
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
    backgroundColor: "#176B87",
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
    backgroundColor: "#176B87",
    width: 20,
    alignItems: "center",
    borderRadius: 3,
    padding: 2,
    marginRight: 5,
  },
  plusBtnText: {
    color: "white",
  },

  Remove: {
    position: "absolute",
    top: 95,
    // width: 70,
    marginLeft: 305,
    // backgroundColor: "red",
    borderRadius: 3,
    padding: 5,
  },

  removeBtnText: {
    color: "red",
    textAlign: "center",
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    color: "gray",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
    // backgroundColor: '#176B87'
  },

  modalView: {
    backgroundColor: "#F8F6F4",
    padding: 20,
    borderRadius: 10,
    width: 300,
    shadowColor: "#1e1e1e",
    elevation: 50,
    borderWidth: 0.2,
    borderColor: "gray",
  },

  modalText: {
    color: "black",
    marginBottom: 15,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },

  button: {
    width: 80,
    padding: 7,
    borderRadius: 7,
    alignItems: "center",
    backgroundColor: "gray",
  },
  RemoveButton: {
    width: 80,
    padding: 7,
    borderRadius: 7,
    alignItems: "center",
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
  },
});

export default Cart;
