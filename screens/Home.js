import * as React from "react";
import { View } from "react-native";
import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Filter from "../components/Search/Filter";
import Product from "../components/Product/Product";

const Home = (props) => {
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filterProducts = (data) => {
    return data.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
        backgroundColor: "background: rgba(255, 255, 255, 1)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Header />
      <Search onSearch={handleSearch} />
      <Filter
        toggleModal={props.toggleModal}
        setToggleModal={props.setToggleModal}
      />
      <Product data={props.data} onFilter={filterProducts} />
    </View>
  );
};

export default Home;
