import React from "react";

import { Column, Row, Text, Box } from "../components";

export default {
  title: "components/Layout/Row",
};

export const Gap = () => (
  <Column width="100%" gap="medium" padding="medium">
    <Column width="100%" gap="small">
      <Text>{'gap="small"'}</Text>
      <Row gap="small">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Row>
    </Column>
    <Column width="100%" gap="small">
      <Text>{'gap="medium"'}</Text>
      <Row gap="medium">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Row>
    </Column>
    <Column width="100%" gap="small">
      <Text>{'gap="large"'}</Text>
      <Row gap="large">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Row>
    </Column>
    <Column width="100%" gap="small">
      <Text>{'gap="huge"'}</Text>
      <Row gap="huge">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Row>
    </Column>
    <Column width="100%" gap="small">
      <Text>{'gap="giant"'}</Text>
      <Row gap="giant">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Row>
    </Column>
  </Column>
);
