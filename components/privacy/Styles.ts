import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  w-full
  mx-auto
  dark:bg-[#1c1c1c]
  bg-[#f9f9fb]
  text-[#1b1b1b]
  dark:text-white
`;

export const InsideContainer = tw.div`
  flex  
  flex-col
  space-y-5
  p-5
  max-w-5xl
  mx-auto
`;

export const HeadingContainer = tw.div`
  border-b
  flex
  justify-center
  items-center
  py-5
`;

export const MainHeading = tw.h1`
  font-montserrat
  font-bold
  text-xl
  text-center
  whitespace-nowrap
`;

export const BodyContainer = tw.div`
  mx-2
  md:px-10
  space-y-5
`;

export const UpdatedText = tw.p`
  italic
`;

export const BodySubtitle = tw.h3`
  font-bold
  font-montserrat
  uppercase
`;

export const BodyText = tw.p`
  font-opensans
  text-xs
  md:text-sm
`;

export const DiscList = tw.ul`
  p-4
  list-disc
  leading-relaxed
`;

export const NoStyleList = tw.ul`
  p-4
  leading-relaxed
  font-semibold

`;
