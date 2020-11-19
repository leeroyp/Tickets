import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Overlay, Button, Image, Card } from "react-native-elements";

import Animation from '../components/Animation'

const CompareScreen = () => {

  return (
      <View style={styles.container} >
      <Text>The Right Price</Text>
      <Text>Compare ticket prices from various ticketing apps</Text>
      <Animation />
      </View>

  )
}

CompareScreen.navigationOptions = {
  title: "Home",
  tabBarIcon: <FontAwesome name="scale" size={24} color="black" />,
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  }

})

export default CompareScreen;
