import React, { useState,Component } from "react";
import { Text, View, StyleSheet, Button ,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";


export default class HomeScreen extends Component {
  

  render() {
    return (
    <>
      <SearchBar/>
      <ScrollView>
      <ResultsList/>
      </ScrollView>
    </>
      
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});