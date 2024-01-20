import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Star(props) {
  return (
    <Svg width={24} height={22} fill="none" viewBox="0 0 24 22">
      <Path
        fill={props.color}
        d="M12 0l2.694 8.292h8.719l-7.054 5.124 2.694 8.292L12 16.584l-7.053 5.124 2.694-8.292L.587 8.292h8.719L12 0z"
      />
    </Svg>
  );
}

export default Star;
