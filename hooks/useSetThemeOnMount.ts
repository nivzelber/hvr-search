import { useEffect } from "react";

import { Themes, useThemeStore } from "../store/themeStore";

export const useSetThemeOnMount = (theme: Themes) => {
  const setTheme = useThemeStore(state => state.setTheme);

  useEffect(() => {
    setTheme(theme);
  }, []);
};
