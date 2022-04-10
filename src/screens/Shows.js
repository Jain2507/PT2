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
import Search from "../components/SearchShows";
import { Entypo } from "@expo/vector-icons";

export default function ShowsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("man");
  const [shows, setShows] = useState([]);

  const searchShows = () => {
    console.log(
      "Make a call to the API using the search query: " + searchQuery
    );
    fetch("http://api.tvmaze.com/search/shows?q=" + searchQuery)
      .then((response) => response.json())
      .then((json) => {
        setShows(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    searchShows();
  }, [searchQuery]);

  console.log(shows.length);
  return (
    <View style={styles.ShowsScreen}>
      <Search setSearchQuery={setSearchQuery} />
      {shows ? (
        <View style={styles.resultsContainer}>
          <FlatList
            data={shows}
            renderItem={({ item }) => {
              let image = "https://via.placeholder.com/350x150";
              if (item.show.image && item.show.image.original)
                image = item.show.image.original;

              console.log(item.show.id);
              //   if (item.person.image.original !== null)
              //     image = item.person.image.original;
              //   console.log(image);

              return (
                <TouchableOpacity
                  style={styles.showCard}
                  onPress={() => {
                    navigation.navigate("Episodes", {
                      showId: item.show.id,
                    });
                  }}
                >
                  <Image style={styles.resultImage} source={{ uri: image }} />
                  <View style={styles.rightView}>
                    <Text style={styles.Name}>{item.show.name}</Text>

                    {item.show.rating?.average && (
                      <View style={styles.rating}>
                        <Entypo name="star" size={16} color="gold" />
                        <Text style={styles.ratingText}>
                          {item.show.rating?.average}
                        </Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            numColumns="1"
            style={{
              marginBottom: 80,
            }}
          />
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ShowsScreen: {
    backgroundColor: "#A8582C",
    flex: 1,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
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
