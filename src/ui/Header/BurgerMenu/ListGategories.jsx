import { Disclosure, Transition } from '@headlessui/react';
import PlusIcon from '../../../img/icons/plus.svg?react';
import MinusIcon from '../../../img/icons/minus.svg?react';
import useExpandableWrapper from '../../../hooks/useExpandableWrapper ';
import { useEffect, useRef, useState, Fragment, createRef } from 'react';

export const ListGategories = ({ subMenu, children, id, togglePanels }) => {
  return (
    <Disclosure>
      {(panel) => {
        const { open, close } = panel;
        return (
          <>
            <li
              className={` group font-medium relative fontMono  ${
                open ? 'text-black' : 'text-grayText'
              }   cursor-pointer flex items-center gap-x-5 mb-5`}
            >
              <a href="#" className="group-hover:text-black">
                {children}
              </a>

              {subMenu && (
                <Disclosure.Button
                  className="h-6 w-4"
                  onClick={() => {
                    togglePanels({ ...panel, key: id });
                  }}
                >
                  {open ? (
                    <MinusIcon />
                  ) : (
                    <PlusIcon className="fill-[#a2a1a1] group-hover:fill-[#000]" />
                  )}
                </Disclosure.Button>
              )}
            </li>
            {subMenu && (
              <ExpandableWrapper>
                <Disclosure.Panel as="ul">
                  {subMenu.map(({ name }, indx) => {
                    return (
                      <li className=" pl-5 text-xs font-medium fontMono mb-5 cursor-pointer">
                        {name}
                      </li>
                    );
                  })}
                </Disclosure.Panel>
              </ExpandableWrapper>
            )}
          </>
        );
      }}
    </Disclosure>
  );
};

const ExpandableWrapper = ({ children }) => {
  const [childHeight, setChildHeight] = useState('');
  const refCur = createRef();

  useEffect(() => {
    if (refCur.current) {
      const height = refCur.current.clientHeight;
      setChildHeight(height);
    }
  }, [refCur]);
  const onEnter = (element) => {
    if (!element) return;
    return `h-[${childHeight}px] opacity-0`;
  };

  const onEntered = () => {
    return `h-auto opacity-100`;
  };

  const onExit = (element) => {
    if (!element) return;
    return `h-[${childHeight}px] opacity-100`;
  };

  const onExiting = () => {
    return `h-0 opacity-0`;
  };

  return (
    <Transition
      as="div"
      enter="transition duration-300 ease-out all"
      enterFrom={`${onEnter()} `}
      enterTo={`${onEntered()}`}
      leave="transition duration-75 ease-out all"
      leaveFrom={`${onExit()}`}
      leaveTo={`${onExiting()}`}
    >
      <div ref={refCur}> {children}</div>
    </Transition>
  );
};
