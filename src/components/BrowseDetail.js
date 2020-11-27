import React,{useState} from "react";
import { View, Image, Text, StyleSheet,Button, TouchableOpacity} from "react-native";
import {withNavigation } from "react-navigation"
import stubHub from '../api/stubHub'




const BrowseDetail = ({title, imageSource, navigation}) => {


  const [category, setCategory] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
  const searchApi = async () => {
    try {
      const response = await stubHub.get("/attractions", {
        params: {
          apikey: "ORPwqNjHZx8nDqGVekIBZB8QEORIfbuC",
          keyword: title,
          size: 5,
        },
      });
      console.log("RESPONSE",response.data)
      // setCategory(response.data._embedded.events);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View style={styles.item}>

      <TouchableOpacity onPress={searchApi}>
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
