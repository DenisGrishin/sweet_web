import React from 'react';
import { TitleFooter } from '../common/TitleFooter';

export const NavFooter = ({ linkList, categoriesList }) => {
  return (
    <div className="flex-[0_1_50%] flex gap-x-10 justify-between md:hidden">
      <div>
        <TitleFooter>О компании</TitleFooter>
        <ul>
          {linkList.map((el, indx) => (
            <li key={indx} className="mb-2.5 font-light">
              <a href="#">{el.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <TitleFooter>Каталог</TitleFooter>
        <ul className="columns-2 ">
          {categoriesList.map((el, indx) => (
            <li key={indx} className="mb-2.5 font-light">
              <a href="#">{el.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
