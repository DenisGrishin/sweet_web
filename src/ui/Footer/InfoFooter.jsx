import React from 'react';
import { TitleFooter } from '../common/TitleFooter';
import { Button } from '../common/Button';
import AdressIcon from '../../img/icons/adress.svg?react';
import TelIcon from '../../img/icons/telFooter.svg?react';
import MailIcon from '../../img/icons/mailFooter.svg?react';
import FaceBookIcon from '../../img/icons/facebook.svg?react';
import VkIcon from '../../img/icons/vk.svg?react';
import TwitterIcon from '../../img/icons/twitter.svg?react';
import InstagramIcon from '../../img/icons/instagram.svg?react';
import PayOneIcon from '../../img/icons/pay1.svg?react';
import PayTwoIcon from '../../img/icons/pay2.svg?react';
import PayThreeIcon from '../../img/icons/pay3.svg?react';
import PayFourIcon from '../../img/icons/pay5.svg?react';

export const InfoFooter = () => {
  return (
    <div className="flex-[0_1_50%] md:flex-[1_1_100%] md:pl-5 mb-5">
      <div className="flex flex-wrap">
        <BlockContact />
        <BlockSocial />
        <BlockPayment />
      </div>
    </div>
  );
};

const BlockContact = () => {
  return (
    <div className="flex-[0_1_50%] md:flex-[1_1_100%] space-y-7 mb-5">
      <TitleFooter>Наши контакты</TitleFooter>
      <div className="flex gap-x-5">
        <div className="mb-1">
          <AdressIcon />
        </div>
        <div>г. Москва, Ленинский проспект, дом, строение</div>
      </div>
      <div className="flex gap-x-5 ">
        <div className="mb-1">
          <TelIcon />
        </div>
        <div>
          <div className="grid ">
            <a
              href="tel:80001111111"
              className="text-lg font-medium leading-[1.25]"
            >
              8 (000) 111-11-11
            </a>
            <a
              href="tel:+7000000000"
              className="text-lg font-medium leading-[1.25]"
            >
              +7 (000) 000-00-00
            </a>
          </div>
          <span className="text-sm font-light text-[#ffffff60]">
            C 09:00 до 22:00
          </span>
        </div>
      </div>
      <div className="flex gap-x-5 ">
        <div>
          <MailIcon />
        </div>
        <a href="mailto:login@domain.ru" className="text-[#ffffff60]">
          login@domain.ru
        </a>
      </div>
    </div>
  );
};

const BlockSocial = () => {
  return (
    <div className="flex-[0_1_50%] ">
      <TitleFooter>Мы в социальных сетях:</TitleFooter>
      <div className="flex gap-4">
        <Button colorKey="darkGray" hasCircleIconStyles={true}>
          <FaceBookIcon className="w-7 h-7 " />
        </Button>
        <Button colorKey="darkGray" hasCircleIconStyles={true}>
          <VkIcon className="w-7 h-7" />
        </Button>
        <Button colorKey="darkGray" hasCircleIconStyles={true}>
          <TwitterIcon className="w-7 h-7" />
        </Button>
        <Button colorKey="darkGray" hasCircleIconStyles={true}>
          <InstagramIcon className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
};

const BlockPayment = () => {
  return (
    <div className="flex-[1_1_100%] ">
      <TitleFooter>Способы оплаты</TitleFooter>
      <div className="flex gap-x-4">
        <div className="bg-white p-2">
          <PayOneIcon className="w-10 h-15" />
        </div>
        <div className="bg-white p-2">
          <PayTwoIcon className="w-10 h-15" />
        </div>
        <div className="bg-white p-2">
          <PayThreeIcon className="w-10 h-15" />
        </div>
        <div className="bg-white p-2 ">
          <PayFourIcon className="w-10 h-15" />
        </div>
      </div>
    </div>
  );
};
