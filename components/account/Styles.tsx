import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  min-h-screen 
  font-montserrat
  border-b
  border-b-gray-200
  dark:text-white
`;

export const InsideContainer = tw.div`
  lg:grid
  lg:grid-cols-2
`;

export const SmallScreenContainer = tw.div`
  order-last
`;

export const LargeScreenContainer = tw.div`
  hidden
  lg:flex
  flex-col
  justify-top
  items-center
  bg-[#F9F9FB]
  dark:bg-[#1B324C]
  h-screen
  w-full
`;

export const HeadingContainer = tw.div`
  flex 
  flex-col 
  mx-4 
  p-4
  lg:pt-12
`;

export const StyledLabel = tw.label`
  text-sm
  tracking-wide
  pt-2
  pb-1 
text-gray-600
dark:text-gray-300
`;

export const StyledButton = tw.button`
  py-2
  px-12
  rounded-sm
  mt-6
  border-2
  border-black
  text-lg
  font-bold
  transition
  duration-300
  hover:bg-[#fe]
  dark:text-[#1b1b1b]
  dark:bg-[#FDF335]
  dark:hover:bg-[#FDF335]/[0.8]
  hover:bg-[#FDF335]
`;
