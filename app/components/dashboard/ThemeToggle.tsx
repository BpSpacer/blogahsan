"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-8 h-8 flex items-center justify-center"
    >
      <Sun
        className={`h-5 w-5 transition-transform duration-300 ${
          isDark ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-transform duration-300 ${
          isDark ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />
    </button>
  );
}
