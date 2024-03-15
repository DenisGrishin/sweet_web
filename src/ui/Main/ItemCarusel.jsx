import React from 'react';
import { Carusel } from '../common/Carusel';
import { SwiperSlide } from 'swiper/react';
import { Button } from '../common/Button';
import BasketIcon from './../../img/icons/basket.svg?react';
import ComparisonsIcon from './../../img/icons/comparisons.svg?react';
import SliderArrowPrevIcon from './../../img/icons/arrowSliderPrev.svg?react';
import SliderArrowNextIcon from './../../img/icons/arrowSliderNext.svg?react';
import { SliderControler } from '../common/SliderControler';
const propsCarusel = {
  propsNavigate: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  hasAutoHeight: false,
  slidesView: 5,
  spaceslide: 0,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
};

export const ItemCarusel = ({ caruselList, decrement, increment }) => {
  return (
    <div>
      <Carusel propsCarusel={propsCarusel}>
        <div>
          {caruselList.map((sl, indx) => {
            return (
              <SwiperSlide
                key={indx}
                className="transition duration-300  flex flex-col  h-auto hover:shadow-[0_4px_30px_0_#f7e4d7] mx-3 my-5 lg:mx-1 lg:mt-3 lg:mb-5"
              >
                <div className="mb-3 relative group">
                  <img src={sl.img} alt={sl.alt} className="max-w-full" />

                  <div className="group-hover:bg-pinkColor absolute h-full w-full top-0 opacity-70 transition duration-500"></div>
                  <div className="flex group-hover:visible invisible group-hover:opacity-100   gap-x-3 absolute  top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 ">
                    <Button colorKey="beige" hasCircleIconStyles={true}>
                      <ComparisonsIcon />
                    </Button>
                    <Button colorKey="pink" hasCircleIconStyles={true}>
                      <BasketIcon />
                    </Button>
                  </div>
                </div>

                <a
                  href={sl.link}
                  className="px-5 flex-[1_1_100%] font-medium fontMono text-lg hover:text-pinkColor transition-colors duration-300"
                >
                  {sl.name}
                </a>
                <div className="flex px-5 pb-3 flex-wrap  items-center justify-between">
                  <div className="border border-[#0001] border-solid rounded-[20px] flex">
                    <button
                      onClick={() => decrement(sl.id)}
                      className={`w-7 h-8   flex justify-center items-center ${
                        sl.count === 0
                          ? 'cursor-not-allowed'
                          : '_svg-count-hover-special-carusel'
                      }`}
                    >
                      <SliderArrowPrevIcon className="w-2 h-3" />
                    </button>
                    <span className="w-7 text-center my-auto">{sl.count}</span>
                    <button
                      onClick={() => increment(sl.id)}
                      className="w-7 h-8 flex justify-center items-center _svg-count-hover-special-carusel"
                    >
                      <SliderArrowNextIcon className="w-2 h-3" />
                    </button>
                  </div>
                  <div className="grid gap-y-2 text-right ">
                    {sl.discount && (
                      <span className="text-[#929292] line-through decoration-2 decoration-pinkColor ">
                        {sl.discount}
                      </span>
                    )}
                    <span className="text-pinkColor text-lg"> {sl.price}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
        <SliderControler />
      </Carusel>
    </div>
  );
};
