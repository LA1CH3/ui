import { createContext, useContext } from "react";

export type ColorModeType = "light" | "dark";

export const ColorModeContext = createContext<[ColorModeType, () => void]>([
  "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
]);

export const useColorMode = () => {
  return useContext(ColorModeContext);
};
