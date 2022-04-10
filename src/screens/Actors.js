import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Search from "../components/SearchActors";
import { Entypo } from "@expo/vector-icons";

export default function ActorsScreen({ navigation }) {
  const [search, setSearch] = useState();
  const [actors, setActors] = useState([]);

  const searchActors = (search) => {
    console.log("Make a call to the API using the search query: " + search);
    fetch(`https://api.tvmaze.com/search/people?q=${search}`)
      // fetch(`https://api.tvmaze.com/search/people?q=all`)
      .then((response) => response.json())
      .then((json) => {
        setActors(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    searchActors();
  }, [search]);

  return (
    // fetch("https://api.tvmaze.com/search/people?q=all")
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log(responseJson);
    //     setActors(responseJson);
    //   })

    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {}),
    <View style={styles.container}>
      <Search searchActors={searchActors} />
      <FlatList
        data={actors}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.showCard}
            onPress={() => {
              navigation.navigate("Actor Details", {
                id: item.person.id,
              });
            }}
          >
            <Image
              style={styles.resultImage}
              source={{
                uri: item?.person?.image
                  ? item?.person?.image?.medium
                  : "https://via.placeholder.com/350x150",
              }}
            />
            <View style={styles.rightView}>
              <Text style={styles.Name}>{item?.person.name}</Text>
              <View style={styles.rating}>
                <Entypo name="star" size={16} color="gold" />
                <Text style={styles.ratingText}>5.6</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        numColumns="1"
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const renderActors = ({ item }) => (
  <Actor
    id={item.person.id}
    name={item.person.name}
    image={item.person.image}
  />
);
const styles = StyleSheet.create({
  ShowsScreen: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  resultImage: {
    width: "40%",

    height: 120,
    // padding: 40,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  resultsContainer: {
    flexDirection: "row",
  },
  showCard: {
    backgroundColor: "black",
    marginVertical: 10,
    flexDirection: "row",
    borderRadius: 10,
    width: "100%",
  },
  rightView: {
    width: "45%",
    paddingHorizontal: 10,

    justifyContent: "center",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  genres: {
    flexDirection: "row",
    // alignItems: "center",
    flexWrap: "wrap",
  },
  Text: {
    color: "white",
  },
  ratingText: {
    color: "white",
    marginLeft: 5,
  },
  Name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
// return (
//   <View style={Styles.container}>
//     <SearchBar
//       placeholder="Search actors..."
//       onChangeText={(value) => searchActors(value)}
//       value={search}
//       containerStyle={{ backgroundColor: 'black' }}
//       inputContainerStyle={{
//         borderRadius: 25,
//         backgroundColor: Colors.GRAY_DARK,
//       }}
//     />
//     <FlatList
//       data={actors}
//       keyExtractor={(item) => item.person.id.toString()}
//       renderItem={renderActors}
//     />
//   </View>
