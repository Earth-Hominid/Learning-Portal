import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex 
  flex-col 
  w-full 
  h-full
`;

export const WelcomeContainer = tw.div`
  flex 
  flex-col 
  items-center 
  justify-center 
  dark:text-white 
  dark:bg-[#1B324C]
  bg-[#0085f2]/[.063] 
  w-full
`;

export const UserContainer = tw.div`
  mt-10 
  mb-20 
  mx-auto 
  flex 
  flex-col
`;
