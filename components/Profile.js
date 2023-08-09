import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={profileUI.mainContainer}>
      <View style={profileUI.firstDiv}></View>
      <View style={profileUI.secondDiv}>
      <View style={profileUI.exitIcon}>
        <Ionicons name="exit-outline" size={28}/>
        </View>
        <View style={profileUI.settingIcon}>
          <Ionicons name="settings-outline" size={28}/>
        </View>
        <View style={profileUI.thirdDiv}>
          <View style={profileUI.fourthDiv}>
            <View style={{ alignItems: "center", top: 12 }}>
              <Ionicons name="person-outline" size={110} />
            </View>
          </View>
        </View>
      </View>
    </View>
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
    borderRadius: 85,
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
  },
  thirdDiv: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderRadius: 100,
    top: -120,
    borderWidth: 0.2,
    shadowColor: "black",
    elevation: 10,
  },
  fourthDiv: {
    backgroundColor: "white",
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 0.2,
    shadowColor: "black",
    elevation: 10,
    marginLeft: 5,
    top: 4,
  },
  exitIcon:{
    top: 30,
    marginLeft:250,
    backgroundColor: '#F1F0E8',
    borderRadius: 10,
    width: 40,
    alignItems: 'center'
    

  },
  settingIcon:{
    marginRight: 250,
    top: 1,
    backgroundColor: '#F1F0E8',
    borderRadius: 10,
    width: 40,
    alignItems: 'center'

  }

});

export default Profile;
