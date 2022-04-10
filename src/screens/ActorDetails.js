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

export default function ActorDetail({ route, navigation }) {
  const [ActorDetail, setActorDetail] = useState();

  const { id } = route.params;

  console.log(id);

  const getShowData = () => {
    fetch("https://api.tvmaze.com/people/" + id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setActorDetail(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getShowData();
  }, [id]);

  return (
    <ScrollView style={styles.ShowDetailsScreen}>
      {ActorDetail?.image?.original ? (
        <View>
          <Image
            style={styles.photoImage}
            source={{ uri: ActorDetail.image.original }}
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
        {ActorDetail ? (
          <View style={styles.detailsContainer}>
            <View style={styles.metaDataContainer}>
              <Text style={styles.metaDataText}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Actor Name :
                </Text>{" "}
                {ActorDetail.name}
              </Text>

              <Text style={styles.metaDataText}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Country Name :
                </Text>{" "}
                {ActorDetail.country?.name}
              </Text>

              <Text style={styles.metaDataText}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Birthday :
                </Text>{" "}
                {ActorDetail.birthday}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#000" />
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
    height: 450,
    resizeMode: "cover",
    borderColor: "deeppink",
    borderWidth: 3,
  },

  metaDataContainer: {
    margin: 20,
    alignItems: "center",
  },

  metaDataText: {
    margin: 15,
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
});
