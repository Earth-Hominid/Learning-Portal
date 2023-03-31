import tw from 'tailwind-styled-components';

export const Container = tw.div`
  my-8 
  text-[#4e4e4e]
  dark:text-[#cdcdcd] 
  dark:bg-[#1A2630]
  p-4 
  relative 
  mx-0 
  rounded-md 
  border-l-4 
  border-l-[#0085f2]
  dark:border-l-[#5e9eff]
  bg-[#e6f3fd] 
  font-inter 
  text-base
  border-b
  border-r
  border-t
  dark:border-b-[#696969]
  dark:border-t-[#696969]
  dark:border-r-[#696969]
  border-b-[#cdcdcd]
  border-t-[#cdcdcd]
  border-r-[#cdcdcd]
  shadow-sm
`;

export const LineItem = tw.li`
  p2-2
  ml-10
  my-2
  list-disc
`;
