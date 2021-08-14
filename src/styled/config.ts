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
    media: {
      small: "(min-width: 400px)",
      medium: "(min-width: 768px)",
      large: "(min-width: 1024px)",
    },
  });
