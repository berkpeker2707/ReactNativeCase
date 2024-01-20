import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

import Search from "../../Search/Search";
import CheckBox from "../../Buttons/CheckBox";
import CheckBoxFilled from "../../Buttons/CheckBoxFilled";

const SortByModels = () => {
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
          Model
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: screenWidth,
          padding: screenWidth * 0.02,
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Search />
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
        <CheckBox />
        <View
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 300,
          }}
        >
          <Text>11</Text>
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
        <CheckBoxFilled />
        <View
          style={{
            color: "#000",
            textAlign: "center",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 300,
          }}
        >
          <Text>12 Pro</Text>
        </View>
      </View>
    </View>
  );
};

export default SortByModels;
