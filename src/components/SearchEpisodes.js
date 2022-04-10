import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { Feather } from "@expo/vector-icons";

export default function SearchForm({ setSearchQuery }) {
  const [text, setText] = useState();

  const submitHandler = () => {
    Keyboard.dismiss();
    setSearchQuery(text);
  };

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.searchForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter episode name here..."
        onChangeText={changeHandler}
        placeholderTextColor="white"
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => submitHandler()}
      >
        <Feather style={styles.icon} name="search" size={36} color="#FFF" />
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
    marginTop: 20,
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
