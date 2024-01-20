import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Dimensions } from "react-native";
import FilterModal from "../modals/FilterModal";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

const Filter = ({ toggleModal, setToggleModal }) => {
  return (
    <>
      <FilterModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
      <View
        style={{
          width: screenWidth * 0.9,
          height: screenHeight * 0.05,

          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

          gap: screenWidth * 0.4,
          marginTop: screenHeight * 0.01,
        }}
      >
        <View>
          <Text
            style={{
              color: "#000",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            Filters:
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#D9D9D9",
            width: screenWidth * 0.3,
            height: "70%",

            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setToggleModal(true);
          }}
        >
          <Text>Select Filter</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Filter;
