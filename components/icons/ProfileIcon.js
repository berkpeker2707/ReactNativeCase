import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ProfileIcon() {
  return (
    <Svg width={31} height={32} fill="none" viewBox="0 0 31 32">
      <Path
        stroke="#000"
        d="M21.954 7.923c-.283 3.813-3.173 6.923-6.346 6.923s-6.069-3.11-6.346-6.923C8.973 3.957 11.786 1 15.608 1s6.634 3.029 6.346 6.923zM15.608 19.461c-6.274 0-12.642 3.462-13.82 9.996C1.646 30.244 2.09 31 2.916 31H28.3c.825 0 1.271-.756 1.129-1.543-1.18-6.534-7.547-9.996-13.821-9.996v0z"
      />
    </Svg>
  );
}

export default ProfileIcon;
