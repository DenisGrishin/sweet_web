import React from 'react';

export const TitleMain = ({ children, alignLeft = false }) => {
  return (
    <div
      className={`relative flex ${
        alignLeft ? 'justify-start' : 'justify-center'
      } md:justify-start`}
    >
      <h2 className="font-bold mb-6 md:text-2xl  text-4xl fontMono  relative after:absolute after:bottom-0 after:right-0 after:bg-beigeColor after:h-2  after:w-full after:-z-10  after:content-[''] ">
        {children}
      </h2>
    </div>
  );
};
