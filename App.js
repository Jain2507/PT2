import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import BottomTabNavigator from './src/navigators/BottomTab';
import MeisterFlix from "./src/screens/MeisterFlix";
import Home from "./src/screens/Home";
import ActorsScreen from "./src/screens/Actors";
import ShowsScreen from "./src/screens/Shows";
// import EpisodesScreen from "./src/screens/Episodes";
import ShowDetailsScreen from "./src/screens/ShowDetails";
import ActorDetail from "./src/screens/ActorDetails";
// import EpisodeDetailsScreen from "./src/screens/EpisodeDetails";

export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="MeisterFlix" component={MeisterFlix} />
      <Stack.Screen name="Home" component={Home} options={{ title: "Back"}} />
        <Stack.Screen
          name="Actors"
          component={ActorsScreen}
          options={{ headerShown: "Actors" }}
        />
        {/* 
        <Stack.Screen
          name="Actor Details"
          component={Act}
          options={{ headerShown: "Shows" }}
        /> */}
        <Stack.Screen
          name="Shows"
          component={ShowsScreen}
          options={{ headerShown: "Shows" }}
        />

        <Stack.Screen
          name="Show Details"
          component={ShowDetailsScreen}
          options={{ headerShown: "Shows" }}
        />

        <Stack.Screen
          name="Actor Details"
          component={ActorDetail}
          options={{ headerShown: "Shows" }}
        />

        {/* <Stack.Screen
          name="Episode Details"
          component={EpisodeDetailsScreen}
          options={{ headerShown: "Shows" }}
        />

        <Stack.Screen
          name="Episodes"
          component={EpisodesScreen}
          options={{ headerShown: "Episodes" }}
        /> */}
      </Stack.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    paddingTop: 30,
  },
});
