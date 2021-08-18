import { createCss } from "@stitches/react";

import {
  colors,
  colorsDarkTheme,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  media,
  radii,
  space,
} from "../tokens";

export const { config, styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors,
      fonts,
      fontSizes,
      fontWeights,
      lineHeights,
      radii,
      space,
    },
    media,
  });

export const darkTheme = theme({
  colors: colorsDarkTheme,
});
