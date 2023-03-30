import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  flex
  flex-start
  flex-col
  gap-4
  p-8
  dark:bg-[#1b1b1b]
`;

export const Subheading = tw.p`
  text-sm
  dark:text-yellow-100
  text-[#FF8F0E]
  ml-4
`;

export const CardContainer = tw.div`
  grid
  gap-4
  grid-flow-row
  max-w-[35rem]
  md:grid-cols-2
`;

export const ArticleTileContainer = tw.div`
 flex 
 flex-start 
 flex-col 
 mt-4 
 max-w-full 
 p-5 
 relative 
 text-base 
 leading-7 
 break-words
 border-2 
 rounded-xl
 dark:text-[#f8f9fa] 
 dark:border-[#585b63] 
 dark:hover:bg-[#303136]
 dark:hover:border-[#5e9eff]
 border-[#d2d3d7]
 hover:bg-[#f8faff]
 hover:border-[#3740ff]
 transition 
 duration-300
`;

export const TileTitle = tw.h4`
  flex
  flex-1
  flex-end
  text-lg
  md:text-xl
  leading-6
  break-words
  font-semibold
  dark:text-[#f8f9fa]
  text-[#191919]
`;

export const ContentParagraph = tw.p`
  mt-3
  max-w-full
  relative
  leading-6
  break-words
  dark:text-[#d2d3d7]
  text-[#585B63]
  overflow-hidden
`;
