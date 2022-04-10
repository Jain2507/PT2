import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ShowsScreen from "../screens/Shows";
import ShowDetailsScreen from "../screens/ShowDetails";
import { Feather } from "@expo/vector-icons";

export default function ShowsNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator style={styles.ShowsNavigator}>
      <Stack.Screen
        name="Show Search"
        component={ShowsScreen}
        options={({ navigation }) => ({
          // headerLeft: (props) => {
          //   return (
          //     <Feather
          //       style={styles.headerMenuButton}
          //       name="menu"
          //       size={24}
          //       color="black"
          //       onPress={() => navigation.toggleDrawer()}
          //     />
          //   );
          // },
        })}
      />
      <Stack.Screen name="ShowDetails" component={ShowDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  ShowsNavigator: {
    /* Styles here */
  },
  headerMenuButton: {
    marginLeft: 20,
  },
});
