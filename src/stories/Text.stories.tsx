import React from "react";

import { Text, Column } from "../components";

export default {
  title: "Components/Text",
  component: Text,
};

export const Sizes = () => (
  <Column gap="large">
    <Text size="small">Small</Text>
    <Text size="baseline">Baseline</Text>
    <Text size="large">Large</Text>
  </Column>
);
