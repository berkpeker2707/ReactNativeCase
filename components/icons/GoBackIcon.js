import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GoBackIcon(props) {
  return (
    <Svg width={26} height={24} viewBox="0 0 26 24" fill="none">
      <Path
        d="M12 22L2 12 12 2M3.389 12h20.278"
        stroke={props.color}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default GoBackIcon;
