import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      name: 'Торты',

      subCategories: [
        { name: 'Детские торты' },
        { name: 'Свадебные торты' },
        { name: 'Праздничные торты' },
        { name: 'Диетические торты' },
        { name: 'Корпоративные торты' },
        { name: 'Торты для влюбленных' },
        { name: 'Торты с фотопечатью' },
      ],
    },
    { name: 'Безе' },
    {
      name: 'Макарoны',

      subCategories: [
        { name: 'Классические' },
        { name: 'Цветные' },
        { name: 'Свадебные' },
        { name: 'Тематические' },
      ],
    },
    {
      name: 'Имбирное печенье',

      subCategories: [
        { name: 'Новый год' },
        { name: 'Наборы' },
        { name: 'Свадебные' },
      ],
    },
    { name: 'Кейк попсы' },
    { name: 'Эклеры' },
    {
      name: 'Капкейки',
      subCategories: [
        { name: 'Праздничные' },
        { name: 'Для влюбленных' },
        { name: 'Свадебные капкейки' },
      ],
    },
    { name: 'Зефир' },
    {
      name: 'Пирожные',

      subCategories: [{ name: 'Тарталетки' }, { name: 'Чизкейки' }],
    },
    { name: 'Донаты' },
  ],
  brands: [
    { name: 'Eszett' },
    { name: 'Friedrich' },
    { name: 'Ipsilon' },
    { name: 'Khajro' },
    { name: 'Lamed' },
    { name: 'Zeta' },
    { name: 'Омикрон' },
    { name: 'Сампи' },
  ],
  navLinks: [
    { name: 'Главная' },
    { name: 'О компании', subMenu: [{ name: 'Отзавы' }, { name: 'новости' }] },
    { name: 'Акции' },
    { name: 'Доставка' },
    { name: 'Оплата' },
    { name: 'Напишите нам' },
    { name: 'Контакты' },
    { name: 'Мультиссылка' },
  ],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = uiSlice.actions;

export default uiSlice.reducer;
