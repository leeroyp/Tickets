import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import stubHub from "../api/stubHub";
import yelp from '../api/stubHub'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async(id) => {
        try{
        const response = await stubHub.get ("/events"`/${id}`,{
            params: {
                apikey: "",
              },
        });
        
        setResult(response.data);

     } catch (err){
         
     }
    }

    useEffect (() => {
        getResult(id);
    },[])

    if (!result){
        return null;
    }

  return (
  <View>
      <Text>{result.name} </Text>
      <FlatList 
      data={result.photos}
      keyExtractor= {(photo) => photo}
      renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item }}/>
      }} 
      />
      <Text>ResultsShowScreen</Text>
  </View>
  )};

const styles = StyleSheet.create ({
    image: {
        height: 200, 
        width:  300 ,
        marginBottom: 10
     }
});

export default ResultsShowScreen
