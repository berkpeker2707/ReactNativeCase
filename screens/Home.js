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
      <Search />
      <Filter
        toggleModal={props.toggleModal}
        setToggleModal={props.setToggleModal}
      />
      <Product data={props.data} />
    </View>
  );
};

export default Home;
