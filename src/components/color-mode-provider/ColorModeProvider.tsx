import React, { ReactNode, useEffect, useState } from "react";

import { ColorModeContext, ColorModeType } from "../../hooks";
import { darkTheme } from "../../styled";

export type ColorModeProviderProps = {
  mode?: ColorModeType;
  children: ReactNode;
};

const storageKey = "colorMode";

export const ColorModeProvider = ({
  mode,
  children,
}: ColorModeProviderProps): JSX.Element => {
  const [currentMode, setMode] = useState<ColorModeType>(mode ?? "light");

  useEffect(() => {
    if (window.localStorage.getItem(storageKey)) {
      setMode(window.localStorage.getItem(storageKey) as ColorModeType);
    }
  }, []);

  const setModeAndSave = (mode: ColorModeType) => {
    window.localStorage.setItem(storageKey, mode);

    setMode(mode);
  };

  const toggleMode = () => {
    if (currentMode === "light") {
      setModeAndSave("dark");
    } else {
      setModeAndSave("light");
    }
  };

  useEffect(() => {
    const hasModeInStorage = !!window.localStorage.getItem(storageKey);

    if (
      !mode &&
      !hasModeInStorage &&
      currentMode !== "dark" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setModeAndSave("dark");
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
