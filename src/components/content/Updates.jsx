import { useEffect, useState } from "react";
import Heading from "./Heading";
import UpdateCard from "./Updates-card";
import axios from 'axios';

export default function Updates() {
    const [data, setData] = useState([]);
    const URL = import.meta.env.VITE_API_URL;

    const getContent = async () => {
        try {
            const response = await axios.get(`${URL}`);
            console.log(response.data);
            setData(response.data);
        } catch (e) {
            console.error("Error get data: ", e);   
        }
    }

    useEffect(() => {
        getContent();
    }, []);

    return (
        <>
            <div className="mt-10">
                <Heading subTitle="UPDATE" title="Apa yang baru di Petani Kode? 🔥" desc="Baca artikel terbaru yang masih fresh dan hangat." />
                <div className="mt-8 flex flex-wrap justify-center gap-10">
                    {data.map((item) => (
                        <UpdateCard item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}