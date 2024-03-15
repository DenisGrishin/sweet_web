import React from 'react';
import { Carusel } from './../common/Carusel';
import { SwiperSlide } from 'swiper/react';
import QuotesIcon from './../../img/icons/quotes.svg?react';
import { SliderControler } from '../common/SliderControler';

const propsCarusel = {
  propsNavigate: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  hasAutoHeight: false,
  slidesView: 1,
};

export const CustomerReviews = ({ caruselList }) => {
  return (
    <Carusel propsCarusel={propsCarusel}>
      {caruselList.map((sl, indx) => (
        <SwiperSlide key={indx} className="  ">
          <img
            src={sl.avatorUser}
            className=" rounded-full mx-auto -mb-12"
            alt="reviews"
          />
          <div className="flex flex-col items-center gap-y-7 bg-[#f6f6f6] pb-7 pt-16	">
            <p className="w-[80%] leading-6 text-[#22222299] text-center">
              {sl.reviewUser}
            </p>
            <QuotesIcon />
            <span className="border-b border-solid border-black font-bold text-[20px] leading-6">
              {sl.nameUser}
            </span>
          </div>
        </SwiperSlide>
      ))}
      <SliderControler />
    </Carusel>
  );
};
