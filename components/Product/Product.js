import * as React from "react";
import { SafeAreaView, FlatList, Dimensions } from "react-native";
import ProductItem from "./ProductItem";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Product = ({ data }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        width: screenWidth,
        marginBottom: screenHeight * 0.2,
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ProductItem image={item.image} price={item.price} name={item.name} />
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

export default Product;
