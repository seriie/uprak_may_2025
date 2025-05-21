import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Heading from "./Heading";
import UpdateCard from "./Updates-card";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function Updates() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { theme } = useTheme();
  const itemsPerPage = 8;
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await axios.get(`${URL}`);
        setData(response.data);
      } catch (e) {
        console.error("Error get data: ", e);
      }
    };
    getContent();
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="mt-10">
      <Heading
        subTitle="UPDATE"
        title="Apa yang baru di Petani Kode? 🔥"
        desc="Baca artikel terbaru yang masih fresh dan hangat."
      />

      <div className="mt-8 flex flex-wrap justify-center gap-10">
        {currentItems.map((item) => (
          <UpdateCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="flex flex-col"
          pageClassName={`px-2 py-1 md: px-3 rounded ${theme === "dark" ? 'bg-slate-700 text-slate-100' : 'bg-slate-300 text-slate-800'}`}
          activeClassName="bg-teal-500 font-bold"
          previousLabel={"←"}
          nextLabel={"→"}
          previousClassName={`px-2 md:px-3 md:py-1 ${theme === "dark" ? 'bg-slate-600 text-slate-100' : 'bg-slate-400 text-slate-800'} rounded`}
          nextClassName={`px-2 py-1 md:px-3 ${theme === "dark" ? 'bg-slate-600 text-slate-100' : 'bg-slate-400 text-slate-800'} rounded`}
          disabledClassName="opacity-50 cursor-not-allowed"
          className={`cursor-pointer flex gap-1 md:gap-2 ${theme === "dark" ? 'text-slate-100' : 'text-slate-800'}`}
        />
      </div>
    </div>
  );
}
