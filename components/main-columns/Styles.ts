import tw from 'tailwind-styled-components';

export const MainWrapper = tw.div`
  grid
  gap-12
  bg:text-white
  md:grid-template-columns: 1fr 2fr
  lg:grid-template-columns: 1fr 2.5fr 15rem
  pl-[1.5rem]
  pr-[3rem]
`;

export const SideBarContainer = tw.div`
  contents
  top-20
  sticky
  overflow-auto
  max-h-[calc(100vh-3rem)]
  dark:text-white
`;

export const MainContentContainer = tw.div`
  flex
  flex-col
  py-12
  w-full
  min-h-[80vh]
  dark:text-white
`;

export const SideBarQuickLinks = tw.aside`
  flex 
  flex-col
  w-full
  xl:sticky
  xl:max-h-[calc(100vh-6rem)]
`;
