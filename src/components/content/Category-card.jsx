export default function CategoryCard({item}) {
    return (
        <>
            <div key={item.id} className="rounded-lg w-sm bg-slate-800 p-6 flex flex-col gap-2">
                <img src={item.icon} alt={item.title} className={`p-2 w-10 rounded-lg ${item.iconColor}`} />
                <h1 className="text-slate-100 text-lg font-bold">{item.title}</h1>
                <p className="text-slate-300">{item.description}</p>
            </div>
        </>
    )
}