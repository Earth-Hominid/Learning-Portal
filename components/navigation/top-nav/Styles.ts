import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  bg-white
  dark:bg-[#1c1c1c]
  w-full
  border-b
  dark:border-b-gray-400
  border-gray-400
  sticky 
  top-0
`;

export const InsideContainer = tw.div`
  flex
  flex-row
  items-center
  justify-between
`;

export const IconContainer = tw.div`flex
  flex-row
  flex-1
  w-full
  items-center
  text-lg
  space-x-5
  justify-end
  mr-2
  text-gray-800`;

export const DropDownContainer = tw.div`
  hidden
  lg:flex
  flex-1
  flex-start
  space-x-5
  ml-5
`;

export const ActionButtonHolder = tw.div`
  flex
  flex-row
  space-x-1
  items-center
  justify-center
  dark:text-[#cdcdcd]
  text-black
  dark:hover:bg-[#1B324C]
  rounded-lg
  cursor-pointer
  p-2
  lg:p-3
`;

export const LinkText = tw.h3`
  font-interval
  font-semibold
  tracking-wide
  whitespace-nowrap
`;

export const RelativeContainer = tw.div`
  relative
  group
`;

export const AbsoluteContainer = tw.div`
  hidden
  group-hover:flex
  blur-sm
  absolute
  rounded-lg
  -inset-0.5
  bg-black
  opacity-90
  group-hover:opacity-100
  transition
  group-hover:duration-300
  duration-500
`;

export const StyledButton = tw.button`
  relative  
  group
  dark:text-[#cdcdcd]
  dark:hover:bg-[#858585]
  text-black
  rounded-lg
  p-1
  mx-auto
  hover:rounded-lg
  flex
  items-center
  justify-center
  border
  border-transparent
hover:border-black
hover:text-black
  transition-all
  duration-300
  ease-linear
  hover:shadow-lg
`;

export const ActionButtonContainer = tw.div`
  flex
  flex-row
  items-center
  space-x-3
`;
