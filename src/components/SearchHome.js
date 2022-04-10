import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from "react-native";

import { Ionicons } from "@expo/vector-icons";   

export default function SearchForm({setSearchQuery}) {
  const [text, setText] = useState();

  const submitHandler = () => {
    Keyboard.dismiss();
    setSearchQuery(text);
}


  const changeHandler = (val) => {
    setText(val);
  };


  return (
    <View style={styles.searchForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter actor.."
        onChangeText={text => changeHandler(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={() => submitHandler()}>
        <Ionicons style={styles.icon} name="search" size={36} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    searchForm: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    input: {
        flexGrow: 1,
        color: '#000',
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 20
    },
    searchButton: {
        width: 50,
        height: 50,
        padding: 10,
        backgroundColor: '#000',
    },
    icon: {
        flex: 1,
        justifyContent:'center',
        alignSelf:'center',
        lineHeight: 36
    },
});