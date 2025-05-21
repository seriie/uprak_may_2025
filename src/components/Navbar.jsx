import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import icon from '../assets/icon/navbar/icon.png';
import homeIcon from '../assets/icon/navbar/home.png';
import videoPlayerIcon from '../assets/icon/navbar/video-player.png';
import pepperIcon from '../assets/icon/navbar/papper.png';
import bookIcon from '../assets/icon/navbar/book.png';
import discordIcon from '../assets/icon/navbar/discord.png';
import searchIcon from '../assets/icon/navbar/search.png';

export default function Navbar() {
    const { theme } = useTheme();
    const navIcon = [
        { id: 1, name: "Home", icon: homeIcon }, 
        { id: 2, name: "Kelas", icon: videoPlayerIcon }, 
        { id: 3, name: "Tutorial", icon: pepperIcon }, 
        { id: 4, name: "Buku", icon: bookIcon }, 
        { id: 5, name: "Discord", icon: discordIcon }, 
    ];

    return (
        <>
            <div className={`${theme === "dark" ? 'bg-teal-600' : 'bg-teal-800'} z-10 px-10 py-2 fixed top-0 right-0 left-0 items-center flex justify-between w-full`}>
                <div className='flex items-center gap-4'>
                    <img src={icon} className='w-8 h-8' />
                    <div className='flex item-center gap-4'>
                        {navIcon.map((item) => (
                            <button key={item.id} className='flex focus:outline-teal-500 gap-1 items-center p-2 hover:bg-teal-700 cursor-pointer rounded-md'>
                                <img src={item.icon} alt={item.name} className='w-4 h-4' />
                                <p className='text-slate-100 font-bold'>{item.name}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={searchIcon} className='w-6 h-6' />
                    <ThemeToggle />
                    <button className='text-slate-100 p-2 rounded-md focus:outline-teal-300 bg-teal-500 hover:bg-teal-700 cursor-pointer'>Join Newsletter</button>
                </div>
            </div>
        </>
    )
}