import tw from 'tailwind-styled-components';

export const SearchForm = tw.form`
  flex 
  flex-1
  items-center
  space-x-2
  border
  border-[#cdcdcd]
  dark:border-yellow-100
  dark:hover:border-transparent
  rounded-full
  px-3
  py-0.5
  mb-2
  dark:bg-[#1c1c1c]
  active:border-[#FDF335]
  max-w-sm
  text-sm
  focus-within:border-transparent
  focus-within:ring
  dark:focus-within:ring-[#FDF335]
  hover:ring
  dark:hover:ring-[#FDF335]
  hover:border-transparent  
`;

export const IconHolder = tw.div`
  h-5
  w-5
  text-gray-500
  dark:text-yellow-100
`;

export const PlaceholderInput = tw.input`
  flex
  flex-1
  py-1
  px-2
  placeholder:text-[#cdcdcd]
  dark:placeholder:text-[#cdcdcd]
  text-[#616161]
  bg-white
  dark:text-yellow-50
  dark:bg-[#1c1c1c]
  focus:outline-none
  focus:ring-none
  rounded-full
`;

export const HiddenButton = tw.button``;
