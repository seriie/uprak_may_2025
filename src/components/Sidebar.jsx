import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import homeIcon from "../assets/icon/navbar/home.png";
import videoPlayerIcon from "../assets/icon/navbar/video-player.png";
import pepperIcon from "../assets/icon/navbar/papper.png";
import bookIcon from "../assets/icon/navbar/book.png";
import discordIcon from "../assets/icon/navbar/discord.png";

import facebookIcon from "../assets/icon/footer/facebook.png";
import twitterIcon from "../assets/icon/footer/twitter.png";
import telegramIcon from "../assets/icon/footer/telegram.png";
import instagramIcon from "../assets/icon/footer/instagram.png";
import youtubeIcon from "../assets/icon/footer/youtube.png";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [btmOpened, setBtmOpened] = useState(false);
  const { theme } = useTheme();

  const sidebarIcon = [
    { id: 1, name: "Home", icon: homeIcon },
    { id: 2, name: "Kelas", icon: videoPlayerIcon },
    { id: 3, name: "Tutorial", icon: pepperIcon },
    { id: 4, name: "Buku", icon: bookIcon },
    { id: 5, name: "Discord", icon: discordIcon },
  ];

  const linkItem = [
    { name: "About", link: "https://petanikode.com/about" },
    { name: "FAQs", link: "https://petanikode.com/faqs" },
    { name: "Contact", link: "https://petanikode.com/contact" },
  ];

    const socialMediaIcon = [
      {
        icon: facebookIcon,
        name: "Facebook",
        background: "hover:bg-blue-800",
        link: "https://facebook.com/petanikode",
      },
      {
        icon: twitterIcon,
        name: "Twitter",
        background: "hover:bg-sky-500",
        link: "https://twitter.com/petanikode",
      },
      {
        icon: telegramIcon,
        name: "Telegram",
        background: "hover:bg-sky-600",
        link: "https://t.me/petanikode",
      },
      {
        icon: instagramIcon,
        name: "Instagram",
        background: "hover:bg-pink-600",
        link: "https://instagram.com/petanikode",
      },
      {
        icon: youtubeIcon,
        name: "Youtube",
        background: "hover:bg-red-500",
        link: "https://youtube.com/petanikode?sub_confirmation=1",
      },
    ];

  return (
    <>
      <div
        className={`${
          isOpen
            ? "backdrop-blur-3xl"
            : "backdrop-blur-none pointer-events-none"
        } fixed transition-all duration-200 z-20 flex inset-0 justify-center items-center`}
      ></div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-20 h-full w-64 ${theme === "dark" ? 'bg-slate-700' : 'bg-slate-100'} p-4`}
      >
        <div className="flex justify-between">
          <p className={`font-bold text-xl ${theme === "dark" ? 'text-slate-100' : 'text-slate-800'}`}>Menu</p>
          <RxCross2
            className={`${theme === "dark" ? 'text-slate-100' : 'text-slate-800'} text-3xl cursor-pointer`}
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className={`flex flex-col mt-4 border-b pb-6 ${theme === "dark" ? 'border-slate-600' : 'border-slate-400'}`}>
          {sidebarIcon.map((item) => (
            <button
              key={item.id}
              className={`flex items-center gap-2 p-2 cursor-pointer ${theme === "dark" ? 'hover:bg-slate-600' : 'hover:bg-slate-300'} rounded-md`}
            >
              <img src={item.icon} className={`w-5 h-5 ${theme === "dark" ? '': 'brightness-[.1]'}`} />
              <p className={`font-bold ${theme === "dark" ? 'text-slate-100' : 'text-slate-800'}`}>{item.name}</p>
            </button>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={() => setBtmOpened(!btmOpened)}
            className={`w-full p-2 text-start font-medium ${theme === "dark" ? 'text-slate-100 hover:bg-slate-600' : 'text-slate-800 hover:bg-slate-300'} cursor-pointer rounded-md`}
          >
            {btmOpened ? "Less" : "More"}...
          </button>
          {btmOpened &&
            <div>
                <div className="flex flex-col mt-4">
                    {linkItem.map((item, idx) => (
                        <a key={idx} href={item.link}>
                            <button className={`p-2 w-full text-start cursor-pointer ${theme === "dark" ? 'hover:bg-slate-600 text-slate-100' : 'hover:bg-slate-300 text-slate-800'} rounded-md font-medium`}>{item.name}</button>
                        </a>
                    ))}
                </div>
                <div className="mt-4">
                    <div className="flex gap-2">
                        {socialMediaIcon.map((item, idx) => (
                            <a key={idx} href={item.link} className={``}>
                                <img src={item.icon} className={`w-10 h-10 ${item.background} p-2 rounded-full ${theme === "dark" ? '' : 'brightness-[.2] hover:brightness-100'}`} alt={item.name} />
                            </a>
                        ))}
                    </div>
                    <p className={`mt-2 text-xs ${theme === "dark" ? 'text-slate-100' : 'text-slate-800'}`}>Copyright &copy; {new Date().getFullYear()} <a className="font-bold cursor-pointer hover:text-sky-500" href="/">Petani Kode</a></p>
                </div>
            </div>
            }
        </div>
      </motion.div>
    </>
  );
}
