export default function UpdateCard({ item }) {
  return (
    <div
      key={item.id}
      className="flex cursor-pointer flex-col w-lg gap-3 rounded-xl bg-slate-700/30 border border-slate-800 backdrop-blur-lg p-6 shadow-md hover:scale-[1.02] hover:border-teal-400 transition-all duration-300"
    >
      <h1 className="text-slate-100 font-bold text-2xl">{item.title}</h1>
      <p className="text-slate-300 text-base leading-relaxed">{item.body}</p>
    </div>
  );
}
