import React from 'react';
import {
    StyleSheet, 
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    SafeAreaView, 
    FlatList
} from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";

function Home({ navigation }) {
    
    const renderItem = ({ item }) => (
        <TouchableWithoutFeedback onPress={ () => navigation.navigate(item.id)}>
          <View style={styles.listItem}>
          </View>
        </TouchableWithoutFeedback>
      );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
      </SafeAreaView>
    );
  <MaterialIcons name="search" size={24} color="black" 
  style={styles.searchIcon}  name="search" />
}



    // <View style={styles.Home}>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => navigation.navigate("Actors")}
    //       >
    //         <Octicons name="person" size={24} color="white" />
    //         <Text style={styles.buttontext}>Browse Actors</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         style={styles.button}
    //         onPress={() => navigation.navigate("Shows")}
    //       >
    //         <MaterialIcons name="tv" size={24} color="white" />
    //         <Text style={styles.buttontext}>Browse Shows</Text>
    //       </TouchableOpacity>
    //     </View>
    // </View>
    // );

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#711324",
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    listItem: {
        backgroundColor: '#fff',
        borderStyle: "solid",
        borderWidth: 1,
        marginLeft: 6,
        marginRight: 6,
        marginTop: 3,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 50,
        borderColor: '#000'
      },
      title: {
        fontSize: 27,
        textAlign: "center",
        fontWeight: "700",
        color: '#000',
        fontStyle: "italic",
        textDecorationLine: "underline",
      },
      year: {
        textAlign: 'center',
      },
      actors: {
        textAlign: 'center',
      },
      description: {
        fontSize: 15,
        marginBottom: 7,
        color: '#000',
        textAlign: 'center',
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
  });

export default Home;

