import * as React from "react";
import Svg, { Path } from "react-native-svg";

function StarIcon() {
  return (
    <Svg width={35} height={32} fill="none" viewBox="0 0 35 32">
      <Path
        stroke="#000"
        d="M33.762 12.539H21.358L17.608 1l-3.75 11.539H1.454l10.096 6.923L7.656 31l9.952-7.212L27.56 31l-3.894-11.538 10.096-6.923z"
      />
    </Svg>
  );
}

export default StarIcon;
