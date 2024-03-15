import React, { Fragment, useState } from 'react';
import { NavCategories } from './NavCategories';
import { Tab, Transition } from '@headlessui/react';
import { ContainerNavBrands } from '../../../components/Header/ContainerNavBrands';
import { NavMenu } from '../NavMenu';

export const TabBurger = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tab.Group
      selectedIndex={tabIndex}
      onChange={setTabIndex}
      className="pt-7 pr-10 pl-12"
      as="div"
    >
      <Tab.List className="font-medium text-lg fontMono flex justify-between mb-5">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`${
                selected ? 'text-pinkColor underline' : ''
              } hover:text-pinkColor transition-colors duration-300 `}
            >
              Каталог
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`${
                selected ? 'text-pinkColor underline' : ''
              } hover:text-pinkColor transition-colors ease duration-300 `}
            >
              По бренду
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panel>
        <Transition
          appear
          show={tabIndex == 0}
          enter="transition-opacity esey duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity esey duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <NavCategories />
        </Transition>
      </Tab.Panel>
      <Tab.Panel>
        <Transition
          appear
          show={tabIndex == 1}
          enter="transition-opacity esey duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity esey duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ContainerNavBrands />
        </Transition>
      </Tab.Panel>
    </Tab.Group>
  );
};
