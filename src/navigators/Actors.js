import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ActorsScreen from "../screens/Actors";
import ActorDetailsScreen from "../screens/ActorDetails";
import { Feather } from "@expo/vector-icons";

export default function ActorsNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator style={styles.ActorsNavigator}>
      <Stack.Screen
        name="Actor Search"
        component={ActorsScreen}
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
      <Stack.Screen name="Actor Details" component={ActorDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  ActorsNavigator: {
    /* Styles here */
  },
  headerMenuButton: {
    marginLeft: 20,
  },
});
