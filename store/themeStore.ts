import { Theme } from "@emotion/react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { blueTheme, yellowTheme } from "../styles/setup/theme";

export type Themes = "blue" | "yellow";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Themes) => void;
}

/**
 * useThemeStore().theme should only be used once, above ThemeProvider in the component tree.
 * All other usages should come from mui's useTheme
 */
//

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      set => ({
        theme: blueTheme,
        setTheme: theme => {
          switch (theme) {
            case "blue":
              return set(_state => ({ theme: blueTheme }));
            case "yellow":
              return set(_state => ({ theme: yellowTheme }));
            default:
              throw new Error("No theme found!");
          }
        }
      }),
      {
        name: "theme"
      }
    )
  )
);
