import tw from 'tailwind-styled-components';

export const PageFooter = tw.div`
  py-8 
  px-4 
  relative 
  dark:bg-[#343434]
  dark:text-[#cdcdcd]
  bg-[#f9f9fb]
  text-[#4e4e4e]
`;

export const FooterGrid = tw.div`
  grid
  gap-4
  grid-cols-2
`;

export const FooterColumn = tw.div`
  flex 
  items-center
  justify-center
`;
