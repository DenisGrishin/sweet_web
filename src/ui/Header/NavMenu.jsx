import React from 'react';
import { GategoriesLink } from './../common/GategoriesLink';
import { useSelector } from 'react-redux';

export const NavMenu = () => {
  const linkList = useSelector((state) => state.uiStore.navLinks);
  return (
    <nav className="  space-x-8 xl:space-x-0 xl:space-y-8 text-center flex justify-center xl:flex-col xl:items-start  xl:text-sm xl:font-normal xl:py-7 pr-10 pl-12 ">
      {linkList.map((it, indx) => {
        return (
          <div key={indx} className={` relative group xl:text-left`}>
            <GategoriesLink>{it.name}</GategoriesLink>
            {it.subMenu && (
              <div className="absolute xl:relative group-hover:grid top-4 left-0  gap-y-3 space-y-2 xl:space-y-3 w-60 hidden xl:grid xl:bg-[#f9f9f9]  bg-white px-5 py-7 xl:py-1    text-left z-50 xl:shadow-none shadow-[0_25px_35px_0px_rgba(0,0,0,0.05)]">
                {it.subMenu.map((el, indx) => (
                  <a key={indx} href="#">
                    {el.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};
