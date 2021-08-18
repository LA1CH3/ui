import React, { ReactNode, useEffect, useState } from "react";

import { ColorModeContext, ColorModeType } from "../../hooks";
import { darkTheme } from "../../styled";

export type ColorModeProviderProps = {
  mode?: ColorModeType;
  children: ReactNode;
};

export const ColorModeProvider = ({
  mode,
  children,
}: ColorModeProviderProps): JSX.Element => {
  const [currentMode, setMode] = useState<ColorModeType>(mode ?? "light");

  const toggleMode = () => {
    if (currentMode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    if (
      !mode &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setMode("dark");
    }
  }, []);

  const state: [ColorModeType, () => void] = [currentMode, toggleMode];

  return (
    <ColorModeContext.Provider value={state}>
      <div className={currentMode === "dark" ? darkTheme : undefined}>
        {children}
      </div>
    </ColorModeContext.Provider>
  );
};
