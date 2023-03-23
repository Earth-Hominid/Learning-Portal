import tw from 'tailwind-styled-components';

export const AccordianContainer = tw.div`
  mx-3
  border-solid
  border-t-[0.1rem]
  border-[#cdcdcd]
  dark:border-[#3d3d3d]
  py-[0.5rem]
  font-inter
`;

export const AccordianSummary = tw.summary`
  flex
  items-center
  h-[2rem]
  cursor-pointer
  list-none
  ml-4
  mr-2
  text-color-[#475569]
`;

export const SummaryTitle = tw.h2`
  dark:text-[#CDCDCD]
  text-[#616161]
  font-regular
  flex
  flex-1
`;

export const AccordianContentContainer = tw.div`
  my-[0.5rem]
  ml-[1.5rem]
  break-words
  cursor-pointer
  `;

export const AccordianText = tw.p`
  p-2
  text-sm
  dark:text-[#EEEEEE]
  text-[#616161]
  tracking-normal
  leading-6
  hover:bg-yellow-50
  dark:hover:bg-[#343434]
  rounded-md
`;

export const IconHolder = tw.div`
  h-6 
  w-6 
  dark:text-[#CDCDCD]
  text-[#616161]
  hover:bg-yellow-50
  dark:hover:bg-[#343434]
  rounded-3xl
  p-1
`;
