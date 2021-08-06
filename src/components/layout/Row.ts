import { styled } from "../../styled";
import { Flex } from "./Flex";

export const Row = styled(Flex, {
  variants: {
    padding: {
      small: {
        padding: "$small",
      },
      medium: {
        padding: "$medium",
      },
      large: {
        padding: "$large",
      },
      huge: {
        padding: "$huge",
      },
      giant: {
        padding: "$giant",
      },
    },
  },
});

Row.defaultProps = {
  direction: "row",
};
