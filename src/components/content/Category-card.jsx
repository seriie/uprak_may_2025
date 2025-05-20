export default function CategoryCard({ item }) {
  return (
    <div
      key={item.id}
      className="rounded-xl cursor-pointer w-full md:w-80 bg-slate-800/30 backdrop-blur-lg p-6 flex flex-col gap-3 border border-slate-700 hover:scale-[1.03] hover:border-teal-400 transition-all duration-300 shadow-lg"
    >
      <div
        className={`p-3 w-12 h-12 rounded-xl ${item.iconColor} flex items-center justify-center shadow-md`}
      >
        <img src={item.icon} alt={item.title} className="w-6 h-6" />
      </div>
      <h1 className="text-slate-100 text-xl font-semibold">{item.title}</h1>
      <p className="text-slate-300 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
