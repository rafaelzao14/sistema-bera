import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";

import React from "react";
import { SvgCss } from "react-native-svg";

const AvatarFake = (avatarStyle) => {
  const Avatar = createAvatar(style, {
    // ... and other options
    seed: "red",
  });

  return (
    <SvgCss xml={Avatar} width="40%" height="50%" style={{ marginTop: 40 }} />
  );
};

export default AvatarFake;
