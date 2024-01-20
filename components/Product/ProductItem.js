import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import Star from "../icons/Star";

import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const ProductItem = ({ image, price, name }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,

        padding: screenWidth * 0.02,
        width: screenWidth * 0.45,
        height: screenHeight * 0.33,

        marginBottom: screenWidth * 0.02,

        backgroundColor: "rgb(250,250,251)",
      }}
    >
      <View
        style={{
          alignItems: "center",
          paddingBottom: screenWidth * 0.02,
        }}
      >
        <Image
          style={{ width: screenWidth * 0.4, height: screenWidth * 0.4 }}
          source={{
            uri: image,
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: 5,
          }}
        >
          {/* <Star color={"#D9D9D9"} /> */}
          <Star color={"#FFB800"} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          paddingBottom: screenWidth * 0.01,
          paddingLeft: screenWidth * 0.02,
          paddingRight: screenWidth * 0.02,
        }}
      >
        <Text
          style={{
            color: "#2A59FE",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          {price}$
        </Text>
      </View>
      <View
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          paddingBottom: screenWidth * 0.01,
          paddingLeft: screenWidth * 0.02,
          paddingRight: screenWidth * 0.02,
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          {name}
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
  );
};

export default ProductItem;
