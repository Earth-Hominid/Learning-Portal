import tw from 'tailwind-styled-components';

export const Container = tw.div`
  relative
  inline-block
  group
`;

export const DropButton = tw.button`
  flex
  flex-row
  space-x-1
  items-center
  justify-center
  text-[#4e4e4e]
  hover:text-[#0085F2]
  hover:bg-[#0085f2]/[.063]
  dark:hover:bg-[#1B324C]
  dark:text-[#cdcdcd]
  dark:hover:text-[#8CB4FF]
  rounded-lg
  cursor-pointer
  p-2
  lg:p-3
  font-interval
  font-semibold
  tracking-wide
  whitespace-nowrap
`;

export const Content = tw.ul`
  flex-col
  hidden
  absolute
  group-hover:flex
  dark:border-[#858585]
  dark:bg-[#1B1B1B]
  dark:text-white
  font-inter
  max-w-md
  p-2
  whitespace-nowrap
  border
  bg-white
  duration-300 
  rounded-md
  z-50
  text-base
  text-left
`;

export const Item = tw.div`
  flex
  flex-row
  dark:hover:bg-[#343434]
  hover:bg-[#0085F2]/[.063]
  dark:text-white
  text-black
  w-full
  p-3
  items-center
  rounded-md
  font-inter
  text-sm
`;

export const SubMenuIcon = tw.div`
  h-[32px]
  mr-[12px]
  relative
  w-[3.2px]
  dark:bg-[#5E9EFF]
  dark:hover:bg-[#8CB4FF]
  bg-[#0085F2]
  hover:bg-[#2969C2]
`;

export const SubMenuContentContainer = tw.div`
  
`;

export const SubMenuHeading = tw.h4`
  text-sm
  text-left
  text-black
  dark:text-white
  font-semibold
  font-inter
`;

export const SubMenuDescription = tw.p`
  text-xs
  mt-1
`;
