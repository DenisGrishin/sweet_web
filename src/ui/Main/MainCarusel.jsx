import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Carusel } from '../common/Carusel';
import SliderArrowPrevIcon from './../../img/icons/arrowSliderPrev.svg?react';
import SliderArrowNextIcon from './../../img/icons/arrowSliderNext.svg?react';
import slideImgOne from './../../img/main/Carusel/slide_1.webp';
import slideImgTwo from './../../img/main/Carusel/slide_2.webp';
import slideImgThree from './../../img/main/Carusel/slide_3.webp';
import slideImgFour from './../../img/main/Carusel/slide_4.webp';
import slideImgFive from './../../img/main/Carusel/slide_5.webp';

const slidesMain = [
  {
    img: slideImgOne,
    alt: 'тортик вкусный очень',
  },
  {
    img: slideImgTwo,
    alt: 'тортик вкусный очень',
    description: {
      text_1: '1 190 р. 9 шт.',
      text_2: 'Макаруны Мечты сбываются',
    },
  },
  {
    img: slideImgThree,
    alt: 'тортик вкусный очень',
    description: {
      text_1: '1 500 р. 4 кг.',
      text_2: 'Торт "Фрутовое изобилие"',
    },
  },
  {
    img: slideImgFour,
    alt: 'тортик вкусный очень',
    description: {
      text_1: '3 515 р. 24 шт.',
      text_2: 'Макаруны набор',
    },
  },
  {
    img: slideImgFive,
    alt: 'тортик вкусный очень',
    description: {
      text_1: '380 р. 200 гр.',
      text_2: 'Фруктовый чизкейк',
    },
  },
];

const propsCarusel = {
  propsNavigate: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
  slidesView: 1,
  propsPagination: { clickable: true, el: '.swiper-pagination' },
  spaceslide: 30,
  hasAutoHeight: true,
};

export const MainCarusel = () => {
  return (
    <Carusel propsCarusel={propsCarusel}>
      {slidesMain.map((slide, indx) => {
        return (
          <SwiperSlide key={indx}>
            <a href="#" className={`relative `}>
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {slide.description && (
                <div className="w-full h-full text-center absolute top-0 left-0 bg-[#00000027]  text-white transfornm flex flex-col justify-center items-center">
                  <div className="font-light text-3xl lg:text-2xl sm:text-xl">
                    {slide.description.text_1}
                  </div>
                  <div className="font-bold text-6xl lg:text-5xl sm:text-2xl">
                    {slide.description.text_2}
                  </div>
                </div>
              )}
            </a>
          </SwiperSlide>
        );
      })}
      <div className="slider-controler  ">
        <div className="flex justify-between absolute top-1/2 -translate-y-2/4 left-0 z-50 w-[100%] px-7 ">
          <button className="swiper-button-prev slider-arrow pointer-events-auto">
            <SliderArrowPrevIcon name="arrow-back-outline" />
          </button>
          <button className="swiper-button-next slider-arrow">
            <SliderArrowNextIcon name="arrow-forward-outline" />
          </button>
        </div>
        <div className="swiper-pagination my-5"></div>
      </div>
    </Carusel>
  );
};
