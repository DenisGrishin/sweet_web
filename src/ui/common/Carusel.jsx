import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';

export const Carusel = ({ children, propsCarusel }) => {
  const {
    propsNavigate,
    propsPagination,
    slidesView,
    spaceslide,
    hasAutoHeight,
    breakpoints,
  } = propsCarusel;

  return (
    <Swiper
      autoHeight={hasAutoHeight}
      modules={[Navigation, Pagination]}
      spaceBetween={spaceslide}
      slidesPerView={slidesView}
      navigation={propsNavigate}
      loop={true}
      breakpoints={breakpoints}
      pagination={propsPagination}
      className="swiper_container"
    >
      {children}
    </Swiper>
  );
};
