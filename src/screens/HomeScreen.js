import React, { useState,Component } from "react";
import { Text, View, StyleSheet, Button ,ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import stubHub from '../api/stubHub'
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  const [term, setTerm] = useState ('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await stubHub.get('/events',{
      params:{
        apikey: ,
        keyword: term,
        size: 10,
        
        
      }})
      console.log(response)
    setResults(response)
  }

  
    return (
    <>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={searchApi}
      />

    <Text>We have found  results</Text>
      
      
    </>
      
    )
}

HomeScreen.navigationOptions = {
  title:'Home',
  tabBarIcon:<FontAwesome name="home" size={24} color="black" />
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen