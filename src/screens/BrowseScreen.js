import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export default class BrowseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Browse Screen </Text>
      </View>
    );
  }
}


BrowseScreen.navigationOptions = {
  title:'Browse',
  tabBarIcon:<FontAwesome name="search" size={24} color="black" />
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});