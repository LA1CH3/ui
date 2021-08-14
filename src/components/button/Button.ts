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
  variants: {
    color: {
      light: {
        backgroundColor: "$teal20",
        color: "$ink100",
        "&:hover, &:focus": {
          backgroundColor: "$teal40",
        },
      },
      dark: {
        backgroundColor: "$purple80",
        color: "$ink0",
        "&:hover, &:focus": {
          backgroundColor: "$purple90",
        },
      },
    },
  },
  defaultVariants: {
    color: "dark",
  },
});
