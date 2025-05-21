import { RxCross2 } from "react-icons/rx";
import homeIcon from "../assets/icon/navbar/home.png";
import videoPlayerIcon from "../assets/icon/navbar/video-player.png";
import pepperIcon from "../assets/icon/navbar/papper.png";
import bookIcon from "../assets/icon/navbar/book.png";
import discordIcon from "../assets/icon/navbar/discord.png";

export default function Sidebar({ isOpen, setIsOpen }) {
  const sidebarIcon = [
    { id: 1, name: "Home", icon: homeIcon },
    { id: 2, name: "Kelas", icon: videoPlayerIcon },
    { id: 3, name: "Tutorial", icon: pepperIcon },
    { id: 4, name: "Buku", icon: bookIcon },
    { id: 5, name: "Discord", icon: discordIcon },
  ];

  return (
    <>
      <div
        className={`
        fixed top-0 left-0 z-20 h-full w-64 bg-slate-700 p-4
            ${
              isOpen
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "-translate-x-full opacity-0 pointer-events-none"
            }`}
      >
        <div className="flex justify-between">
          <p className="font-bold text-xl text-slate-100">Menu</p>
          <RxCross2
            className="text-slate-100 text-3xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="flex flex-col mt-4 border-b pb-6 border-slate-600">
          {sidebarIcon.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-slate-600 rounded-md"
            >
              <img src={item.icon} className="w-6 h-6" />
              <p className="font-bold text-slate-100">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
