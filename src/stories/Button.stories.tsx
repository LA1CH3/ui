import React from "react";

import { Column, Row, Button } from "../components";

export default {
  title: "components/Button",
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
      <Button color="light">Light</Button>
    </Column>
    <Column
      width="50%"
      height="250px"
      fill="light"
      align="center"
      justify="center"
    >
      <Button color="dark">Dark</Button>
    </Column>
  </Row>
);
