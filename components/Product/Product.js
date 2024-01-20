import * as React from "react";
import {
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

import ProductItem from "./ProductItem";

const Product = ({ data }) => {
  const navigation = useNavigation();

  const handleProductPress = (
    productId,
    productImage,
    productPrice,
    productName,
    productDescription
  ) => {
    navigation.navigate("ProductDetails", {
      productId,
      productImage,
      productPrice,
      productName,
      productDescription,
    });
  };

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
          <TouchableOpacity
            onPress={() =>
              handleProductPress(
                item.id,
                item.image,
                item.price,
                item.name,
                item.description
              )
            }
          >
            <ProductItem
              id={item.id}
              image={item.image}
              price={item.price}
              name={item.name}
              description={item.description}
            />
          </TouchableOpacity>
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
