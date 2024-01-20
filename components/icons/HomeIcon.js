import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon() {
  return (
    <Svg width={35} height={32} fill="none" viewBox="0 0 35 32">
      <Path fill="#fff" d="M1 1h32.309v30H1z" />
      <Path
        stroke="#000"
        d="M4.462 12.826v17.02A1.154 1.154 0 005.616 31h6.923v-9.808a1.73 1.73 0 011.731-1.73h5.77a1.73 1.73 0 011.73 1.73V31h6.924a1.154 1.154 0 001.154-1.154v-17.02"
      />
      <Path
        stroke="#000"
        d="M33.309 16L17.939 1.286c-.36-.38-1.203-.385-1.57 0L1 16m26.54-5.554V2.153h-3.462v4.976"
      />
    </Svg>
  );
}

export default HomeIcon;
