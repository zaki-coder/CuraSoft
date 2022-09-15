import React, {useState, useEffect} from 'react'
import ListItem from './ListItem';
const ListItems = ({items, loading}) => {
  const [page, setPage] = useState(0);
  const [protokols, setProtokols] = useState([]);
  useEffect(() => {
    if(loading) return;
    setProtokols(items[page]);
  }, [loading, page, items]);

  const handlePage = (index) => {
    setPage(index);
  }


  return (
    <div>
      <div className="max-h-[80vh] overflow-scroll relative">
        <h1 className="text-center">{loading ? "Laden..." : ""}</h1>
        {protokols.map((item) => (
          <ListItem key={item.created_at} item={item} />
        ))}
      </div>
      {!loading && (
        <ul className="bg-white flex justify-end w-100% m-4">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => handlePage(index)}
                key={index}
                className={`px-3 py-2 text-sm first:rounded-l-md bg-primary ${
                  index === page ? "focus:bg-primary" : "opacity-50"
                } last:rounded-r-md text-white`}
              >
                {index + 1}
              </button>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ListItems