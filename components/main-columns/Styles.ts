import tw from 'tailwind-styled-components';

export const MainWrapper = tw.div`
  bg-white 
  dark:bg-[#1b1b1b]
`;

export const InsideContainer = tw.div`
  flex 
  flex-row 
  space-x-4
`;

export const SideBarContainer = tw.div`
  hidden
  md:max-w-[250px] 
  flex-col
  flex-1
  justify-start 
  min-h-screen 
  bg-white 
  dark:bg-[#1b1b1b]
  dark:text-white 
  overflow-y-auto
  lg:max-w-xs 
  overflow-x-hidden
  max-h-screen
  scroll
  md:flex
  border-r
  dark:border-gray-400
  border-gray-300
`;

export const SideBarTitle = tw.h2`
  text-lg
  mb-4
  leading-6
  tracking-wide
  dark:text-[#cdcdcd]
  text-[#4e4e4e]
  text-left
`;

export const MainContentContainer = tw.div`
  bg-white 
  dark:bg-[#1b1b1b] 
  w-auto 
  min-h-screen 
  mx-10
`;

export const SideBarQuickLinks = tw.aside`
  
`;

export const TopNav = tw.nav`
  flex 
  flex-col 
  items-left 
  py-10
  px-4
`;

export const TopDocument = tw.section`
  mb-8
  relative
`;

export const TopList = tw.ul`
  text-sm
  dark:text-[#cdcdcd]
  text-[#4e4e4e]
`;
