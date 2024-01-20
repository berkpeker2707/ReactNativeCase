import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
import Star from "../components/icons/Star";
import GoBackIcon from "../components/icons/GoBackIcon";
import { useDispatch, useSelector } from "react-redux";
import handleAddToCart from "../hooks/handleAddToCart";
import handleToggleFavorites from "../hooks/handleToggleFavorites";

const ProductDetails = (props) => {
  const {
    productId,
    productImage,
    productPrice,
    productName,
    productDescription,
  } = props.route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  return (
    <ScrollView>
      <View
        style={{
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "background: rgba(255, 255, 255, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: screenWidth * 0.9,
            paddingBottom: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <GoBackIcon color={"#000"} />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: screenWidth * 0.9,
            height: screenHeight * 0.9,
            backgroundColor: "background: rgba(255, 255, 255, 1)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingBottom: screenWidth * 0.02,
            }}
          >
            <Image
              style={{ width: screenWidth * 0.9, height: screenWidth * 0.8 }}
              source={{
                uri: productImage,
              }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onPress={() =>
                handleToggleFavorites(
                  productId,
                  productImage,
                  productPrice,
                  productName,
                  productDescription,
                  favorites,
                  dispatch
                )
              }
            >
              {/* <Star color={"#D9D9D9"} /> */}
              <Star color={"#FFB800"} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              alignItems: "flex-start",
              justifyContent: "center",
              width: screenWidth * 0.8,
              paddingBottom: screenWidth * 0.01,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 800,
              }}
            >
              {productName}
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              {productDescription}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#2A59FE",
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                Price: {productPrice}$
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2A59FE",
                borderRadius: 4,
                padding: screenWidth * 0.02,
              }}
              onPress={() =>
                handleAddToCart(
                  productId,
                  productImage,
                  productPrice,
                  productName,
                  dispatch
                )
              }
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: "400",
                }}
              >
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
