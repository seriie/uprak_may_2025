export default function Hero() {

    return (
        <>
            <div className="bg-slate-800 p-10 md:p-20 flex flex-wrap-reverse md:flex-nowrap justify-center items-center">
                <div className="w-2xl text-center md:text-start">
                    <h1 className="text-slate-100 font-bold text-5xl">Petani Kode</h1>
                    <p className="text-slate-100 font-light text-2xl">Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami. Mostly pakai Linux.</p>
                    <div className="mt-4 justify-center md:justify-normal gap-4 flex">
                        <button className="rounded-lg hover:bg-teal-600 focus:outline-teal-300 cursor-pointer px-4 py-2 text-lg bg-teal-500 text-slate-100">Mulai Belajar</button>
                        <button className="rounded-lg hover:bg-teal-700 focus:outline-teal-500 cursor-pointer border px-4 py-2 border-teal-600 bg-teal-500/10 text-slate-100">Join Newsletter</button>
                    </div>
                </div>
                <img src="https://www.petanikode.com/img/petanikode-hero.svg" className="w-lg" />
            </div>
        </>
    )
}