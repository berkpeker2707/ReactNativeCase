import * as React from "react";
import { Text, FlatList, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
import { useSelector } from "react-redux";

import ProductItem from "../components/Product/ProductItem";

const Favourite = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        width: screenWidth,
        marginBottom: screenHeight * 0.2,
      }}
    >
      <Text
        style={{
          width: screenWidth,
          padding: 10,
          paddingLeft: screenWidth * 0.4,
          color: "#000",
          textAlign: "left",
          fontSize: 20,
          fontStyle: "normal",
          fontWeight: 300,
        }}
      >
        Favorites
      </Text>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <ProductItem
            id={item.id}
            image={item.image}
            price={item.price}
            name={item.name}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      />
    </SafeAreaView>
  );
};

export default Favourite;
