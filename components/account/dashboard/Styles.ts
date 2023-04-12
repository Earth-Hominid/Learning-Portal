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

export const ReportContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  w-full
`;

export const UserContainer = tw.div`
  mt-10 
  mb-20 
  mx-auto 
  flex 
  flex-col
`;

export const FeaturedArticlesContainer = tw.div`
  flex
  flex-start
  flex-col
  gap-4
  p-4
  dark:bg-[#1b1b1b]
`;

export const FeaturedHeading = tw.h2`
  text-[#1b1b1b]
  dark:text-white
  text-xl
  md:text-2xl
  font-inter
  mb-2
  tracking-tight
`;

export const TileContainer = tw.div`
  grid
  gap-4
  grid-flow-row
  max-w-[52rem]
  md:grid-cols-2
  p-5
`;

export const ArticleTileContainer = tw.div`
  dark:border-[#858585]
  dark:border
  dark:text-white
  text-[#1b1b1b]
  rounded-md
  flex
  flex-col
  p-4
  min-h-[8rem]
  shadow-md
  hover:shadow-lg
`;

export const TileTitle = tw.h3`
  flex
  text-lg
  font-semibold
  mb-2
`;

export const ContentDescription = tw.p`
  relative
  overflow-hidden
  overflow-x-hidden
  overflow-y-hidden
  max-h-14
  leading-5
  text-sm
  text-[#4e4e4e]
  dark:text-[#cdcdcd]
`;

export const TileFooter = tw.div`
  flex
  justify-between
  items-center
  mt-auto 
  text-[#0085F2]
  dark:text-[#8CB4FF]
`;
