import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CartIcon() {
  return (
    <Svg width={37} height={32} fill="none" viewBox="0 0 37 32">
      <Path
        stroke="#000"
        d="M2.983 11.506a1.673 1.673 0 00-1.674 1.658c-.002.153.02.306.065.452l4.244 14.963A3.32 3.32 0 008.828 31h19.107a3.356 3.356 0 003.226-2.421l4.243-14.963.05-.452a1.673 1.673 0 00-1.675-1.658H2.983zm15.868 13.139a3.453 3.453 0 113.47-3.453 3.47 3.47 0 01-3.47 3.453v0z"
      />
      <Path stroke="#000" d="M10.502 11.506L18.382 1l7.88 10.506" />
    </Svg>
  );
}

export default CartIcon;
