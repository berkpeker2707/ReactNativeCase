import * as React from "react";
import { View } from "react-native";

import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const Divider = () => {
  return (
    <View
      style={{
        width: screenWidth * 0.8,
        marginTop: screenWidth * 0.05,
        marginBottom: screenWidth * 0.05,
        padding: screenWidth * 0.02,
        borderBottomColor: "#000000",
        borderBottomWidth: 0.5,
      }}
    />
  );
};

export default Divider;
