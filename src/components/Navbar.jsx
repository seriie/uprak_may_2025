import { useEffect } from 'react';
import icon from '../assets/icon/icon.png';
import homeIcon from '../assets/icon/home.png';
import videoPlayerIcon from '../assets/icon/video-player.png';
import papperIcon from '../assets/icon/papper.png';
import bookIcon from '../assets/icon/book.png';
import discordIcon from '../assets/icon/discord.png';
import searchIcon from '../assets/icon/search.png';

export default function Navbar() {
    const navIcon = [
        { id: 1, name: "Home", icon: homeIcon }, 
        { id: 2, name: "Kelas", icon: videoPlayerIcon }, 
        { id: 3, name: "Tutorial", icon: papperIcon }, 
        { id: 4, name: "Buku", icon: bookIcon }, 
        { id: 5, name: "Discord", icon: discordIcon }, 
    ];

    useEffect(() => {
        console.log(navIcon)
    }, [])

    return (
        <>
            <div className="bg-teal-800 px-10 py-2 absolute top-0 right-0 left-0 items-center flex justify-between w-full">
                <div className='flex items-center gap-4'>
                    <img src={icon} className='w-8 h-8' />
                    <div className='flex item-center gap-4'>
                        {navIcon.map((item) => (
                            <div key={item.id} className='flex gap-1 items-center p-2 hover:bg-teal-700 cursor-pointer rounded-md'>
                                <img src={item.icon} alt={item.name} className='w-4 h-4' />
                                <p className='text-slate-100 font-bold'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={searchIcon} className='w-6 h-6' />
                    <button className='text-slate-100 p-2 rounded-md font-medium bg-teal-500 hover:bg-teal-700 cursor-pointer'>Join Newsletter</button>
                </div>
            </div>
        </>
    )
}