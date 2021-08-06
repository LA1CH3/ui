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
  },
  defaultVariants: {
    color: "dark",
    size: "baseline",
  },
});
