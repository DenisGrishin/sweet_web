import React from 'react';
import { Button } from '../common/Button';
import CheckIcon from '../../img/icons/check.svg?react';

export const Subscribe = () => {
  return (
    <div className="bg-beigeColor px-9 py-8 flex lg:flex-col gap-4 mb-10 lg:-mx-4">
      <div className="flex-[0_1_50%] lg:text-center">
        <h3 className="font-bold fontMono mb-2.5 text-4xl sm:text-3xl">
          Подпишитесь!
        </h3>
        <div className=" font-xl  text-[#00000050]">
          Будьте в курсе акций и новинок нашего магазина
        </div>
      </div>
      <div className="flex-[0_1_50%]">
        <form>
          <div className="mb-4 flex gap-3 sm:flex-col ">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-[250px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
            />
            <Button colorKey="pink" otherStyle="text-[#fff]  px-7 py-2">
              Подписаться
            </Button>
          </div>

          <div class="inline-flex items-center">
            <label
              class="relative flex items-center p-3 rounded-full cursor-pointer sm:self-start"
              htmlFor="link"
            >
              <input
                type="checkbox"
                class="before:content['']   peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pinkColor checked:bg-beigeColor checked:before:bg-gray-900 "
                id="link"
              />
              <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <CheckIcon />
              </span>
            </label>
            <label
              class="mt-px fontMono text-sm font-light text-gray-700 cursor-pointer select-none"
              htmlFor="link"
            >
              Нажимая "Подписаться", я даю согласие на обработку
              <a href="#" class="leading-relaxed text-pinkColor ">
                &nbsp;персональных данных
              </a>
              .
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
