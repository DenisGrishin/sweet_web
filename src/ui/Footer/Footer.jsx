import { ItemTop } from './ItemTop';
import { Container } from '../common/Container';
import { Subscribe } from './Subscribe';
import { NavFooter } from './NavFooter';
import { InfoFooter } from './InfoFooter';
import ItemFooterIconOne from '../../img/icons/itemFooter_1.svg?react';
import ItemFooterIconTwo from '../../img/icons/itemFooter_2.svg?react';
import ItemFooterIconThree from '../../img/icons/itemFooter_3.svg?react';
import ItemFooterIconFour from '../../img/icons/itemFooter_4.svg?react';
import ArrowUp from '../../img/icons/arrowUp.svg?react';

const items = [
  {
    icon: <ItemFooterIconOne />,
    title: 'Доступные цены',
    subTitle: 'акции и скидки',
  },
  {
    icon: <ItemFooterIconTwo />,
    title: 'Большой ассортимент',
    subTitle: 'более 1500 наименований',
  },
  {
    icon: <ItemFooterIconThree />,
    title: 'Бесплатная доставка',
    subTitle: 'по всей России',
  },
  {
    icon: <ItemFooterIconFour />,
    title: 'Скидки и акции',
    subTitle: 'постоянные скидки и акции',
  },
];

export const Footer = ({ linkList, categoriesList }) => {
  return (
    <footer>
      <Container>
        <div className="flex  justify-between flex-wrap gap-y-5 sm:flex-col my-10">
          {items.map((it, indx) => {
            return <ItemTop key={indx} item={it} />;
          })}
        </div>
      </Container>
      <div className="bg-[#222]">
        <Container>
          <Subscribe />
          <div className="text-[#fff] flex">
            <NavFooter linkList={linkList} categoriesList={categoriesList} />
            <InfoFooter />
          </div>
          <div className="flex justify-center pb-10">
            <button className="bg-pinkColor  rounded-full w-14 h-14 flex justify-center items-center ">
              <ArrowUp />
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
};
