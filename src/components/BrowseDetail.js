import React from "react";
import { View, Image, Text, StyleSheet,Button } from "react-native";


const ResultsDetail = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require()}/>
      <Text >{result.name}</Text>
      <Text style={styles.Text1}>Sun, Nov 26, 2020 4:50pm</Text>
      <Button title='Find Tickets'/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
       
    },

  image: {
    width: 300,
    height:150,
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
    marginRight:5,
    paddingBottom: 10
  }


});

export default ResultsDetail;
