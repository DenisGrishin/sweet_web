import React from 'react';

export const ListBrands = ({ brandsList }) => {
  return (
    <div>
      <ul className="space-y-5 pb-5">
        {brandsList.map((el, indx) => (
          <li key={indx} className="grid space-y-2 justify-start">
            <a href="#" className="text-pinkColor">
              {el.name[0]}
            </a>
            <a href="#" className="font-light">
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
