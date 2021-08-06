import { styled } from "../../styled";

export const Flex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
    gap: {
      small: {
        gap: "$small",
      },
      medium: {
        gap: "$medium",
      },
      large: {
        gap: "$large",
      },
      huge: {
        gap: "$huge",
      },
      giant: {
        gap: "$giant",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
      stretch: {
        justifyContent: "stretch",
      },
    },
    align: {
      start: {
        alignItems: "start",
      },
      end: {
        alignItems: "end",
      },
      center: {
        alignItems: "center",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    wrap: {
      wrap: {
        flexWrap: "wrap",
      },
      nowrap: {
        flexWrap: "nowrap",
      },
    },
  },
});
