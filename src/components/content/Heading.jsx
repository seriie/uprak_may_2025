import { useTheme } from "../../context/ThemeContext";

export default function Heading({ subTitle, title, desc }) {
  const { theme } = useTheme();
  return (
    <div className="gap-2 flex flex-col">
      <h2 className="font-bold text-teal-500">{subTitle}</h2>
      <h1 className={`text-3xl font-bold ${theme === "dark" ? 'text-slate-100' : 'text-slate-800'}`}>{title}</h1>
      <p className={`${theme === "dark" ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
    </div>
  );
}