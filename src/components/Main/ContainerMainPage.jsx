import React from 'react';

import { MainCarusel } from './../../ui/Main/MainCarusel';
import { Gategories } from './../../ui/Main/Gategories';
import { ItemCarusel } from '../../ui/Main/ItemCarusel';
import { Container } from '../../ui/common/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementSpecial,
  decrementSpecial,
  incrementNew,
  decrementNew,
} from './mainPageSlice';
import { ShopsCandyCarusel } from '../../ui/Main/ShopsCandyCarusel';
import { TitleMain } from './../../ui/Main/TitleMain';
import { NewsCarusel } from '../../ui/Main/NewsCarusel';
import { CustomerReviews } from '../../ui/Main/CustomerReviews';

export const ContainerMainPage = () => {
  const specialCaruselList = useSelector(
    (state) => state.mainPageStore.specialCaruselList
  );
  const newCaruselList = useSelector(
    (state) => state.mainPageStore.newCaruselList
  );
  const newsCaruselList = useSelector((state) => state.mainPageStore.newsList);
  const reviewsCaruselList = useSelector(
    (state) => state.mainPageStore.reviewsList
  );

  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <MainCarusel />
        <Gategories />
        <TitleMain>Cпецпредложения</TitleMain>
        <ItemCarusel
          caruselList={specialCaruselList}
          increment={(id) => dispatch(incrementSpecial({ id }))}
          decrement={(id) => dispatch(decrementSpecial({ id }))}
        />
        <ShopsCandyCarusel />
        <TitleMain>Новинки</TitleMain>
        <ItemCarusel
          caruselList={newCaruselList}
          increment={(id) => dispatch(incrementNew({ id }))}
          decrement={(id) => dispatch(decrementNew({ id }))}
        />
        <NewsCarusel caruselList={newsCaruselList} />
        <TitleMain alignLeft={true}>Впечатления клиентов</TitleMain>
        <CustomerReviews caruselList={reviewsCaruselList} />
      </Container>
    </>
  );
};
