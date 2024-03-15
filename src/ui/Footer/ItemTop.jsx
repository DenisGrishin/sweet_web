import React from 'react';

export const ItemTop = ({ item }) => {
  return (
    <div className="flex items-center gap-x-4 flex-[0_1_25%] xl:flex-[0_1_50%]  text-left">
      {item.icon}
      <div>
        <div className="font-bold fontMono text-lg">{item.title}</div>
        <div className="font-light">{item.subTitle}</div>
      </div>
    </div>
  );
};
