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
import { Entypo } from "@expo/vector-icons";

import Search from "../components/SearchEpisodes";

export default function EpisodesScreen({ navigation, route }) {
  const [searchQuery, setSearchQuery] = useState("Homeland");
  const [episodes, setEpisodes] = useState([]);
  const [episodeId, setEpisodeid] = useState(
    route.params?.showId ? route?.params?.showId : 1
  );

  console.log(route.params.showId, "dkmknk");
  const searchEpisodes = () => {
    console.log(
      "Make a call to the API using the search query: " + searchQuery
    );

    fetch(`https://api.tvmaze.com/shows/${episodeId}/episodes`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setEpisodes(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    searchEpisodes();
  }, [searchQuery]);

  return (
    <View style={styles.EpisodesScreen}>
      <Search setSearchQuery={setSearchQuery} />
      {episodes ? (
        <View style={styles.resultsContainer}>
          <FlatList
            data={episodes}
            renderItem={({ item }) => {
              let image = "https://via.placeholder.com/350x150";
              if (item.image && item.image.original)
                image = item.image.original;
              //   if (item.person.image.original !== null)
              //     image = item.person.image.original;

              return (
                <TouchableOpacity
                  style={styles.showCard}
                  onPress={() => {
                    navigation.navigate("Episode Details", {
                      episode: item.id,
                    });
                  }}
                >
                  <Image style={styles.resultImage} source={{ uri: image }} />
                  <View style={styles.rightView}>
                    <Text style={styles.Name}>{item.name}</Text>

                    <View style={styles.genres}>
                      {item.genres &&
                        item.genres.map((value, ind) => (
                          <Text style={styles.Text} key={ind}>
                            {value},
                          </Text>
                        ))}
                    </View>
                    {item.rating?.average && (
                      <View style={styles.rating}>
                        <Entypo name="star" size={16} color="gold" />
                        <Text style={styles.ratingText}>
                          {item.rating?.average}
                        </Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            numColumns="2"
            style={{ marging: 10 }}
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
  EpisodesScreen: {
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
