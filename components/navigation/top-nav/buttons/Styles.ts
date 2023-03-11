import tw from 'tailwind-styled-components';

export const StyledSignUpButton = tw.button`
  flex
  items-center
  justify-center
  dark:text-[#1b1b1b]
  dark:bg-[#fff]
  dark:hover:bg-[#CDCDCD]
  text-[#ffffff]
  bg-[#1b1b1b]
  hover:bg-[#696969]
  text-sm
  font-inter
  font-semibold
  mx-2
  py-2
  px-3
  rounded-md
  tracking-wide
  leading-4
`;

export const StyledOutButton = tw.button`
  dark:text-[#]
  dark:bg-[#]
  text-sm
  font-inter
  font-semibold
  mr-2
`;

export const StyledThemeButton = tw.button`
  hidden  
  lg:flex
  dark:hover:bg-[#858585]
  dark:text-[#CDCDCD]
  text-[#616161]
  hover:bg-[#CDCDCD]
  p-1
  flex-row
  justify-center
  items-center
  rounded-sm
  mx-2
`;

export const ThemeButtonText = tw.p`
  font-roboto
  text-sm
  font-bold
  ml-1
`;

export const LogButton = tw.button`
  flex
  items-center
  py-2 
  px-1 
  bg-transparent
  text-[#6a6a6a]
  dark:text-
`;
