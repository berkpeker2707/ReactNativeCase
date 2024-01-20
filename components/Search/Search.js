import * as React from "react";
import { View, TextInput } from "react-native";
import SearchIcon from "../icons/SearchIcon";
import { Dimensions } from "react-native";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const Search = ({ onSearch }) => {
  const handleSearch = (text) => {
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View
      style={{
        display: "flex",
        width: screenWidth * 0.9,
        height: screenHeight * 0.05,

        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",

        gap: 10,
        marginTop: screenHeight * 0.01,

        borderRadius: 8,
        backgroundColor: "rgb(250,250,251)",
      }}
    >
      <View>
        <SearchIcon />
      </View>
      <View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="rgb(98,107,139)"
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

export default Search;
