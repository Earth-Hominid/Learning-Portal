import tw from 'tailwind-styled-components';

export const Container = tw.div`
  mx-3
  border-solid
  border-t-[0.1rem]
  dark:border-[#858585]
  dark:bg-[#1B1B1B]
  dark:text-white
  py-[0.5rem]
  font-inter
`;

export const AccordianSummary = tw.summary`
  flex
  items-center
  h-[2rem]
  cursor-pointer
  list-none
  ml-4
  mr-2
`;

export const SummaryTitle = tw.h2`
  dark:text-[#CDCDCD]
  text-[#616161]
  font-regular
  flex
  flex-1
`;

export const IconHolder = tw.div`
  h-6 
  w-6 
  dark:text-[#CDCDCD]
  text-[#616161]
  hover:bg-yellow-50
  dark:hover:bg-[#343434]
  rounded-3xl
  p-1
`;

export const ContentList = tw.ul`
  my-[0.5rem]
  ml-[1.5rem]
  break-words
  cursor-pointer
  `;

export const AccordianText = tw.p`
  p-2
  text-sm
  dark:text-[#EEEEEE]
  text-[#616161]
  tracking-normal
  leading-6
  hover:bg-yellow-50
  dark:hover:bg-[#343434]
  rounded-md
`;

export const MenuIcon = tw.div`
  h-8 
  mr-[0.75rem]
  relative
  w-[0.2rem]
  bg-[#00b755]
  hover:bg-[#009A46]/[.7]
  dark:bg-[#00B755]/[.7]
  dark:hover:bg-[#00B754] 
`;

export const MenuContentContainer = tw.div`
  dark:text-white 
  text-[#1b1b1b] 
  h-full 
  w-full 
  text-sm 
`;
