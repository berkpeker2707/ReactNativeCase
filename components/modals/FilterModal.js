import * as React from "react";
import {
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { Dimensions } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

import SortByRelative from "./Sorting/SortByRelative";
import SortByBrands from "./Sorting/SortByBrands";
import SortByModels from "./Sorting/SortByModels";
import Divider from "../misc/Divider";
import PrimaryButton from "./PrimaryButton";

import CrossIcon from "../icons/CrossIcon";

const FilterModal = (props) => {
  const { toggleModal, setToggleModal } = props;
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={toggleModal}
        onRequestClose={() => {
          setToggleModal(false);
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              width: screenWidth * 0.8,
            }}
          >
            <TouchableOpacity onPress={() => setToggleModal(false)}>
              <CrossIcon />
            </TouchableOpacity>
            <Text
              style={{
                width: screenWidth * 0.4,
                color: "#000",
                textAlign: "right",
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: 300,
              }}
            >
              Filter
            </Text>
          </View>
          <View></View>
          <SortByRelative />
          <Divider />
          <SortByBrands />
          <Divider />
          <SortByModels />
          <PrimaryButton setToggleModal={setToggleModal} />
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default FilterModal;
