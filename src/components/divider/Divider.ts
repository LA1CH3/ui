import { styled } from "../../styled";

export const Divider = styled("hr", {
  width: "100%",
  borderStyle: "none",
  height: "2px",
  variants: {
    color: {
      light: {
        backgroundColor: "$ink0",
      },
      dark: {
        backgroundColor: "$ink100",
      },
    },
  },
  defaultVariants: {
    color: "dark",
  },
});
