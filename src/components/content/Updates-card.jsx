import { useTheme } from "../../context/ThemeContext";

export default function UpdateCard({ item }) {
  const { theme } = useTheme();

  return (
    <div
      key={item.id}
      className={`flex cursor-pointer flex-col w-lg gap-3 rounded-xl border ${theme === "dark" ? 'bg-slate-700/30 border-slate-800' : 'bg-slate-300/30 border-slate-200'} backdrop-blur-lg p-6 shadow-md hover:scale-[1.02] hover:border-teal-400 transition-all duration-300`}
    >
      <h1 className={`${theme === "dark" ? 'text-slate-100' : 'text-slate-800'} font-bold text-2xl`}>{item.title}</h1>
      <p className={`${theme === "dark" ? 'text-slate-300' : 'text-slate-700'} text-base leading-relaxed`}>{item.body}</p>
    </div>
  );
}
