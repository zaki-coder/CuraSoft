import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";
import {dateToTimeAgo} from "../util/timeDiff";



const ListItem = ({item}) => {
  return (
    <div className="flex items-center py-2 px-2 border-b border-gray-100">
      <div>
        <FaExclamationTriangle
          icon="fa-solid fa-circle-xmark"
          className="w-6 h-6  mr-4 text-gray-500"
        />
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