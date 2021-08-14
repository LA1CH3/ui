import React from "react";

import { Anchor, Column, Row } from "../components";

export default {
  title: "components/Anchor",
};

export const Default = () => (
  <Column padding="medium" justify="center" align="center">
    <Anchor href="#">This is an anchor using default variants.</Anchor>
  </Column>
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
      <Anchor color="light" href="#">
        Light
      </Anchor>
    </Column>
    <Column
      width="50%"
      height="250px"
      justify="center"
      align="center"
      fill="light"
    >
      <Anchor color="dark" href="#">
        Dark
      </Anchor>
    </Column>
  </Row>
);
