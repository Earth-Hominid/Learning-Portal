import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  bg-white
  dark:bg-[#1b1b1b]
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

export const MainNav = tw.nav`
  hidden
  lg:flex
  flex-1
  flex-start
  space-x-5
  ml-5
`;

export const IconContainer = tw.div`
  flex
  flex-row
  items-center
  justify-end
  mr-2
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
  rounded-full
  -inset-0.5
  dark:hover:bg-[#858585]
  dark:bg-[#858585]
  bg-[#FDF335]
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
  dark:bg-[#1C1C1C]
  dark:hover:border-[#1c1c1c]
  dark:hover:text-yellow-100
  bg-white
  hover:text-black
    rounded-full
    p-2
    flex
    items-center
    justify-center
    border
    border-transparent
  hover:border-black
    transition-all
    duration-300
    ease-linear
    hover:shadow-lg
`;

export const AuthHolder = tw.ul`
  hidden
  lg:flex
  flex-row
  items-center
  space-x-2
  mx-3
`;
