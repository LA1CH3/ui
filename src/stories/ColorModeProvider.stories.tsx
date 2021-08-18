import React from "react";

import {
  ColorModeProvider,
  Button,
  Text,
  AppRoot,
  Column,
  Anchor,
} from "../components";
import { useColorMode } from "../hooks";

export default {
  title: "components/ColorModeProvider",
  component: ColorModeProvider,
};

const ChildExample = () => {
  const [colorMode, toggleColorMode] = useColorMode();

  const modeText = `You are currently viewing ${colorMode} mode.`;

  return (
    <AppRoot>
      <Column gap="medium" padding="medium">
        <Button onClick={toggleColorMode}>Toggle Mode</Button>
        <Text>{modeText}</Text>
        <Anchor>Here is an anchor.</Anchor>
      </Column>
    </AppRoot>
  );
};

export const Example = () => {
  return (
    <ColorModeProvider>
      <ChildExample />
    </ColorModeProvider>
  );
};
