import { create } from "zustand";

export const useThemeStore = create((set) => ({
  isDarkMode: localStorage.getItem("theme") === "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDarkMode ? "dark" : "light";

      localStorage.setItem("theme", newTheme);
      return { isDarkMode: !state.isDarkMode };
    }),
}));
