import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  flex 
  flex-row 
  flex-start 
  items-center 
  w-full 
  border-b 
  border-b-gray-400
  bg-white
  dark:bg-[#1b1b1b]
  dark:border-b-gray-400
  sticky 
  top-0
  dark:text-[#cdcdcd]
`;

export const InsideContainer = tw.div`
  border-l 
  border-l-gray-200
  dark:border-l-gray-400
  pl-4 
  md:text-lg 
  tracking-wide 
  font-montserrat
`;
