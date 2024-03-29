import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
 w-full
 flex
 flex-col
 min-h-[250px]
 border-b
 dark:bg-[#1a1a1a]
 bg-[#f9f9fb]
 dark:border-[#858585]
 border-gray-400
`;

export const TextContainer = tw.div`
  m-6
  sm:mx-12
  sm:mt-8
  md:mx-20
  md:mt-8
  lg:mx-40
`;

export const HeadingText = tw.h1`
  text-3xl
  sm:text-4xl
  md:text-5xl
  lg:text-6xl
  font-extrabold
  leading-tight
  tracking-wide
  font-tinos
  text-left
  dark:text-white
  text-gray-900
`;

export const SubheadingText = tw.h2`
  dark:text-white
  text-gray-600
  font-montserrat
  leading-relaxed
  md:mt-10
  lg:mt-12
  my-5
  text-left
  md:text-lg
`;
