import tw from 'tailwind-styled-components';

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
`;

export const ArticleTileContainer = tw.div`
  border
  dark:border-[#858585]
  border-[#cdcdcd]
  dark:text-white
  text-[#1b1b1b]
  rounded-md
  flex
  flex-col
  p-4
`;

export const SubHeadingLinkText = tw.p`
  font-inter
  font-semibold
  text-sm
  hover:underline
  dark:decoration-[#FDF335]
  underline-offset-2
`;

export const TileTitle = tw.h3`
  flex
  flex-1
  flex-end
  text-lg
  font-semibold
  mb-2
  hover:underline
  dark:decoration-[#FDF335]
  underline-offset-2
`;

export const ContentParagraph = tw.p`
  relative
  overflow-hidden
  overflow-x-hidden
  overflow-y-hidden
  max-h-14
  leading-5
`;
