import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function EpisodeDetailsScreen({ route, navigation }) {
  const [episodeData, setEpisodeData] = useState();

  const { episode } = route.params;

  const getShowData = () => {
    fetch("https://api.tvmaze.com/episodes/" + episode)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setEpisodeData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getShowData();
  }, [episode]);

  console.log(episodeData);

  return (
    <ScrollView style={styles.ShowDetailsScreen}>
      {episodeData?.image?.original ? (
        <View>
          <Image
            style={styles.photoImage}
            source={{ uri: episodeData.image.original }}
          />
        </View>
      ) : (
        <Image
          style={styles.photoImage}
          source={{
            uri: "https://via.placeholder.com/350x150",
          }}
        />
      )}
      <View>
        {episodeData ? (
          <View style={styles.detailsContainer}>
            <View style={styles.metaDataContainer}>
              <Text style={styles.metaDataText}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Show Name:
                </Text>{" "}
                {episodeData.name}
              </Text>

              <Text style={styles.metaDataText}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Season:
                </Text>{" "}
                {episodeData.season}
              </Text>

              <Text style={styles.metaDataText}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Number:
                </Text>{" "}
                {episodeData.number}
              </Text>
              <Text style={styles.metaDataText}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Broadcast Date:
                </Text>{" "}
                {episodeData.airdate}
              </Text>

              <Text style={styles.Detail}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  DETAIl:
                </Text>{" "}
                {episodeData.summary}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        )}
        <Text style={[styles.ratingText, { textAlign: "center" }]}>Rating</Text>
        {episodeData?.rating?.average && (
          <View style={styles.rating}>
            <Entypo name="star" size={16} color="gold" />
            <Text style={styles.ratingText}>{episodeData.rating?.average}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ShowDetailsScreen: {
    backgroundColor: "black",
    flex: 1,
  },

  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
  photoImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderColor: "deeppink",
    borderWidth: 3,
  },

  metaDataContainer: {
    margin: 20,
  },

  metaDataText: {
    margin: 5,
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  Detail: {
    margin: 15,
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    textAlign: "justify",
  },
  ratingText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
