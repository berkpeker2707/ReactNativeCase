import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-1.406 6.008a7 7 0 111.559-1.27l4.054 4.055a1 1 0 01-1.414 1.414l-4.199-4.199z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-1.406 6.008a7 7 0 111.559-1.27l4.054 4.055a1 1 0 01-1.414 1.414l-4.199-4.199z"
        fill="#2A59FE"
        fillOpacity={0.3}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10a5 5 0 11-10 0 5 5 0 0110 0zm-1.406 6.008a7 7 0 111.559-1.27l4.054 4.055a1 1 0 01-1.414 1.414l-4.199-4.199z"
        fill="#fff"
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default SearchIcon;
