import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Concets",
    img: "../Assets/football.jpeg",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Football",
    img: "../Assets/football.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Comedy",
    img: "../Assets/football.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Stadiums",
    img: "../Assets/football.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Theatre",
    img: "../Assets/football.jpeg",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Basketball",
    img: "../Assets/football.jpeg",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}

  >
    <Image source={require("../Assets/concerts.jpeg")} style={styles.img} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const BrowseByCategory = () => {
  const renderItem = ({ item }) => <Item title={item.title}   onPress={() => {console.log('title', title)}} />;

  return (
    <SafeAreaView style={styles.container}>
       
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 10,
    // marginVertical: 4,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 15,

  },
  img: {
    height: 40,
    width: 50,
    borderRadius:10,
    paddingTop: 0
  },
});

export default BrowseByCategory;
