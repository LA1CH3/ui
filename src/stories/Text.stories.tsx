import { ComponentMeta } from "@storybook/react";
import React from "react";

import { Text, Column, Row } from "../components";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default = () => (
  <Text>This is some text using default variants.</Text>
);

export const Sizes = () => (
  <Column width={"100%"} gap="large">
    <Text size="small">Small</Text>
    <Text size="baseline">Baseline</Text>
    <Text size="large">Large</Text>
    <Text size="huge">Huge</Text>
    <Text size="giant">Giant</Text>
  </Column>
);

export const Weights = () => (
  <Column width={"100%"} gap="large">
    <Text weight="light">Light</Text>
    <Text weight="baseline">Baseline</Text>
    <Text weight="semibold">Semibold</Text>
    <Text weight="bold">Bold</Text>
    <Text weight="heavy">Heavy</Text>
  </Column>
);

export const Colors = () => (
  <Row width="100%">
    <Column
      fill="dark"
      width="50%"
      height="250px"
      align="center"
      justify="center"
    >
      <Text color="light">Light</Text>
    </Column>
    <Column
      width="50%"
      fill="light"
      height="250px"
      align="center"
      justify="center"
    >
      <Text color="dark">Dark</Text>
    </Column>
  </Row>
);
