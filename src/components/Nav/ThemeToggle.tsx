"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={"text-white cursor-pointer sm:mr-3 mt-3 sm:mt-0"}>
      {theme === "light" ? (
        <MoonIcon onClick={() => setTheme("dark")} height={25} width={25} />
      ) : (
        <SunIcon onClick={() => setTheme("light")} height={25} width={25} />
      )}
    </div>
  );
};

export default ThemeToggle;
