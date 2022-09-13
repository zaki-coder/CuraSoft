import React from 'react'
import ListItem from './ListItem';
import ListPaganation from './ListPaganation';

const ListItems = ({items}) => {
  return (
    <div>
      <div className="max-h-[80vh] overflow-y-scroll relative">
        {items.slice(0,10).map((item) => (
          <ListItem key={item.created_at} item={item} />
        ))}
      </div>
        <ListPaganation />
    </div>
  );
}

export default ListItems