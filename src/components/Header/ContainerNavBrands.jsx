import React, { useState } from 'react';
import { NavBrands } from '../../ui/Header/BurgerMenu/NavBrands';
import { useSelector } from 'react-redux';

export const ContainerNavBrands = () => {
  const brandsList = useSelector((state) => state.uiStore.brands);
  const [isSelcted, setIsSelcted] = useState(2);

  const regexps = [/[а-яё]/gi, /[a-z]/gi];

  const items = {
    nameBtns: ['Кириллица', 'Латиница', 'Все'],
    IsActive: isSelcted,
    getActiveId: (id) => setIsSelcted(id),
    filterListBrands: brandsList.filter((el) => {
      if (isSelcted) return el;
      if (regexps[isSelcted].test(el.name)) {
        return el;
      }
    }),
  };

  return <NavBrands items={items} />;
};
