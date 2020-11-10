import React from "react";
import { View, Image, Text, StyleSheet, Flalist } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result._embedded.attractions[0].images[5].url}}/>
      <Text style={styles.name}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },

  image: {
    width: 250,
    height:150,
    borderRadius: 4,
    marginBottom:5
  },
  name:{
      fontWeight: 'bold',
      
  }
});

export default ResultsDetail;
