import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import BottomTabNavigator from './src/navigators/BottomTab';

import { Octicons, Feather, MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* <ImageBackground
            source={require("../../assets/tv-background/classtv.jpeg")}
            resizeMode="cover"
            style={styles.imageBackground}
          >
            <Text style={styles.title}>
              Welcome to the TV App, where you can browse you favorite shows,
              actors and episodes......
            </Text>
            <Text style={styles.subtitle}>We hope you enjoy what you see!</Text>
          </ImageBackground> */}
        </View>
        <View style={styles.HomeScreen}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Actors")}
          >
            <Octicons name="person" size={24} color="white" />
            <Text style={styles.buttontext}>Browse Actors</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Shows")}
          >
            <Feather name="tv" size={24} color="white" />
            <Text style={styles.buttontext}>Browse Shows</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Episodes")}
          >
            <MaterialIcons name="tv" size={24} color="white" />
            <Text style={styles.buttontext}>Browse Episodes</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  HomeScreen: {
    backgroundColor: "#A83F0F",
    textDecorationColor: "white",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  buttontext: {
    color: "white",
    fontSize: 10,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  title: {
    color: "white",
    textAlign: "center",
    marginTop: 130,
    fontSize: 23,
    paddingHorizontal: 15,
    fontWeight: "bold",
    lineHeight: 30,
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
  },
  // text: {
  //   textDecorationColor:"white",
  //   fontSize: 42,
  //   lineHeight: 84,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   backgroundColor: "#000",
  // },
  // contentContainerStyle: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center"
  // }
});
