import codeIcon from '../../assets/icon/code.png';
import ethernetIcon from '../../assets/icon/ethernet.png';
import listIcon from '../../assets/icon/list.png';
import CategoryCard from './Category-card';

export default function Category() {
    const cardItems = [
        { id: 1, icon: codeIcon, iconColor: "bg-indigo-500", title: "Basic Programming", description: "Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi." },
        { id: 2, icon: ethernetIcon, iconColor: "bg-orange-500", title: "Web Programming", description: "Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak lagi." },
        { id: 3, icon: listIcon, iconColor: "bg-sky-500", title: "Tutorial Lainnya", description: "Baca tutorial dalam kategori lainnya seperti Mobile programming, Game programming, IoT, Blockhain, dan masih banyak lagi." }
    ];

    return (
        <>
            <div className="gap-2 flex flex-col">
                <h2 className="font-bold text-teal-500">KATEGORI</h2>
                <h1 className="text-3xl font-bold text-slate-100">Mau belajar apa hari ini?</h1>
                <p className="text-slate-300">Temukan tutorial berdasarkan minatmu.</p>
            </div>
            <div className='flex flex-warp w-full justify-between mt-8'>
                {cardItems.map((item) => (
                    <CategoryCard item={item} />
                ))}
            </div>
        </>
    )
}