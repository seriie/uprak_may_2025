import codeIcon from '../../assets/icon/content/code.png';
import ethernetIcon from '../../assets/icon/content/ethernet.png';
import listIcon from '../../assets/icon/content/list.png';
import CategoryCard from './Category-card';
import Heading from './Heading';

export default function Category() {
    const cardItems = [
        { id: 1, icon: codeIcon, iconColor: "bg-indigo-500", title: "Basic Programming", description: "Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi." },
        { id: 2, icon: ethernetIcon, iconColor: "bg-orange-500", title: "Web Programming", description: "Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak lagi." },
        { id: 3, icon: listIcon, iconColor: "bg-sky-500", title: "Tutorial Lainnya", description: "Baca tutorial dalam kategori lainnya seperti Mobile programming, Game programming, IoT, Blockhain, dan masih banyak lagi." }
    ];

    return (
        <>
            <Heading subTitle="KATEGORI" title="Mau belajar apa hari ini?" desc="Temukan tutorial berdasarkan minatmu." />
            <div className='flex flex-wrap w-full justify-between mt-8'>
                {cardItems.map((item) => (
                    <CategoryCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}