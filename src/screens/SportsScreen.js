import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class SportsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Sports Screen </Text>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});