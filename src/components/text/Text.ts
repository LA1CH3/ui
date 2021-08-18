import { styled } from "../../styled";

export const Text = styled("div", {
  fontFamily: "$primary",
  variants: {
    size: {
      small: {
        fontSize: "$small",
        lineHeight: "$small",
      },
      baseline: {
        fontSize: "$baseline",
        lineHeight: "$baseline",
      },
      large: {
        fontSize: "$large",
        lineHeight: "$large",
      },
      huge: {
        fontSize: "$huge",
        lineHeight: "$huge",
      },
      giant: {
        fontSize: "$giant",
        lineHeight: "$huge",
      },
    },
    color: {
      dark: {
        color: "$ink100",
      },
      light: {
        color: "$ink0",
      },
    },
    weight: {
      light: {
        fontWeight: "$light",
      },
      baseline: {
        fontWeight: "$baseline",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
      heavy: {
        fontWeight: "$heavy",
      },
    },
  },
  defaultVariants: {
    color: "dark",
    size: "baseline",
  },
});
