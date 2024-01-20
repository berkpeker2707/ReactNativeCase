import * as React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header/Header";
import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-native-uuid";
import handleAddToCart from "../hooks/handleAddToCart";
import handleRemoveFromCart from "../hooks/handleRemoveFromCart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  var totalPrices = cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Your cart is empty.</Text>
        </View>
      </>
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
      <Header />
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
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
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                }}
              >
                <TouchableOpacity
                  style={{ backgroundColor: "#F3F4F6" }}
                  onPress={() => {
                    handleAddToCart(
                      item.id,
                      item.image,
                      item.price,
                      item.name,
                      dispatch
                    );
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: 14,
                      fontStyle: "normal",
                      fontWeight: 700,
                      margin: 10,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ backgroundColor: "#F3F4F6" }}
                  onPress={() => {
                    handleRemoveFromCart(item.id, dispatch);
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: 14,
                      fontStyle: "normal",
                      fontWeight: 700,
                      margin: 10,
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
              </View>
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
