import React from 'react'
import {dateToTimeAgo} from "../util/timeDiff";



const ListItem = ({item}) => {
  return (
    <div className="flex items-center py-2 px-2 border-b border-gray-100">
      <div>
        {item.typ === "log" ? (
          <i className="fa-solid fa-circle-info w-6 h-6  mr-4 text-gray-500"></i>
        ) : item.typ === "warning" ? (
          <i className="fa-solid fa-triangle-exclamation w-6 h-6  mr-4 text-gray-500"></i>
        ) : item.typ === "error" ? (
          <i className="fa-solid fa-circle-xmark w-6 h-6  mr-4 text-gray-500"></i>
        ) : (
          ""
        )}
      </div>
      <div className="">
        <h3 className="text-md text-gray-700">{item.message}</h3>
        <p className="text-xs text-gray-400">
          vor {dateToTimeAgo(new Date(item.stamp))} von {item.patient_vorname}.
          {item.patient_name}
        </p>
      </div>
    </div>
  );
}

export default ListItem