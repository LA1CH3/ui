import { styled } from "../../styled";

export const Anchor = styled("a", {
  fontFamily: "$primary",
  fontWeight: "$semibold",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
  color: "$interactive",
  transition: "$color",
  "&:hover,&:focus": {
    color: "$interactiveHover",
  },
  "&:active": {
    color: "$interactiveActive",
  },
});
