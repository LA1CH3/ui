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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && window.localStorage.getItem(storageKey)) {
      setMode(window.localStorage.getItem(storageKey) as ColorModeType);
    }
  }, [mounted]);

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
      mounted &&
      !mode &&
      !hasModeInStorage &&
      currentMode !== "dark" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setModeAndSave("dark");
    }
  }, [mounted]);

  const state: [ColorModeType, () => void] = [currentMode, toggleMode];

  return (
    <ColorModeContext.Provider value={state}>
      <div
        className={currentMode === "dark" ? darkTheme : undefined}
        style={{ visibility: !mounted ? "hidden" : "visible" }}
      >
        {children}
      </div>
    </ColorModeContext.Provider>
  );
};
