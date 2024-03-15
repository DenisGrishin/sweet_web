import BurgerBtnIcon from '../../../img/icons/burgerMenu.svg?react';
import CloseIcon from '../../../img/icons/close.svg?react';
import { BurgerTransition } from './BurgerTransition';
import { useBoolean } from '../../../hooks/useBoolean';
import { TabBurger } from './TabBurger';
import { NavMenu } from '../NavMenu';

export const BurgerMenu = () => {
  const [isShowing, setIsShowing] = useBoolean(false);

  return (
    <div>
      <button onClick={() => setIsShowing.on()}>
        <BurgerBtnIcon />
      </button>

      <BurgerTransition
        closeBurger={() => setIsShowing.off()}
        showBurger={isShowing}
      >
        <div className="flex justify-end my-7 mr-5 ">
          <button onClick={() => setIsShowing.off()}>
            <CloseIcon className="w-6 h-6 " />
          </button>
        </div>
        <TabBurger />
        <div className="bg-[#f9f9f9] hidden xl:block">
          <NavMenu />
        </div>
      </BurgerTransition>
    </div>
  );
};
