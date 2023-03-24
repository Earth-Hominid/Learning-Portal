import tw from 'tailwind-styled-components';

export const ArticlesContainer = tw.div`
  flex
  flex-start
  flex-col
  gap-4
  p-4
  dark:bg-[#1b1b1b]
  min-w-[20rem]
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

export const ImageContainer = tw.div`
  max-w-[10rem]
  xs:max-w-[14rem]
  h-auto 
`;

export const TopContainer = tw.div`
  flex
  flex-row
  space-x-4
`;

export const CardContainer = tw.div`
  mt-8
  border-b
`;

export const Subheading = tw.h3`
  tracking-wider
  text-[#ff8600]
  dark:text-yellow-300
  text-[9px]
`;

export const Heading = tw.h2`
  text-[#1b1b1b]
  dark:text-white
  text-[18px]
  font-merriweather
`;

export const Description = tw.p`
  text-[#1b1b1b]
  dark:text-white
  text-[14px]
  tracking-wider
  xs:text-base
  font-montserrat
  pt-8
  pb-20
`;
