import tw from 'tailwind-styled-components';

export const MainPageContentArticle = tw.article`
  text-[#1b1b1b]
  dark:text-white
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

export const DescriptionDefinition = tw.dd`
  my-4
  ml-4  
`;
