import React from 'react';

export const GategoriesLink = ({ children }) => {
  return (
    <div>
      <a
        href="#"
        className="reletive afterHover xl:hover:text-pinkColor leading-4 font-light uppercase xl:text-[#9a9598]"
      >
        {children}
      </a>
    </div>
  );
};
