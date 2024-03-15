import React from 'react';

export const TitleFooter = ({ children }) => {
  return (
    <h3 className="font-bold mb-6 fontMono text-[20px] text-nowrap">
      {children}
    </h3>
  );
};
