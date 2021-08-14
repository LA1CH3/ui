import { StitchesVariants } from "@stitches/react";
import React from "react";

import { Column } from "../layout";
import { styled } from "../../styled";

export type UnorderedListProps = Pick<
  StitchesVariants<typeof Column>,
  "gap"
> & {
  children?: React.ReactNode;
};

const unorderedListStyles = {
  fontFamily: "$primary",
  paddingLeft: "$medium",
  margin: 0,
  listStyleType: "disc",
};

export const UnorderedList = ({
  children,
  gap = "small",
  ...props
}: UnorderedListProps): JSX.Element => (
  <Column as="ul" gap={gap} css={unorderedListStyles} {...props}>
    {children}
  </Column>
);

export const UnorderedListItem = styled("li", {});
