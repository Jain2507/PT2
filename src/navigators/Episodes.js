import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EpisodesScreen from "../screens/Episodes";
import EpisodesDetailsScreen from "../screens/EpisodeDetails";
import { Feather } from "@expo/vector-icons";

export default function EpisodesNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator style={styles.EpisodesNavigator}>
      <Stack.Screen
        name="Episode Search"
        component={EpisodesScreen}
        options={({ navigation }) => ({
          headerLeft: (props) => {
            return (
              <Feather
                style={styles.headerMenuButton}
                name="menu"
                size={24}
                color="black"
                onPress={() => navigation.toggleDrawer()}
              />
            );
          },
        })}
      />
      <Stack.Screen name="Episode Details" component={EpisodeDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  EpisodesNavigator: {
    /* Styles here */
  },
  headerMenuButton: {
    marginLeft: 20,
  },
});
