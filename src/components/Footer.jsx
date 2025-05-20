import footerIcon from "../assets/icon/footer/footer-icon.png";
import facebokIcon from "../assets/icon/footer/facebook.png";
import twitterIcon from "../assets/icon/footer/twitter.png";
import telegramIcon from "../assets/icon/footer/telegram.png";
import instagramIcon from "../assets/icon/footer/instagram.png";
import youtubeIcon from "../assets/icon/footer/youtube.png";
import clsx from 'clsx';

export default function Footer() {
  const footerLinks = [
    {
      title: "Belajar",
      links: ["Artikel", "Tutorial", "Buku"],
    },
    {
      title: "Popular Tutorial",
      links: [
        "Tutorial Bahasa C",
        "Tutorial Javascript",
        "Tutorial Java",
        "Tutorial PHP",
        "Tutorial Python",
      ],
    },
    {
      title: "Social Media",
      links: [
        "Facebook Page",
        "Instagram",
        "Twitter",
        "Youtube Channel",
        "Telegram Channel",
      ],
    },
    {
      title: "Petani Kode",
      links: ["About", "FAQs", "Contact"],
    },
  ];

  const itemIcon = [
    {
      icon: facebokIcon,
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
    <footer className="bg-slate-800 text-white p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 border-b border-slate-600 pb-10">
        <div className="md:w-1/3">
          <img src={footerIcon} alt="footer icon" className="w-48 mb-4" />
          <p className="text-slate-300 text-sm leading-relaxed">
            Tempat belajar budidaya kode (coding) dengan tutorial yang gampang
            dipahami.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:underline cursor-pointer text-slate-300 text-sm"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center flex mt-4 flex-col items-center">
        <p className="text-slate-100 text-sm">Ikuti Kami di</p>
        <div className="flex gap-6">
          {itemIcon.map((item) => (
            <a className="mt-4 rounded-full focus:outline-teal-500" href={item.link}>
              <img
                src={item.icon}
                alt={item.name}
                className={`w-8 h-8 p-2 rounded-full focus:rounded-full ${item.background} bg-slate-600 cursor-pointer`}
              />
            </a>
          ))}
        </div>
        <p className="mt-6 font-light text-sm">&copy; {new Date().getFullYear()} petani Kode . Made with ❤️ using Hugo 0.134.0</p>
      </div>
    </footer>
  );
}
