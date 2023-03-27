import { useState } from 'react';

import {
  MainWrapper,
  SideBarContainer,
  MainContentContainer,
  SideBarQuickLinks,
} from './Styles';

type Props = {};

const MainColumns = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {};

  return (
    <>
      <div
        id="main-wrapper"
        className="min-h-screen bg-gray-200 dark:bg-[#454545]"
      >
        <div id="grid-wrapper" className="flex flex-row space-x-4">
          <div
            id="left-column"
            className="
                      hidden
                      md:flex
                      md:max-w-[250px] 
                      flex-col
                      flex-1
                      justify-start 
                      min-h-screen 
                      bg-white 
                      dark:bg-[#1b1b1b]
                      dark:text-white 
                      overflow-y-scroll
                      lg:max-w-xs 
                      overflow-x-hidden
                      scroll
                      "
          >
            <nav className="flex flex-col items-center py-10">
              <p className="text-3xl mb-5">List</p>
              <ul className="space-y-5">
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
                <li className="max-w-sm px-10 py-2 rounded-md border border-[#cdcdcd]">
                  <div>
                    <p>Item 1</p>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div
            id="right-column"
            className="bg-white dark:bg-[#1b1b1b] w-auto min-h-screen mx-10"
          ></div>
        </div>
      </div>
    </>
  );
};

export default MainColumns;
