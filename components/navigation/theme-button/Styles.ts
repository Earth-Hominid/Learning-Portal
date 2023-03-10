import tw from 'tailwind-styled-components';

export const StyledButton = tw.button`
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

export const ButtonText = tw.p`
  font-roboto
  text-sm
  font-bold
  ml-1
`;
