import * as React from "react";
import { View, Text } from "react-native";

import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: screenWidth,
        height: screenHeight * 0.07,
        paddingHorizontal: screenWidth * 0.05,

        alignItems: "center",
        flexGrow: 0,
        backgroundColor: "#2A59FE",
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 24,
          fontStyle: "normal",
          fontWeight: 800,
        }}
      >
        E-Market
      </Text>
    </View>
  );
};

export default Header;
