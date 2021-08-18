import { styled } from "../../styled";

export const Text = styled("div", {
  fontFamily: "$primary",
  color: "$textPrimary",
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
    size: "baseline",
  },
});
