import { createCss } from "@stitches/react";

import { colors, fonts, fontSizes, space } from "../tokens";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors,
      fonts,
      fontSizes,
      space,
    },
  });
