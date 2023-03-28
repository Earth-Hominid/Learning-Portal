import tw from 'tailwind-styled-components';

export const PageFooter = tw.div`
  flex 
  flex-col
  w-full
  py-4
  dark:bg-[#343434]
  dark:text-[#cdcdcd]
  bg-[#f9f9fb]
  text-[#4e4e4e]
  md:justify-center
`;

export const LinkContainer = tw.div`
  flex
  flex-row
  w-full
  items-center
  justify-start
  md:justify-center
  space-x-5
  mx-6
  md:mx-auto
`;

export const LinkText = tw.p`
  text-xs
  hover:underline
  underline-offset-2
  cursor-pointer
`;

export const FooterColumn = tw.div`
  flex 
  items-center
  justify-center
`;

export const SmallText = tw.p`
  text-xs
  text-left
  md:text-center
  mx-6
  mt-2
`;

export const IconContainer = tw.div`
  flex 
  items-center 
  justify-center
  mt-4
`;

export const IconHolder = tw.div`
  relative
  group
`;

export const HeaderSpan = tw.span`
  absolute 
  group-hover:scale-100
  w-auto 
  p-2 
  m-2 
  min-w-max 
  bottom-3
  left-10
  md:bottom-4
  rounded-md
  shadow-md 
  text-white 
  bg-[#1d1d1d] 
  text-xs 
  font-bold 
  transition-all 
  duration-300 
  scale-0 
  origin-left
`;
