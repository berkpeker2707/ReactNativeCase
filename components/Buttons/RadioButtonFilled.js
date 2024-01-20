import * as React from "react";
import { View } from "react-native";

const RadioButtonFilled = () => {
  return (
    <View
      style={{
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#2A59FE",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 2,
      }}
    >
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 6,
          backgroundColor: "#2A59FE",
        }}
      />
    </View>
  );
};

export default RadioButtonFilled;
