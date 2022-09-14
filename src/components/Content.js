import React, {useState, useEffect} from 'react';
import { HiSearch } from "react-icons/hi";
import ListItems from "../components/ListItems";
import axios from "axios";
import paginateData from "../util/paginateData";
const api_endpoint = "https://test.cura-go.de/web/v3/go.vital/protocol";
const access_token = process.env.REACT_APP_API_KEY;



const Content = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const handleSubmit = (e) => e.preventDefault();

  

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${api_endpoint}?q=${query}`, {
          method: "GET",
          mode: "no-cors",
          withCredentials: true,
          // credentials: "include",
          headers: {
            Authorization:
              `Bearer ${access_token}`
          },
        });
        const paginatedData = paginateData(response.data.items);
        setItems(paginatedData);
        setLoading(false);
        
      } catch (error) {
        console.log(error);
      }
    };
    if (query.length === 0 || query.length > 2) fetchItems();
      
  }, [query]);


  return (
    <div className="m-12 ">
      <div className=" w-[650px] max-h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-primary mx-auto py-4 px-4 sm:px-6 lg:px-6 flex justify-between items-center rounded-t-md"
        >
          <input
            type="text"
            className="font-bold bg-primary outline-none placeholder-white text-white"
            placeholder="Protokoll"
          />
          <button>
            <HiSearch className="w-6 h-6 text-white font-bold" />
          </button>
        </form>
        <main className="border-2 ">
          <div className="bg-white flex justify-center w-100% m-4">
            <button className="px-2 py-1 text-sm rounded-l-md bg-primary text-white">
              <a href="">Alle</a>
            </button>
            <button
              className="px-2 py-1 text-sm bg-primary text-white"
            >
              <a href="">Fehler</a>
            </button>
            <button className="px-2 py-1 text-sm bg-primary text-white">
              <a href="">Warnung</a>
            </button>
            <button className="px-2 py-1 text-sm bg-primary rounded-r-md text-white">
              <a href="">Log</a>
            </button>
          </div>
          <ListItems items={items} loading={loading} />
        </main>
      </div>
    </div>
  );
}

export default Content