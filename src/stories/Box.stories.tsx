import React from "react";

import { Box, Column, Row, Text } from "../components";

export default {
  title: "components/Box",
};

export const Fill = () => (
  <Row width="100%">
    <Column
      fill="dark"
      width="50%"
      height="250px"
      justify="center"
      align="center"
    >
      <Box padding="medium" fill="light">
        <Text>Light</Text>
      </Box>
    </Column>
    <Column
      fill="light"
      width="50%"
      height="250px"
      justify="center"
      align="center"
    >
      <Box padding="medium" fill="dark">
        <Text color="light">Dark</Text>
      </Box>
    </Column>
  </Row>
);

export const Padding = () => (
  <Column width="100%" gap="medium">
    <Column gap="small">
      <Text>{'padding="small"'}</Text>
      <Box fill="dark" padding="small"></Box>
    </Column>
    <Column gap="small">
      <Text>{'padding="medium"'}</Text>
      <Box fill="dark" padding="medium"></Box>
    </Column>
    <Column gap="small">
      <Text>{'padding="large"'}</Text>
      <Box fill="dark" padding="large"></Box>
    </Column>
    <Column gap="small">
      <Text>{'padding="huge"'}</Text>
      <Box fill="dark" padding="huge"></Box>
    </Column>
    <Column gap="small">
      <Text>{'padding="giant"'}</Text>
      <Box fill="dark" padding="giant"></Box>
    </Column>
  </Column>
);
