import { createSlice } from '@reduxjs/toolkit';
import specialCaruselImg_1 from '../../img/main/mainPage/SpecialItemCarusel/1.webp';
import specialCaruselImg_2 from '../../img/main/mainPage/SpecialItemCarusel/2.webp';
import specialCaruselImg_3 from '../../img/main/mainPage/SpecialItemCarusel/3.webp';
import specialCaruselImg_4 from '../../img/main/mainPage/SpecialItemCarusel/4.webp';
import specialCaruselImg_5 from '../../img/main/mainPage/SpecialItemCarusel/5.webp';
import specialCaruselImg_6 from '../../img/main/mainPage/SpecialItemCarusel/6.webp';
import specialCaruselImg_7 from '../../img/main/mainPage/SpecialItemCarusel/7.webp';
import specialCaruselImg_8 from '../../img/main/mainPage/SpecialItemCarusel/8.webp';
// =============================================
import newCaruselImg_1 from '../../img/main/mainPage/newItemCarusel/1.webp';
import newCaruselImg_2 from '../../img/main/mainPage/newItemCarusel/2.webp';
import newCaruselImg_3 from '../../img/main/mainPage/newItemCarusel/3.webp';
import newCaruselImg_4 from '../../img/main/mainPage/newItemCarusel/4.webp';
import newCaruselImg_5 from '../../img/main/mainPage/newItemCarusel/5.webp';
import newCaruselImg_6 from '../../img/main/mainPage/newItemCarusel/6.webp';
import newCaruselImg_7 from '../../img/main/mainPage/newItemCarusel/7.webp';
import newCaruselImg_8 from '../../img/main/mainPage/newItemCarusel/8.webp';
// =============================================
import newsCaruselImg_1 from '../../img/main/mainPage/newsCarusel/1.webp';
import newsCaruselImg_2 from '../../img/main/mainPage/newsCarusel/2.webp';
import newsCaruselImg_3 from '../../img/main/mainPage/newsCarusel/3.webp';
import newsCaruselImg_5 from '../../img/main/mainPage/newsCarusel/5.webp';
// =============================================
import avatorUset_1 from '../../img/main/mainPage/CustomerReviewsCarusel/1.webp';
import avatorUset_2 from '../../img/main/mainPage/CustomerReviewsCarusel/2.webp';
import avatorUset_3 from '../../img/main/mainPage/CustomerReviewsCarusel/3.webp';

