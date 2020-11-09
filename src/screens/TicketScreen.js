import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

export default class TicketScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Ticket Screen </Text>
    
      </View>
    );
  }
}
TicketScreen.navigationOptions = {
  title:'Tickets',
  tabBarIcon:<FontAwesome name="ticket" size={24} color="black" />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});