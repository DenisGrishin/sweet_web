import { useState, useEffect } from 'react';

const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
const SCREEN_XL = 1200;
const SCREEN_XXL = 1400;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handelResize = (e) => {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener('resize', handelResize);

    return () => {
      window.removeEventListener('resize', handelResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
