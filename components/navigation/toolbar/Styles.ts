import tw from 'tailwind-styled-components';

export const Container = tw.div`
  w-full
  flex
  flex-1
  items-center
  dark:bg-[#343434]
  bg-[#F9F9FB]
  border-b
  dark:border-gray-400
  border-gray-300
  py-0.5
`;

export const SpacingContainer = tw.div`
  flex 
  flex-row 
  flex-1 
  items-center
  dark:text-[#cdcdcd]
  text-gray-600
  font-montserrat
  space-x-2
  text-sm
  md:text-base
  md:space-x-4
  py-1
  px-2
  mx-2
  md:mx-10
  max-w-5xl
`;

export const MainPageText = tw.p`
  cursor-pointer
  hover:underline
  underline-offset-2
`;
export const CurrentPageText = tw.p`
 font-semibold
 underline
 underline-offset-2
 dark:text-[#cdcdcd]
 text-black
`;

export const IconHolder = tw.div`
  w-4
  h-4
  dark:text-[#cdcdcd]
  text-gray-600
`;
