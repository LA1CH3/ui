import { StitchesVariants } from "@stitches/react";
import React from "react";

import { Column } from "../layout";
import { styled } from "../../styled";

export type OrderedListProps = Pick<StitchesVariants<typeof Column>, "gap"> & {
  children?: React.ReactNode;
};

const orderedListStyles = {
  fontFamily: "$primary",
  paddingLeft: "$medium",
  margin: 0,
  listStyleType: "numeric",
};

export const OrderedList = ({
  children,
  gap = "small",
  ...props
}: OrderedListProps): JSX.Element => (
  <Column as="ol" gap={gap} css={orderedListStyles} {...props}>
    {children}
  </Column>
);

export const OrderedListItem = styled("li", {});
