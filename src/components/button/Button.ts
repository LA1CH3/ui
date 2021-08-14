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
    ghost: {
      true: {
        $$ghostColor: "transparent",
        $$ghostColorInteractive: "transparent",
        backgroundColor: "transparent",
        border: "2px solid $$ghostColor",
        color: "$$ghostColor",
        "&:hover,&:focus": {
          backgroundColor: "transparent",
          color: "$$ghostColorInteractive",
          borderColor: "$$ghostColorInteractive",
        },
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      color: "light",
      ghost: true,
      css: {
        $$ghostColor: "$colors-teal20",
        $$ghostColorInteractive: "$colors-teal40",
      },
    },
    {
      color: "dark",
      ghost: true,
      css: {
        $$ghostColor: "$colors-purple80",
        $$ghostColorInteractive: "$colors-purple90",
      },
    },
  ],
  defaultVariants: {
    color: "dark",
    ghost: false,
  },
});
