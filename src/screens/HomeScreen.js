import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import SearchBar from "../components/SearchBar";
import useEvents from "../hooks/useEvents";
import ResultsList from "../components/ResultsList";
import ModalDisplay from "../components/ModalDisplay";
import { FlatListSlider } from "react-native-flatlist-slider";
import { FontAwesome } from "@expo/vector-icons";
import CategoryList from "../components/CategoryList";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useEvents();

  // console.log (results._embedded.attractions[0].classifications[0].segment.name)
  const filterResultsBySegment = (segment) => {
    return results.filter((result) => {
      return (
        result._embedded.attractions[0].classifications[0].segment.name ===
        segment
      );
    });
  };
  const images = [
    {
      image: "https://sport.one/content/images/2018/01/2222-18.jpg",
      desc: "image one",
    },
    {
      image:
        "https://i.insider.com/5e45b2783b62b778762710a4?width=1100&format=jpeg&auto=webp",
      desc: "image two",
    },
    {
      image:
        "https://res.cloudinary.com/simpleview/image/upload/v1502135153/clients/raleigh/165_3_0333_jpeg_c22ffa95-df55-4156-a8ac-66ed0d6c2512.jpg",
      desc: "image three",
    },
    {
      image:
        "https://themayfieldseamer.co.uk/media/com_eventbooking/images/thumbs/comedy1.jpg",
      desc: "image four",
    },
  ];

  return (
    <SafeAreaView>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      
      <ScrollView>
        <FlatListSlider
          data={images}
          height={200}
          indicatorContainerStyle={{ position: "absolute", bottom: 20 }}
          indicatorActiveColor={"#8e44ad"}
          indicatorInActiveColor={"#ffffff"}
        />
        <CategoryList
        />
        <ResultsList
          style={styles.resultView}
          results={results}
         
        />
       
      </ScrollView>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = {
  title: "Home",
  tabBarIcon: <FontAwesome name="home" size={24} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalDisplay: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  resultView: {
    paddingBottom: 15,
  },
});

export default HomeScreen ;
