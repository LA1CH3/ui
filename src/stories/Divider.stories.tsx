import React from "react";

import { Row, Column, Text, Divider } from "../components";
import { darkTheme } from "../styled";

export default {
  title: "components/Divider",
  component: Divider,
};

export const Default = () => (
  <Column gap="small">
    <Text>Above</Text>
    <Divider />
    <Text>Below</Text>
  </Column>
);

export const Colors = () => (
  <Row width="100%">
    <Column
      fill="dark"
      width="50%"
      height="250px"
      justify="center"
      align="center"
      padding="medium"
    >
      <div className={darkTheme} style={{ width: "100%", textAlign: "center" }}>
        <Text>Above</Text>
        <Divider />
        <Text>Below</Text>
      </div>
    </Column>
    <Column
      fill="light"
      width="50%"
      height="250px"
      justify="center"
      align="center"
      padding="medium"
    >
      <Text color="dark">Above</Text>
      <Divider color="dark" />
      <Text color="dark">Below</Text>
    </Column>
  </Row>
);
