import tw from 'tailwind-styled-components';

export const MainPageContentArticle = tw.article`
  text-[#1b1b1b]
  dark:text-[#f8f9fa]
  dark:bg-[#1b1b1b]
    p-12
    text-base
    leading-7
    dark:accent-[#5e9eff]
    accent-[#0085f2]
    break-words
`;

export const ArticleTitle = tw.h1`
  text-3xl
  font-semibold
  mb-8
`;

export const Content = tw.div`
  text-base
  leading-7
`;

export const ContentParagraph = tw.p`
  mb-7
`;

export const SectionTitle = tw.h2`
  text-2xl
  font-semibold
  mb-8
`;

export const DescriptionTerm = tw.dt`
  dark:text-[#8cb4ff]
  text-[#0069C1]
  underline
  hover:no-underline
  underline-offset-2
`;

export const BoldText = tw.span`
  dark:text-[#8cb4ff]
  text-[#0069C1]
  font-bold
`;

export const DescriptionDefinition = tw.dd`
  my-4
  ml-4  
`;

export const QuoteContainer = tw.div`
  my-8
  p-4
  text-[#1b1b1b]
  dark:text-white 
  dark:bg-[#343434]
   relative 
  mx-0 
  rounded-md 
  border-l-4
  bg-[#f9f9fb] 
  font-inter 
  text-base
  border
  dark:border-[#858585]
  border-[#cdcdcd]
  shadow-md
  `;
