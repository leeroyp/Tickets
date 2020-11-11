import React, { useState } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useEvents from '../hooks/useEvents'
import ResultsList from '../components/ResultsList'
import CardDisplay from '../components/CardDisplay'
import ModalDisplay from '../components/ModalDisplay'
import { Divider } from 'react-native-elements';
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useEvents();
  
// console.log (results._embedded.attractions[0].classifications[0].segment.name)  
const filterResultsBySegment =(segment) => {

  return results.filter( result => {
    return result._embedded.attractions[0].classifications[0].segment.name === segment
  })
}
  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm} 
        onTermSubmit={()=>searchApi(term)} 
      />
<ScrollView>
      <ModalDisplay/><ModalDisplay/>
    
      <ResultsList results={filterResultsBySegment("Arts & Theatre")} title="Arts & Theatre"/>
      <Divider />
      <ResultsList results={filterResultsBySegment("Sports")} title="Sports"/>
      <Divider  />
      <ResultsList results={filterResultsBySegment("Music")} title="Concers" />
  </ScrollView>
    </>
  );
};

HomeScreen.navigationOptions = {
  title: "Home",
  tabBarIcon: <FontAwesome name="home" size={24} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
