import React from 'react';
import categoriesImg_1 from '../../img/main/mainPage/GategoriesPackImg/1.webp';
import categoriesImg_2 from '../../img/main/mainPage/GategoriesPackImg/2.webp';
import categoriesImg_3 from '../../img/main/mainPage/GategoriesPackImg/3.webp';
import categoriesImg_4 from '../../img/main/mainPage/GategoriesPackImg/4.webp';
import categoriesImg_5 from '../../img/main/mainPage/GategoriesPackImg/5.webp';
import categoriesImg_6 from '../../img/main/mainPage/GategoriesPackImg/6.webp';
import categoriesImg_7 from '../../img/main/mainPage/GategoriesPackImg/7.webp';
import categoriesImg_8 from '../../img/main/mainPage/GategoriesPackImg/8.webp';
import categoriesImg_9 from '../../img/main/mainPage/GategoriesPackImg/9.webp';
import categoriesImg_10 from '../../img/main/mainPage/GategoriesPackImg/10.webp';
import { GategoriesLink } from '../common/GategoriesLink';

const items = [
  {
    img: {
      big: categoriesImg_1,
      small: categoriesImg_2,
    },
    name: {
      big: 'ТОРТЫ',
      small: 'БЕЗЕ',
    },

    link: '#',
  },
  {
    img: {
      big: categoriesImg_4,
      small: categoriesImg_3,
    },
    name: {
      big: 'ИМБИРНОЕ ПЕЧЕНЬЕ',
      small: 'МАКАРУНЫ',
    },

    link: '#',
  },
  {
    img: {
      big: categoriesImg_5,
      small: categoriesImg_6,
    },
    name: {
      big: 'КЕЙК ПОПСЫ',
      small: 'ЭКЛЕРЫ',
    },

    link: '#',
  },
  {
    img: {
      big: categoriesImg_8,
      small: categoriesImg_7,
    },
    name: {
      big: 'ДОНАТЫ',
      small: 'КАПКЕЙКИ',
    },

    link: '#',
  },
  {
    img: {
      big: categoriesImg_9,
      small: categoriesImg_10,
    },
    name: {
      big: 'ПИРОЖНЫЕ',
      small: 'ЗЕФИР',
    },

    link: '#',
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
};

export const Gategories = () => {
  return (
    <div className="flex gap-x-6 lg:gap-0 lg:flex-wrap -mx-2 mb-10 mt-8 ">
      {items.map((it, indx) => {
        return (
          <div
            key={indx}
            className={`flex-[0_1_20%] ${
              indx == 0 || indx == 1 || indx == 2
                ? 'lg:flex-[0_1_33.333%] '
                : 'lg:flex-[0_1_50%] '
            } text-center px-2 flex ${
              (indx + 1) % 2 == 1 ? 'flex-col' : 'flex-col-reverse'
            }  ${indx == 4 ? 'sm:flex-[0_1_100%] ' : 'sm:flex-[0_1_50%]'}`}
          >
            <div className="mb-4">
              <div className="overflow-hidden mb-4">
                <a
                  href="#"
                  className={`_imgAdaptiv pb-[156%] flex  ${
                    indx == 4 ? 'sm:pb-[70%] ' : ''
                  }`}
                >
                  <img
                    src={it.img.big}
                    alt="ss"
                    className={`object-cover   object-center  transform hover:scale-110 transition-transform duration-500 ease-in-out`}
                  />
                </a>
              </div>
              <GategoriesLink>{it.name.big}</GategoriesLink>
            </div>
            <div className="mb-4">
              <div className="overflow-hidden mb-4">
                <img
                  src={it.img.small}
                  alt="ss"
                  className="object-cover object-center transform scale-[1.2] translate-y-[10%] hover:scale-[1.3] transition-transform duration-500 ease-in-out"
                />
              </div>
              <GategoriesLink>{it.name.small}</GategoriesLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};
