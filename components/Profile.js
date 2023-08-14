import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { removeToken } from "../redux/userSlice";
import { StatusBar } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      let removeAccessToken = await AsyncStorage.removeItem("accessToken");
      dispatch(removeToken(removeAccessToken));
      console.log("Logout:", "Logout successfully");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Logout error", error);
    }

  };

  return (
    <>
  
    <View style={profileUI.mainContainer}>
      <View style={profileUI.firstDiv}></View>
      <View style={profileUI.secondDiv}>
        <TouchableOpacity style={profileUI.exitIcon} onPress={handleLogout}>
          <Ionicons name="exit-outline" size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={profileUI.settingIcon}>
          <Ionicons name="settings-outline" size={28} />
        </TouchableOpacity>
        <View style={profileUI.userInfo}>
          <Text style={profileUI.userName}>Umanga Shrestha</Text>
        </View>
        <View style={profileUI.detailsContainer}>
          <Text style={profileUI.details}>Wishlist</Text>
          <Text style={profileUI.details}>Order History</Text>
          <Text style={profileUI.details}>Currency</Text>
          <Text style={profileUI.details}>Notification</Text>
          <Text style={profileUI.details}>Privacy & Policy</Text>
        </View>
        <View style={profileUI.profileImageContainer}>
          <View style={profileUI.profileImage}>
            <Ionicons name="person-outline" size={110} />
          </View>
        </View>
      </View>
    </View>
    </>
  );
};

const profileUI = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  firstDiv: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#176B87",
    position: "absolute",
    width: "110%",
    height: "40%",
    top: -30,
    borderRadius: windowWidth * 0.2,
  },
  secondDiv: {
    backgroundColor: "white",
    width: "90%",
    height: "85%",
    position: "absolute",
    bottom: -50,
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  exitIcon: {
    position: "absolute",
    top: 30,
    left: 20,
    backgroundColor: "#F1F0E8",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  settingIcon: {
    position: "absolute",
    top: 30,
    right: 20,
    backgroundColor: "#F1F0E8",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    position: 'absolute',
    top: 95,
    alignItems: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "700",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    top: -60,
    marginRight: 130,
    alignItems: "flex-start",
  },
  details: {
    fontSize: 18,
    marginBottom: 25,
  },
  profileImageContainer: {
    position: 'absolute',
    top: -50,
    alignItems: "center",
  },
  profileImage: {
    backgroundColor: "white",
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 0.2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});

export default Profile;
