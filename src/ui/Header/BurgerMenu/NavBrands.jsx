import React from 'react';
import { BtnSortBrands } from './BtnSortBrands';
import { ListBrands } from './ListBrands';

export const NavBrands = ({ items, brandsList }) => {
  return (
    <div className="grid">
      <BtnSortBrands items={items} />
      <ListBrands brandsList={items.filterListBrands} />
    </div>
  );
};
