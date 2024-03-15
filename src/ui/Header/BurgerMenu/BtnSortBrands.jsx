import React from 'react';
import { Button } from './../../common/Button';
import { useBoolean } from '../../../hooks/useBoolean';

export const BtnSortBrands = ({ items }) => {
  const { nameBtns, IsActive, getActiveId } = items;

  return (
    <div className="flex  flex-wrap justify-between gap-y-4 mb-8">
      {nameBtns.map((nameBtn, indx) => (
        <Button
          key={indx}
          borderBtn={IsActive === indx}
          colorKey={`${IsActive !== indx && 'beige'}`}
          otherStyle="font-bold flex-[0_1_45%] px-5 py-4 leading-3"
          onClick={() => getActiveId(indx)}
        >
          {nameBtn}
        </Button>
      ))}
    </div>
  );
};
