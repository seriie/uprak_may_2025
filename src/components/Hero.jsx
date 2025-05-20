export default function Hero() {
    return (
        <>
            <div className="bg-slate-800 py-20 px-20 flex justify-center flex-wrap-reverse items-center">
                <div className="w-2xl">
                    <h1 className="text-slate-100 font-bold text-5xl">Petani Kode</h1>
                    <p className="text-slate-100 font-light text-2xl">Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami. Mostly pakai Linux.</p>
                    <div className="mt-4 gap-4 flex">
                        <button className="rounded-lg hover:bg-teal-600 cursor-pointer px-4 py-2 text-lg bg-teal-500 text-slate-100">Mulai Belajar</button>
                        <button className="rounded-lg hover:bg-teal-700 cursor-pointer border px-4 py-2 border-teal-600 bg-teal-500/10 text-slate-100">Join Newsletter</button>
                    </div>
                </div>
                <img src="https://www.petanikode.com/img/petanikode-hero.svg" className="w-lg" />
            </div>
        </>
    )
}