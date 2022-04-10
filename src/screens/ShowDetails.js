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

export default function ShowDetailsScreen({ route, navigation }) {
  const [showData, setShowData] = useState();

  const { showId } = route.params;

  console.log(showId, "dknknkn");
  const getShowData = () => {
    fetch("http://api.tvmaze.com/shows/" + showId)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setShowData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getShowData();
  }, [showId]);

  return (
    <ScrollView style={styles.ShowDetailsScreen}>
      {showData?.image?.original ? (
        <View>
          <Image
            style={styles.photoImage}
            source={{ uri: showData.image.original }}
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
        {showData ? (
          <View style={styles.detailsContainer}>
            <View style={styles.metaDataContainer}>
              <Text style={styles.metaDataText}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Show Name:
                </Text>{" "}
                {showData.name}
              </Text>

              <Text style={styles.Detail}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  DETAIl:
                </Text>{" "}
                {showData.summary}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        )}
        <Text style={[styles.ratingText, { textAlign: "center" }]}>Rating</Text>
        {showData?.rating?.average && (
          <View style={styles.rating}>
            <Entypo name="star" size={16} color="gold" />
            <Text style={styles.ratingText}>{showData.rating?.average}</Text>
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
    margin: 15,
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
