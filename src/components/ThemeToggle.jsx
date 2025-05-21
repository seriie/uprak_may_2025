import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState(
    theme === "dark" ? <FaMoon /> : <IoMdSunny />
  );

  useEffect(() => {
    setThemeIcon(theme === "dark" ? <FaMoon className="text-slate-100" /> : <IoMdSunny className="text-slate-100" />);
  }, [theme]);

  const handleClick = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={handleClick}
      className={`triggered-hover p-2 rounded-full cursor-pointer ${
        "focus:outline-teal-500"
      } hover:bg-teal-500 ${
        theme === "dark" ? "bg-teal-400" : "bg-teal-700"
      }`}
    >
      {themeIcon}
    </button>
  );
}