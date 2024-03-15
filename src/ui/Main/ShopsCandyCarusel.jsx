import React from 'react';
import { TitleMain } from './TitleMain';
import { SwiperSlide } from 'swiper/react';
import { Carusel } from '../common/Carusel';

import pict from './../../img/main/mainPage/ShopsCandyCarusel/1.webp';
import img_1 from './../../img/main/mainPage/ShopsCandyCarusel/carusel/1.webp';
import img_2 from './../../img/main/mainPage/ShopsCandyCarusel/carusel/2.webp';
import img_3 from './../../img/main/mainPage/ShopsCandyCarusel/carusel/3.webp';
import img_4 from './../../img/main/mainPage/ShopsCandyCarusel/carusel/4.webp';
import img_5 from './../../img/main/mainPage/ShopsCandyCarusel/carusel/5.webp';
import img_6 from './../../img/main/mainPage/ShopsCandyCarusel/carusel/6.webp';
import img_7 from './../../img/main/mainPage/ShopsCandyCarusel/carusel/7.webp';
import img_8 from './../../img/main/mainPage/ShopsCandyCarusel/carusel/8.webp';
import { SliderControler } from '../common/SliderControler';

const imgArr = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];
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
      slidesPerView: 2,
      spaceBetween: 0,
    },
    380: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    460: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 7,
      spaceBetween: 0,
    },
  },
};

export const ShopsCandyCarusel = () => {
  return (
    <>
      <div className="flex items-center xlsmall:flex-col xlsmall:gap-y-10 mb-14">
        <div className="flex-[0_1_60%]">
          <TitleMain alignLeft={true}>Магазин кондитерский изделий</TitleMain>
          <div className="font-light	text-[17px] leading-6 max-w-[90%]">
            <p className="mb-5">
              Все люди хоть немного, но сладкоежки, каждый порой балует себя
              лакомствами, а чтобы отказать себе в сладостях, особенно по случаю
              какого-либо праздника, нужно обладать поистине стоическим
              характером. Мы же не призываем Вас отказываться от лакомств, а
              наоборот - предлагаем Вам обилие тортов и изготовление тортов на
              заказ...
            </p>
            <p>
              С нами Вы сможете реализовать любые свои кондитерские пожелания -
              мы готовим оригинальные и неповторимые торты на заказ по любым
              эскизам или устным описаниям.
            </p>
          </div>
        </div>
        <a href="#" className="flex-[0_1_40%] relative">
          <div className="pb-[56.6%] xlsmall:pb-0  _imgAdaptiv ">
            <img src={pict} alt="" className="_imgCaruselShopCandy" />
          </div>
          <div className="md:p-5 bg-black bg-opacity-40 md:text-[18px] md:leading-5 leading-7   max-w-[360px] top-[20%] left-[7%] absolute font-bold fontMono py-7 px-6  text-white text-[25px] mr-2">
            Большая скидка на печенья “Макаруны” - 5%
          </div>
        </a>
      </div>
      <Carusel propsCarusel={propsCarusel}>
        {imgArr.map((sl, indx) => (
          <SwiperSlide key={indx}>
            <a href="#">
              <img src={sl} alt="candyshop" />
            </a>
          </SwiperSlide>
        ))}
        <SliderControler />
      </Carusel>
    </>
  );
};
