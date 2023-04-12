import tw from 'tailwind-styled-components';

export const BottomNavigationMenu = tw.div`
 flex 
 justify-between 
 flex-col 
 w-full
 lg:hidden
 dark:bg-[#1c1c1c]
 bg-white
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  items-center
  justify-center
  space-x-2
  pt-1
  pb-3
`;

export const NavigationMenu = tw.div`
`;

export const AuthHolder = tw.ul`
  flex
  flex-row
  w-full
  items-center
  space-x-2
  mx-3
  mt-5
  mb-1
`;
