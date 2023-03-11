import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  flex-row
  items-center
  cursor-pointer
  mx-2
`;

export const LogoTextHolder = tw.div`
  hidden
  lg:flex
  flex-row
  items-baseline
`;

export const Title = tw.p`
  font-montserrat
  tracking-tight
  text-lg
  whitespace-nowrap
  dark:text-[#cdcdcd]
  text-black
`;

export const Subtitle = tw.div`
dark:text-yellow-100
text-[#ff8c00]
  pl-1
  rounded-sm
  font-schoolbell
  text-xs
`;
