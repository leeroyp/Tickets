import React from "react";
import { View, Image, Text, StyleSheet, Flalist } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const ResultsDetail = ({ result }) => {
  return (
    <Card style={styles.CardStyle}>
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result._embedded.attractions[0].images[5].url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.Text1}>Sun, Nov 26, 2020 4:50pm</Text>
      <Text>Starting from: </Text>
    </View>
    </Card>
  );
};

const styles = StyleSheet.create({
    container:{
       
    },

  image: {
    width: 225,
    height:125,
    borderRadius: 4,
    marginBottom:5
  },
  name:{
      fontWeight: 'bold',
      
  },
  Text1:{
    color: "blue", 
    fontWeight: "bold"
  },
  CardStyle:{
    marginRight:5
  }


});

export default ResultsDetail;
