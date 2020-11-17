import React from "react";
import { View, FlatList } from "react-native";
import { withNavigation } from "react-navigation";
import BrowseScreenDisplay from "../components/BrowseScreenDisplay";

const BrowseList = ({suggestions}) => {
  return (
    <View>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={suggestions}
        keyExtractor={(suggestions) => suggestions.id}
        renderItem={({ item }) => {
          return (
            <>
              <BrowseScreenDisplay suggest={item} />
            </>
          );
        }}
      />
    </View>
  );
};



export default withNavigation(BrowseList);
