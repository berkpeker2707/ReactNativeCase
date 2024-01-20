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

const Product = ({ data, onFilter }) => {
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = React.useState(data);

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

  React.useEffect(() => {
    setFilteredData(data);
  }, [data]);

  React.useEffect(() => {
    setFilteredData(onFilter(data));
  }, [onFilter, data]);

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
        data={filteredData}
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
