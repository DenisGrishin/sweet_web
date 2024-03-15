import { Transition } from '@headlessui/react';
import React from 'react';

import { useClickAway } from '@uidotdev/usehooks';

export const BurgerTransition = ({ children, closeBurger, showBurger }) => {
  const ref = useClickAway(() => {
    closeBurger();
  });
  return (
    <Transition show={showBurger}>
      <Transition.Child
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100 bg-black/25"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed top-0 left-0 bg-black/25 w-full h-full"
      ></Transition.Child>

      <Transition.Child
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        className={`w-[374px] md:w-[300px] overflow-auto h-full  fixed left-0 top-0 z-50 bg-white `}
        ref={ref}
      >
        {children}
      </Transition.Child>
    </Transition>
  );
};
