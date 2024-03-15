import React from 'react';
import { Carusel } from '../common/Carusel';
import { SwiperSlide } from 'swiper/react';
import CalendarIcon from './../../img/icons/calendar.svg?react';
import { SliderControler } from '../common/SliderControler';

const propsCarusel = {
  propsNavigate: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  hasAutoHeight: false,
  slidesView: 3,
  spaceslide: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
    },
    991: {},
  },
};
export const NewsCarusel = ({ caruselList }) => {
  return (
    <Carusel propsCarusel={propsCarusel}>
      {caruselList.map((sl, indx) => (
        <SwiperSlide key={indx}>
          <img src={sl.img} className="max-w-full mb-7 mx-auto  " alt="img" />

          <div className="mb-5 flex  gap-x-4 items-center">
            <CalendarIcon className="-mt-[1px]" />
            <span className="leading-6 opacity-50">{sl.date}</span>
          </div>
          <a
            href={sl.link}
            className="fontMono font-bold text-[18px] mb-2 inline-block"
          >
            {sl.title}
          </a>
          <p className="font-light">{sl.description}</p>
        </SwiperSlide>
      ))}
      <SliderControler />
    </Carusel>
  );
};
