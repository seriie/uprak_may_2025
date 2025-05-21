import { useTheme } from "../../context/ThemeContext";

export default function CategoryCard({ item }) {
  const { theme } = useTheme();
  
  return (
    <div
      className={`rounded-xl cursor-pointer w-full md:w-80 ${theme === "dark" ? 'bg-slate-800/30 border-slate-700' : 'bg-slate-200/30 border-slate-300'} backdrop-blur-lg p-6 flex flex-col gap-3 border hover:scale-[1.03] hover:border-teal-400 transition-all duration-300 shadow-lg`}
    >
      <div
        className={`p-3 w-12 h-12 rounded-xl ${item.iconColor} flex items-center justify-center shadow-md`}
      >
        <img src={item.icon} alt={item.title} className="w-6 h-6" />
      </div>
      <h1 className={`${theme === "dark" ? 'text-slate-100' : 'text-slate-800'} font-semibold text-xl`}>{item.title}</h1>
      <p className={`${theme === "dark" ? 'text-slate-100' : 'text-slate-800'} leading-relaxed`}>
        {item.description}
      </p>
    </div>
  );
}
