import React, { useState, useEffect, memo } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import useSuggestions from "../hooks/useSuggestions";
import { ScrollView } from "react-native-gesture-handler";
import BrowseList from '../components/BrowseList'

const BrowseScreen = () => {
  const [term2, setTerm2] = useState("");
  const [searchSuggest, suggestions, errorMessage] = useSuggestions();

  return (
    <ScrollView >
      <View style={styles.container}>
      <SearchBar
        term={term2}
        onTermChange={setTerm2}
        onTermSubmit={() => searchSuggest(term2)}
      />
      
      <Text style={styles.Text}>Top Categories </Text>
      <BrowseList />
      </View>
    </ScrollView>
  );
};

BrowseScreen.navigationOptions = {
  title: "Browse",
  tabBarIcon: <FontAwesome name="search" size={24} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    paddingTop: 30,
  },
  Text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 30,
  },
});

export default BrowseScreen;
