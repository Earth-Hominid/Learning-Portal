import tw from 'tailwind-styled-components';

export const MainWrapper = tw.main`
  bg-white 
  dark:bg-[#1b1b1b]
  flex 
  flex-col
  h-screen
  mx-auto
  max-w-7xl
`;

export const InnerContainer = tw.div`
  flex 
  flex-1 
  overflow-hidden
`;

export const SideBarContainer = tw.div`
  hidden
  md:flex
  md:w-48
  lg:w-64
  p-4
  bg-white 
  dark:bg-[#1b1b1b]
  dark:text-white 
  overflow-y-auto
  overflow-x-hidden
  scroll
  border-r
  dark:border-gray-400
  border-gray-300
`;

export const SideBarTopNav = tw.nav`
  text-[#4e4e4e]
  dark:text-[#cdcdcd]
  text-left
  pt-8
  mb-4
`;

export const SideBarTitle = tw.h2`
  text-lg
  leading-6
  tracking-wide
`;

export const MainContentContainer = tw.div`
  bg-white 
  dark:bg-[#1b1b1b]
  flex 
  flex-1 
  overflow-y-auto
  paragraph
  mb-10
  scrollbar-hide
  max-w-4xl
  mx-auto
  px-4
`;

export const TopList = tw.ul`
  flex
  flex-col
  items-left
  my-4
  py-4
  px-4
  border-l-2
  border-[#cdcdcd]
  dark:border-[#858585]
  space-y-5
`;

export const TopListItem = tw.li`
  text-sm
  hover:text-[#0085f2]
  dark:hover:text-[#5e9eff]
    
`;
