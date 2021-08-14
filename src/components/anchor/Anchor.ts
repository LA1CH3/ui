import { styled } from "../../styled";

export const Anchor = styled("a", {
  fontFamily: "$primary",
  fontWeight: "$semibold",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  variants: {
    color: {
      light: {
        color: "$teal20",
        "&:hover,&:focus": {
          color: "$teal40",
        },
        "&:active": {
          color: "$teal60",
        },
      },
      dark: {
        color: "$purple80",
        "&:hover,&:focus": {
          color: "$purple90",
        },
        "&:active": {
          color: "$purple100",
        },
      },
    },
  },
  defaultVariants: {
    color: "dark",
  },
});
