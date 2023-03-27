import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  dark:bg-[#343434]
  dark:text-[#cdcdcd]
  bg-[#f9f9fb]
  text-[#4e4e4e]
  w-full
  border-t
  border-zinc-600
  py-3
`;

export const LogoHolder = tw.div`
  flex
  flex-start
  w-full
`;

export const LinkHolder = tw.div`
  flex
  flex-row
  w-full
  items-center
  justify-start
  py-2
  space-x-5
  mx-6
`;

export const InsideContainer = tw.div`
  flex
  flex-col
  w-full
`;

export const SmallText = tw.p`
  text-xs
  text-center
`;

export const SmallLinkText = tw.p`
  text-xs
  hover:underline
  underline-offset-2
  cursor-pointer
`;

export const IconContainer = tw.div`
  flex 
  items-center 
  justify-center
`;

export const IconHolder = tw.div`
  relative
  group
  pb-2
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
