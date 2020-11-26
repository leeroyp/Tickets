import React,{useState} from "react";
import { View, Image, Text, StyleSheet,Button, TouchableOpacity} from "react-native";
import {withNavigation } from "react-navigation"



const BrowseDetail = ({title, imageSource, navigation}) => {
const [tittle, setTittle] = useState('')

  return (
    <View style={styles.item}>

      <TouchableOpacity
      title={tittle}
       onPress={setTittle, console.log(setTittle)}>
      <Image source={imageSource} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
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

export default withNavigation(BrowseDetail);
