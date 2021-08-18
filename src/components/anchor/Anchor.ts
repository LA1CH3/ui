import { styled } from "../../styled";

export const Anchor = styled("a", {
  fontFamily: "$primary",
  fontWeight: "$semibold",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  color: "$interactive",
  "&:hover,&:focus": {
    color: "$interactiveHover",
  },
  "&:active": {
    color: "$interactiveActive",
  },
});
