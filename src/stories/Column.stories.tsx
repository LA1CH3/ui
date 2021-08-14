import React from "react";

import { Column, Row, Text, Box } from "../components";

export default {
  title: "components/Layout/Column",
};

export const Gap = () => (
  <Row width="100%" gap="medium" padding="medium">
    <Column gap="small">
      <Text>{'gap="small"'}</Text>
      <Column gap="small">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Column>
    </Column>
    <Column gap="small">
      <Text>{'gap="medium"'}</Text>
      <Column gap="medium">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Column>
    </Column>
    <Column gap="small">
      <Text>{'gap="large"'}</Text>
      <Column gap="large">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Column>
    </Column>
    <Column gap="small">
      <Text>{'gap="huge"'}</Text>
      <Column gap="huge">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Column>
    </Column>
    <Column gap="small">
      <Text>{'gap="giant"'}</Text>
      <Column gap="giant">
        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={i} padding="small" fill="dark"></Box>
        ))}
      </Column>
    </Column>
  </Row>
);
