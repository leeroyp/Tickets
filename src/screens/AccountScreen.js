import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile Screen </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Welcome, {this.props.navigation.getParam("username")}
        </Text>
        <Button
          title="Sign out"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  title:'Account',
  tabBarIcon:<MaterialIcons name="account-circle" size={24} color="black" />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});