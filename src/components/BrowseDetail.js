import React from "react";
import { View, Image, Text, StyleSheet,Button, TouchableOpacity} from "react-native";


const ResultsDetail = (props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={()=> console.log(props.title)}>
      <Image source={props.imageSource} style={styles.image}/>
      <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
       
    },

  image: {
    height: 50,
    width: 60,
    borderRadius:10,
   
  },
  title: {
    fontSize: 15,

  },
  item: {
    padding: 1,
    marginHorizontal: 4,
  },


});

export default ResultsDetail;
