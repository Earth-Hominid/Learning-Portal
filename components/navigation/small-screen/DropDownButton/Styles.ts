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

export const MenuIcon = tw.div`
  h-8 
  mr-[0.75rem]
  relative
  w-[0.2rem]
`;

export const MenuContentContainer = tw.div`
  dark:text-white 
  text-[#1b1b1b] 
  h-full 
  w-full 
  text-sm 
`;

export const SubMenuItemHeading = tw.h4`
  font-semibold
`;

export const SubMenuItemDescription = tw.p`
  mt-[0.25rem]
  text-xs
  hidden
  md:flex
`;
