import * as React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
import { addToCart, removeFromCart } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-native-uuid";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  var totalPrices = cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  if (cart.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        width: screenWidth,
        backgroundColor: "background: rgba(255, 255, 255, 1)",
      }}
    >
      <View
        style={{
          width: screenWidth * 0.9,
          padding: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={cart}
          keyExtractor={() => uuid.v4()}
          renderItem={({ item }) => (
            <View
              style={{
                borderRadius: 4,
                backgroundColor: "#D9D9D9",
                padding: 5,
                margin: 5,
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#2A59FE",
                  fontSize: 13,
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                {item.price}$
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={{
          width: screenWidth * 0.9,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#2A59FE",
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Total:{" "}
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          {totalPrices}$
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
