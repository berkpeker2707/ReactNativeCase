import * as React from "react";
import { View, Text } from "react-native";

const CheckBoxFilled = () => {
  return (
    <View
      style={{
        height: 20,
        width: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#2A59FE",
        backgroundColor: "#2A59FE",
        width: 16,
        height: 16,
        justifyContent: "center",
        alignContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          width: 18,
          height: 18,
          color: "#ffffff",
          textAlign: "center",
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: 800,
        }}
      >
        ✓
      </Text>
    </View>
  );
};

export default CheckBoxFilled;
