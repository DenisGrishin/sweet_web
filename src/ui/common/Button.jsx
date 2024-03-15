const circleIconStyles =
  'px-[0px] py-[0px] w-[50px] h-[50px] flex  justify-center items-center';

const colorsBgStyles = {
  beige: 'bg-beigeColor',
  pink: 'bg-pinkColor',
  blackColor: 'bg-blackColor',
  grayColor: 'bg-grayColor',
  white: 'bg-white',
  darkGray: 'bg-darkGray',
};

export const Button = ({
  children,
  onClick,
  hasCircleIconStyles = '',
  colorKey = 'white',
  otherStyle = '',
  hasSquareBtn = '',
  borderBtn = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={` ${otherStyle} ${hasCircleIconStyles && circleIconStyles} ${
        colorKey && colorsBgStyles[colorKey]
      } ${hasSquareBtn ? 'rounded-[4px]' : 'rounded-[250px]'} ${
        borderBtn && 'border border-pinkColor text-pinkColor'
      }`}
    >
      {children}
    </button>
  );
};