const initialState = {
  specialCaruselList: [
    {
      name: 'Торт "Веселый  Цирк"',
      price: '1 800',
      discount: '1 746',
      img: specialCaruselImg_1,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '1',
    },
    {
      name: 'Торт Грёзы',
      price: '4 500',
      discount: '',
      img: specialCaruselImg_2,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '2',
    },
    {
      name: 'Торт Элеганс',
      price: '5 950',
      discount: '',
      img: specialCaruselImg_3,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '3',
    },
    {
      name: 'Торт "Юбилейный каприз"',
      price: '11 000',
      discount: '',
      img: specialCaruselImg_4,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '4',
    },
    {
      name: 'Торт "Избушка"',
      price: '1 200',
      discount: '1 140',
      img: specialCaruselImg_5,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '5',
    },
    {
      name: 'Торт "Шахматная партия"',
      price: '2 140',
      discount: '',
      img: specialCaruselImg_6,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '6',
    },
    {
      name: 'Набор макарун',
      price: '1 200',
      discount: '940',
      img: specialCaruselImg_7,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '7',
    },
    {
      name: 'Капкейки Сердечный День  ',
      price: '150',
      discount: '125',
      img: specialCaruselImg_8,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '8',
    },
  ],
  newCaruselList: [
    {
      name: 'Новогодний набор',
      price: '2 140 ₽',
      discount: '',
      img: newCaruselImg_1,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '1',
    },
    {
      name: 'Макаруны голубые кокосовые',
      price: '4 500',
      discount: '',
      img: newCaruselImg_2,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '2',
    },
    {
      name: 'Макаруны Мечты сбываются',
      price: '1 190',
      discount: '',
      img: newCaruselImg_3,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '3',
    },
    {
      name: 'Торт "Маленькая минни"',
      price: '12 050',
      discount: '',
      img: newCaruselImg_4,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '4',
    },
    {
      name: 'Торт Акцент',
      price: '1 200',
      discount: '',
      img: newCaruselImg_5,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '5',
    },
    {
      name: 'Зефир классический',
      price: '235 ',
      discount: '',
      img: newCaruselImg_6,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '6',
    },
    {
      name: 'Набор макарун',
      price: '1 200',
      discount: '940',
      img: newCaruselImg_7,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '7',
    },
    {
      name: 'Капкейки с фисташком',
      price: '350',
      discount: '',
      img: newCaruselImg_8,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '8',
    },
    {
      name: 'Капкейки с ягодами',
      price: '165',
      discount: '',
      img: newCaruselImg_8,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '8',
    },
    {
      name: 'Фруктовый чизкейк',
      price: '380',
      discount: '',
      img: newCaruselImg_8,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '8',
    },
    {
      name: 'Капкейк с цветочками',
      price: '145',
      discount: '',
      img: newCaruselImg_8,
      count: 0,
      alt: 'Вай скидка',
      link: '#',
      id: '8',
    },
  ],
  newsList: [
    {
      date: '13.01.2022',
      title: 'Бесплатная дегустация начинок',
      description: 'Приглашаем всех желающих на бесплатную дегустацию.',
      img: newsCaruselImg_1,
      link: '#',
    },
    {
      date: '22.04.2022',
      title: 'Готовимся к празднику',
      description:
        'Bесь февраль при заказе донат с сайта Вы получаете гарантированную скидку в 5%!',
      img: newsCaruselImg_2,
      link: '#',
    },
    {
      date: '29.02.2022',
      title: 'С чего начинается торт?',
      description:
        'Может быть с венчика для взбивания крема? Или с приготовления бисквита? А может с кухонного комбайна? Нет!',
      img: newsCaruselImg_3,
      link: '#',
    },
    {
      date: '5.01.2022',
      title: 'Что такое капкейки?',
      description:
        'Чаще всего встретить капкейки можно в меню ресторанов или кондитерских.',
      img: newsCaruselImg_5,
      link: '#',
    },
  ],
  reviewsList: [
    {
      avatorUser: avatorUset_1,
      nameUser: 'Ирина',
      reviewUser:
        'Как то заказывала тут набор макаронс с фотопечатью в подарок и осталась очень довольна. Сервис, отношение к клиенту, дизайн, вкус - все на высшем уровне! Теперь всем своим друзьям и знакомым рекомендую этот магазин',
    },
    {
      avatorUser: avatorUset_2,
      nameUser: 'Влад',
      reviewUser:
        'Хочу выразить огромную благодарность за Ваши капкейки! Свежие, нежные и внешне красивые! Моей девушке этот подарок очень понравился! Спасибо!',
    },
    {
      avatorUser: avatorUset_3,
      nameUser: 'Афанасий',
      reviewUser:
        'Вкусно, красиво, оперативно, вежливо, с заботой о клиенте! Чего ещё желать?',
    },
  ],
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    decrementSpecial: (state, action) => {
      state.specialCaruselList.map((el) => {
        if (el.count <= 0) {
          el.count = 0;
          return el;
        }
        if (el.id === action.payload.id) {
          return el.count--;
        }
        return el;
      });
    },
    incrementSpecial: (state, action) => {
      state.specialCaruselList.map((el) => {
        if (el.id === action.payload.id) {
          return el.count++;
        }
        return el;
      });
    },
    decrementNew: (state, action) => {
      state.newCaruselList.map((el) => {
        if (el.count <= 0) {
          el.count = 0;
          return el;
        }
        if (el.id === action.payload.id) {
          return el.count--;
        }
        return el;
      });
    },
    incrementNew: (state, action) => {
      state.newCaruselList.map((el) => {
        if (el.id === action.payload.id) {
          return el.count++;
        }
        return el;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decrementSpecial,
  incrementSpecial,
  incrementNew,
  decrementNew,
} = mainPageSlice.actions;

export default mainPageSlice.reducer;
