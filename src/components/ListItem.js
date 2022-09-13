import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import {dateToTimeAgo} from "../util/timeDiff";

const ListItem = ({item}) => {
  return (
    <div className="flex items-center py-2 px-2 border-b border-gray-100">
            <AiFillCloseCircle
              icon="fa-solid fa-circle-xmark"
              className="mr-4 text-gray-500"
            />
            <div className="">
              <h3 className="text-md text-gray-700">{item.message}</h3>
              <p className="text-xs text-gray-400">vor {dateToTimeAgo(new Date(item.created_at))} von {item.patient_vorname}.{item.patient_name}</p>
            </div>
    </div>
  )
}

export default ListItem