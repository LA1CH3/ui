import React from "react";

import { Anchor, Column, Row } from "../components";
import { darkTheme } from "../styled";

export default {
  title: "components/Anchor",
  component: Anchor,
};

export const Default = () => (
  <Anchor href="#">This is an anchor using default variants.</Anchor>
);

export const Colors = () => (
  <Row width="100%">
    <Column
      width="50%"
      height="250px"
      justify="center"
      align="center"
      fill="dark"
    >
      <div className={darkTheme}>
        <Anchor href="#">Dark Mode</Anchor>
      </div>
    </Column>
    <Column
      width="50%"
      height="250px"
      justify="center"
      align="center"
      fill="light"
    >
      <Anchor href="#">Light Mode</Anchor>
    </Column>
  </Row>
);
