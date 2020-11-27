import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import {withNavigation } from "react-navigation"
import ResultsDetail from "../components/ResultsDetail";

const ResultsList = ({title, results,navigation}) => { 

  return (
    <View>
     <Text style={styles.title}>{title}</Text>
    <FlatList
    // horizontal
    showsHorizontalScrollIndicator={false}
    data={results}
    keyExtractor={(results)=>results.id}
    renderItem={({item}) =>{
    return (
      <TouchableOpacity onPress={()=> navigation.navigate('Result')}>
      <ResultsDetail style={styles.resultDetail} result={item}/>
    </TouchableOpacity>
    )}}
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
resultDetail: {
  paddingBottom: 30
}
});

export default withNavigation(ResultsList);
