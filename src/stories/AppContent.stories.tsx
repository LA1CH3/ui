import React from "react";

import { AppRoot, AppContent, Row, Text } from "../components";

export default {
  title: "components/AppContent",
};

export const Default = () => (
  <AppRoot>
    <Row padding="medium" fill="dark" width="100%">
      <Text color="light" size="large">
        Header
      </Text>
    </Row>
    <AppContent>
      <Text>AppContent</Text>
    </AppContent>
    <Row padding="medium" fill="dark" width="100%">
      <Text color="light" size="large">
        Footer
      </Text>
    </Row>
  </AppRoot>
);
