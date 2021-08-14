import { styled } from "../../styled";

export const Text = styled("div", {
  fontFamily: "$primary",
  variants: {
    size: {
      small: {
        fontSize: "$small",
      },
      baseline: {
        fontSize: "$baseline",
      },
      large: {
        fontSize: "$large",
      },
      huge: {
        fontSize: "$huge",
      },
      giant: {
        fontSize: "$giant",
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
