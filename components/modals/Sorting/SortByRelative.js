import * as React from "react";
import { View, Text } from "react-native";

import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

import RadioButton from "../../Buttons/RadioButton";
import RadioButtonFilled from "../../Buttons/RadioButtonFilled";

const SortByRelative = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: screenWidth,
          paddingLeft: screenWidth * 0.1,
          padding: screenWidth * 0.02,
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            color: "rgba(51, 51, 51, 0.70)",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Sort By
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: screenWidth,
          paddingLeft: screenWidth * 0.1,
          padding: screenWidth * 0.02,
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <RadioButtonFilled />
        <View
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 300,
          }}
        >
          <Text>Old to new</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: screenWidth,
          paddingLeft: screenWidth * 0.1,
          padding: screenWidth * 0.02,
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <RadioButton />
        <View
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 300,
          }}
        >
          <Text>New to old</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: screenWidth,
          paddingLeft: screenWidth * 0.1,
          padding: screenWidth * 0.02,
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <RadioButton />
        <View
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 300,
          }}
        >
          <Text>Price high to low</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: screenWidth,
          paddingLeft: screenWidth * 0.1,
          padding: screenWidth * 0.02,
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <RadioButton />
        <View
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 300,
          }}
        >
          <Text>Price low to high</Text>
        </View>
      </View>
    </View>
  );
};

export default SortByRelative;
