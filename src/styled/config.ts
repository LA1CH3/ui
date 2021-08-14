import { createCss } from "@stitches/react";

import { colors, fonts, fontSizes, fontWeights, radii, space } from "../tokens";

export const { config, styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors,
      fonts,
      fontSizes,
      fontWeights,
      radii,
      space,
    },
  });
