import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.setToggleModal(false)}
      style={{
        marginTop: screenHeight * 0.1,
        display: "flex",
        flexDirection: "row",
        width: screenWidth * 0.8,
        borderRadius: 4,
        padding: screenWidth * 0.02,
        backgroundColor: "#2A59FE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "#FFFFFF",
          textAlign: "center",
          fontSize: 18,
          fontStyle: "normal",
          fontWeight: 700,
        }}
      >
        Primary
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
