import React from 'react';
import { 
    StyleSheet,
    Text, 
    View,  
    Button,
  } from 'react-native';

function MeisterFlix({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome</Text>
          <View style={styles.btnContainer}>
          <Button color="black"
              title="Enter"
              onPress={() => navigation.navigate("Home")}/>
          </View>
          </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#711324",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        marginTop: 40,
        width: 150,
    },
    Button: {
        backgroundColor: '#fff',
        marginTop: 40,
        width: 150,
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 2,
        color: '#fff',
      },
});

export default MeisterFlix;
