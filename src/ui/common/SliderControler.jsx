import React from 'react';

export const SliderControler = () => {
  return (
    <div className="slider-controler mt-10 mb-14 md:mt-5">
      <div className="flex gap-x-10 justify-center">
        <button className="relative swiper-button-prev slider-arrow _svg-navigate-hover-special-carusel  rounded-full   px-[0px] py-[0px] w-[50px] h-[50px] flex  justify-center items-center bg-grayColor"></button>
        <button className=" swiper-button-next slider-arrow _svg-navigate-hover-special-carusel -rotate-180 px-[0px] py-[0px] w-[50px] h-[50px] flex  justify-center items-center rounded-full  bg-grayColor"></button>
      </div>
    </div>
  );
};
