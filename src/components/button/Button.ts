import { styled } from "../../styled";

export const Button = styled("button", {
  appearance: "none",
  outline: "none",
  border: 0,
  cursor: "pointer",
  minWidth: "7rem",
  fontFamily: "$primary",
  fontSize: "$baseline",
  fontWeight: "$semibold",
  padding: "$small",
  borderRadius: "$small",
  backgroundColor: "$interactive",
  color: "$textPrimaryInverted",
  transition: "$allColors",
  "&:hover,&:focus": {
    backgroundColor: "$interactiveHover",
  },
  variants: {
    ghost: {
      true: {
        backgroundColor: "transparent",
        border: "2px solid $interactive",
        color: "$interactive",
        "&:hover,&:focus": {
          backgroundColor: "transparent",
          color: "$interactiveHover",
          borderColor: "$interactiveHover",
        },
      },
      false: {},
    },
  },
});
