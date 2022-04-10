import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchActors({ navigation, searchActors }) {
  const [search, setSearch] = useState("");
  const [text, setText] = useState();

  const handleChangeText = () => {
    setText(search);
    setText(text);
  };

  const changeHandler = (val) => {
    setText(val);
  };

  const handleSubmit = () => {
    setSearch(text);
    searchActors(text);
    Keyboard.dismiss();
    // navigation.navigator.push("ActorDetails");
  };

  return (
    // id: item.persobid,
    // name: item.name,
    // image: item.image,
    // birthday: item.birthday,
    // country: item.country,

    <View style={styles.searchForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter actor.."
        onChangeText={(text) => changeHandler(text)}
        placeholderTextColor="white"
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => handleSubmit()}
      >
        <Ionicons style={styles.icon} name="search" size={36} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchForm: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "brown",
    borderRadius: 20,
  },
  input: {
    flexGrow: 1,
    color: "white",
    paddingHorizontal: 8,
    fontSize: 20,
  },
  searchButton: {
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 20,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    lineHeight: 36,
  },
});
