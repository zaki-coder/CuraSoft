import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import ListItems from "../components/ListItems";
import axios from "axios";
import paginateData from "../util/paginateData";
import SearchProtocolls from './SearchProtocolls';
const api_endpoint = "https://test.cura-go.de/web/v3/go.vital/protocol";
const access_token = process.env.REACT_APP_API_KEY;



const Content = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [items, setItems] = useState([]);



  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${api_endpoint}?filter=${query}`, {
          method: "GET",
          mode: "no-cors",
          withCredentials: true,
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
    if (searchData.length === 0 || searchData.length > 2) fetchItems();
      
  }, [searchData]);

  const renderMultiRoutes = ({
    element: Element,
    paths,
    ...rest
  }: MultiRoutes) =>
    paths.map((path) => (
      <Route key={path} path={path} {...rest} element={Element} />
    ));

  return (
    <div className="m-12 ">
      <div className=" w-[650px] max-h-[80vh]">
        <SearchProtocolls items={items} setSearchData={setSearchData} />
        <main className="border-2 ">
          <div className="bg-white flex justify-center w-100% m-4">
            <button
              onClick={() => setQuery("all")}
              className={`px-2 py-1 text-sm rounded-l-md  text-white ${
                query === "all" ? "bg-primary" : "bg-primary opacity-50"
              }`}
            >
              <a href="">Alle</a>
            </button>
            <button
              onClick={() => setQuery("error")}
              className={`px-2 py-1 text-sm bg-primary text-white ${
                query === "error" ? " bg-primary" : "bg-primary opacity-50"
              }`}
            >
              <a href="">Fehler</a>
            </button>
            <button
              onClick={() => setQuery("warning")}
              className={`px-2 py-1 text-sm bg-primary text-white ${
                query === "warning" ? " bg-primary" : "bg-primary opacity-50"
              }`}
            >
              <a href="">Warnung</a>
            </button>
            <button
              onClick={() => setQuery("log")}
              className={`px-2 py-1 text-sm bg-primary rounded-r-md text-white ${
                query === "log" ? " bg-primary" : "bg-primary opacity-50"
              }`}
            >
              <a href="">Log</a>
            </button>
          </div>
          <Routes>
            {renderMultiRoutes({
              paths: ["/", "/log"],
              element: (
                <ListItems
                  items={items}
                  loading={loading}
                  searchData={searchData}
                />
              ),
            })}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Content