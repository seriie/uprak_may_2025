export default function Heading({ subTitle, title, desc }) {
  return (
    <div className="gap-2 flex flex-col">
      <h2 className="font-bold text-teal-500">{subTitle}</h2>
      <h1 className="text-3xl font-bold text-slate-100">{title}</h1>
      <p className="text-slate-300">{desc}</p>
    </div>
  );
}