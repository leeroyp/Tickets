import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar'


export default class BrowseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       <SearchBar/>

       <Text style={styles.Text}>Popular Near You </Text>
      </View >
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
    alignItems: 'flex-start',
    paddingTop:30
    // justifyContent: "center"
  }, 
  Text: {
    fontWeight:"bold",
    fontSize: 20, 
    paddingTop: 30 
  }
});