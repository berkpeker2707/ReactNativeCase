import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CrossIcon() {
  return (
    <Svg width={22} height={22} fill="none" viewBox="0 0 22 22">
      <Path stroke="#000" d="M21 21L1 1m20 0L1 21" />
    </Svg>
  );
}

export default CrossIcon;
