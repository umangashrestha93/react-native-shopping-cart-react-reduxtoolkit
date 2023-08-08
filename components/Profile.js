import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",  }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#176B87",
          position: "absolute",
          width: "110%",
          height: "40%",
          top: -30,
          borderRadius: 85,
        }}
      >
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "90%",
          height: "85%",
          position: "absolute",
          bottom: -50,
          borderRadius: 50,
          flex: 1,
          alignItems: 'center',
        }}
      > 
        <View
          style={{
            backgroundColor: "white",
            width: 150,
            height: 150,
            borderRadius: 100,
            top: -80,
            borderWidth: 0.2,
            shadowColor: 'black',
            elevation: 10
          }}
        >
            <View
          style={{
            backgroundColor: "white",
            width: 140,
            height: 140,
            borderRadius: 100,
            borderWidth: 0.2,
            shadowColor: 'black',
            elevation: 10,
            marginLeft: 5,
            top: 4
          }}
        >
          <View style={{alignItems: 'center', top: 12}}>
          <Ionicons name="person-outline" size={110} />
          </View>

          
        </View>


        </View>
      </View>
    </View>
  );
};

export default Profile;
