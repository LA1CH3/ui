import { StitchesVariants } from "@stitches/react";
import { HeightProperty, WidthProperty } from "@stitches/react/types/css-types";
import React, { ReactNode } from "react";
import { styled } from "../../styled";

export const BoxComponent = styled("div", {
  borderRadius: "$small",
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
    fill: {
      dark: {
        backgroundColor: "$ink100",
      },
      light: {
        backgroundColor: "$ink0",
      },
    },
    bordered: {
      true: {
        $$borderColor: "transparent",
        border: "2px solid $$borderColor",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      fill: "light",
      bordered: true,
      css: {
        $$borderColor: "$colors-ink100",
      },
    },
    {
      fill: "dark",
      bordered: true,
      css: {
        $$borderColor: "$colors-ink0",
      },
    },
  ],
});

export type BoxProps = {
  width?: WidthProperty<number>;
  height?: HeightProperty<number>;
  children?: ReactNode;
} & StitchesVariants<typeof BoxComponent>;

export const Box = ({
  bordered,
  width,
  height,
  padding,
  fill,
  children,
  ...props
}: BoxProps): JSX.Element => (
  <BoxComponent
    bordered={bordered}
    padding={padding}
    fill={fill}
    css={{ width, height }}
    {...props}
  >
    {children}
  </BoxComponent>
);
