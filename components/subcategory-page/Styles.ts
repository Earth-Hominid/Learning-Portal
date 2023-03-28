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
  h-auto
  w-32
  xs:w-48
  sm:min-w-[14rem]
  md:w-80
  lg:w-96
`;

export const TopContainer = tw.div`
  flex
  flex-row
  space-x-4
  max-w-md
`;

export const CardContainer = tw.div`
  mt-8
  border-b
`;

export const Subheading = tw.h3`
  tracking-widest
  text-[#00b755]
  dark:text-[#00B755]/[.7]
  hover:text-[#009A46]/[.7]
  dark:hover:text-[#00B754]
  text-[9px]
  font-semibold
  pb-1
`;

export const Heading = tw.h2`
  text-[#1b1b1b]
  dark:text-white
  hover:underline
hover:text-[#009A46]/[.7]
dark:hover:text-[#00B754]
  underline-offset-2
  text-[18px]
  sm:text-[22px]
  font-merriweather
  font-semibold
`;

export const TopDescription = tw.p`
  hidden
  sm:flex
  text-gray-700
  dark:text-white
  tracking-wider
  text-sm
  font-montserrat
  pt-8
  pb-20
`;

export const BottomDescription = tw.p`
  text-[#1b1b1b]
  dark:text-white
  text-[14px]
  tracking-wider
  xs:text-sm
  font-montserrat
  pt-8
  pb-20
  sm:hidden
`;
