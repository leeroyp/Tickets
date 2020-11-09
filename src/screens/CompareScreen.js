import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

export default class CompareScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Compare Screen </Text>
      </View>
    );
  }
}

CompareScreen.navigationOptions = {
  title:'Compare',
  tabBarIcon:<FontAwesome name="balance-scale" size={24} color="black" />
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});