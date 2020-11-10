import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {withNavigation } from "react-navigation"
import ResultsDetail from "../components/ResultsDetail";

const ResultsList = ({title, results}) => { 

  return (
    <View>
     <Text style={styles.title}>{title}</Text>
    <FlatList
    horizontal
    data={results}
    keyExtractor={(results)=>results.id}
    renderItem={({item}) =>{
    return <ResultsDetail result={item}/>
    }}
    />

    </View>
  );
  }

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
