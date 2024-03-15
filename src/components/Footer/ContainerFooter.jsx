import React from 'react';
import { Footer } from '../../ui/Footer/Footer';
import { useSelector } from 'react-redux';

export const ContainerFooter = () => {
  const linkList = useSelector((state) => state.uiStore.navLinks);
  const categoriesList = useSelector((state) => state.uiStore.categories);

  return <Footer linkList={linkList} categoriesList={categoriesList} />;
};
