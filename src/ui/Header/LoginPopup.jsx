import { useState } from 'react';

import { useBoolean } from './../../hooks/useBoolean';
import Popup from '../common/Popup';
import { Button } from '../common/Button';
import UserIcon from '../../img/icons/userIconLogin.svg?react';
import PasswordIcon from '../../img/icons/passwordLoinIcon.svg?react';
import YaBtnIcon from '../../img/icons/yaButton.svg?react';
import GoogleIcon from '../../img/icons/googleLogin.svg?react';
import VkIcon from '../../img/icons/vkLogin.svg?react';
import MailIcon from '../../img/icons/mailLogin.svg?react';
import OkIcon from '../../img/icons/okLogin.svg?react';

const LoginPopup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useBoolean(false);
  return (
    <div className="xl:order-2 order-3">
      <Button
        onClick={setIsOpen.toggle}
        otherStyle="font-light px-7 py-2"
        colorKey="beige"
      >
        Кабинет
      </Button>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen.toggle}>
        <div className="text-center ">
          <div className="">
            <form action="">
              <div className="space-y-5 px-10 pt-8 pb-11">
                <h3 className="font-bold text-2xl mb-8">Кабинет</h3>
                <div className="flex items-center border rounded-[10px] border-solid border-[#e5e5e5] py-4 px-5 space-x-2">
                  <UserIcon />
                  <input
                    className="w-full	placeholder placeholder:font-bold placeholder:text-[#000] pl-4 outline-none"
                    type="text"
                    placeholder="Логин"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                  />
                </div>
                <div className="flex items-center border rounded-[10px] border-solid border-[#e5e5e5] py-4 px-5 ">
                  <PasswordIcon />
                  <input
                    className="w-full	placeholder placeholder:font-bold placeholder:text-[#000] pl-4 outline-none"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="flex  gap-x-4 md:flex-col md:items-center md:gap-y-5 ">
                  <Button
                    colorKey="pink"
                    otherStyle="text-[#fff] font-bold px-7 py-2"
                  >
                    Оформить
                  </Button>
                  <div className="text-left grid ">
                    <a href="#" className="text-[#9f9f9f] text-xs leading-3 ">
                      Заблыли пароль?
                    </a>
                    <a
                      href="#"
                      className="font-medium border-b-[1px]  border-[#9f9f9f] text-[#262626] mb-1 "
                    >
                      Регистрация
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-10 pt-8 pb-11 bg-[#f9f9f9]">
                <h3 className="fontMono font-bold mb-3">
                  Также Вы можете войти через:
                </h3>
                <Button
                  colorKey="balackColor"
                  hasSquareBtn={true}
                  otherStyle="p-0 mb-5"
                >
                  <YaBtnIcon />
                </Button>
                <div className="flex space-x-3 justify-center">
                  <a className="rounded-[4px] w-11 h-11 bg-[#F2F2F2] " href="#">
                    {' '}
                    <GoogleIcon />
                  </a>
                  <a className="rounded-[4px] w-11 h-11 bg-[#2787F5] " href="#">
                    {' '}
                    <VkIcon />
                  </a>
                  <a className="rounded-[4px] w-11 h-11 bg-[#005FF9] " href="#">
                    {' '}
                    <MailIcon />
                  </a>
                  <a className="rounded-[4px] w-11 h-11 bg-[#F7931E] " href="#">
                    {' '}
                    <OkIcon />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default LoginPopup;
