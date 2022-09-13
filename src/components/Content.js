import React, {useState, useEffect} from 'react';
import { HiSearch } from "react-icons/hi";
import ListItems from "../components/ListItems";
import axios from "axios";
const api_endpoint = "https://test.cura-go.de/web/v3/go.vital/protocol";
const access_token = process.env.REACT_APP_BEARER_TOKEN;

const Content = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => e.preventDefault();

  

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://test.cura-go.de/web/v3/go.vital/protocol?q=${query}`,
          {
            method: "GET",
            mode: "no-cors",
            withCredentials: true,
            // credentials: "include",
            headers: {
              Authorization:
                "Bearer " +
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjMxMjA4MDAsImVkayI6IiQwMiRmMnlsZ05iK3VQMkRlNlU5STNrY0h3PT0kMUhCTkk0NmdqNUprMXZhY2dLMlR6dTRUV1JMS1MvdUxHNXBEKytEa0o0YXZIVUlXU1BrNituOVZUNkNXTG5URiIsInVpZCI6Mzk4LCJjaWQiOjMyNSwiY2RiIjoid29sa2VfRlJOVE5EIiwiY25tIjoiRlJOVE5EIiwibWlkIjo0MjQsIm1ubSI6IkZSTlRORCIsImVpZCI6MCwiYXBwIjoidXNlciJ9.bEjadxLQQqyuByMHHNCOoDqcrayOZ99ECqHdiP8YtC0",
              "Content-Type": "application/json",
              // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              // "Access-Control-Allow-Origin": "*"
            },
          }
        );
        console.log(response.data.items);
        setItems(response.data.items);
        
      } catch (error) {
        console.log(error);
      }
    };
    if (query.length === 0 || query.length > 2) fetchItems();
      
  }, [query]);

  // console.log(items);

  return (
    <div className="m-12 ">
      <div className=" w-[650px] max-h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-primary mx-auto py-4 px-4 sm:px-6 lg:px-6 flex justify-between items-center rounded-t-md"
        >
          {/* <h1 className="text-xl text-white">Protokoll</h1> */}
          <input
            type="text"
            className="font-bold bg-primary outline-none placeholder-white"
            placeholder="Protokoll"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <button>
            <HiSearch className="w-6 h-6 text-white font-bold" />
          </button>
        </form>
        <main className="border-2 ">
          <ul className="bg-white flex justify-center w-100% m-4">
            <li className="px-2 py-1 text-sm rounded-l-md bg-primary text-white">
              <a href="">Alle</a>
            </li>
            <li className="px-2 py-1 text-sm bg-primary text-white">
              <a href="">Fehler</a>
            </li>
            <li className="px-2 py-1 text-sm bg-primary text-white">
              <a href="">Warnung</a>
            </li>
            <li className="px-2 py-1 text-sm bg-primary rounded-r-md text-white">
              <a href="">Log</a>
            </li>
          </ul>
          <ListItems items={items} />
        </main>
      </div>
    </div>
  );
}

export default Content