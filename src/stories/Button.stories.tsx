import React from "react";

import { Column, Row, Button } from "../components";
import { darkTheme } from "../styled";

export default {
  title: "components/Button",
  component: Button,
};

export const Default = () => <Button>Default</Button>;

export const Colors = () => (
  <Row width="100%">
    <Column
      width="50%"
      height="250px"
      fill="dark"
      align="center"
      justify="center"
    >
      <div className={darkTheme}>
        <Button>Dark Mode</Button>
      </div>
    </Column>
    <Column
      width="50%"
      height="250px"
      fill="light"
      align="center"
      justify="center"
    >
      <Button>Light Mode</Button>
    </Column>
  </Row>
);

export const Ghost = () => (
  <Row width="100%">
    <Column
      width="50%"
      height="250px"
      fill="dark"
      align="center"
      justify="center"
    >
      <div className={darkTheme}>
        <Button ghost>Dark Mode (Ghost)</Button>
      </div>
    </Column>
    <Column
      width="50%"
      height="250px"
      fill="light"
      align="center"
      justify="center"
    >
      <Button ghost>Light Mode (Ghost)</Button>
    </Column>
  </Row>
);
