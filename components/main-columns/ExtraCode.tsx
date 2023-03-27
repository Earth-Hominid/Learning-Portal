const ExtraCode = () => {
  return (  <div className="h-screen flex overflow-hidden bg-gray-100">
        {/* Sidebar */}
        <div
          className={`${
            showSidebar ? 'block' : 'hidden'
          } md:block md:w-64 bg-white md:fixed md:h-full`}
        >
          <div className="md:overflow-y-auto md:scrollbar-hide">
            {/* Sidebar Content */}
            <div className="p-6">
              <h1 className="text-lg font-medium mb-4">Sidebar Content</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          className=" z-50 md:hidden block h-10 w-10 bg-gray-700 text-white rounded-full focus:outline-none"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {showSidebar ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
            <h1 className="text-2xl font-medium mb-4">Page Content</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              ullamcorper nulla ac massa laoreet feugiat. Proin a quam euismod,
              sollicitudin metus quis, consequat lectus. Nunc congue massa eget
              metus tincidunt, ac blandit nunc fermentum.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="hidden absolute mobile-menu overflow-none flex w-full">
        <div className="h-screen w-64 bg-opacity-90 bg-gray-300">
          mobile menu
          <button
            onclick="toggleMobileMenu()"
            className="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200"
          >
            toggle mobile
          </button>
        </div>
        <div className="w-full h-screen bg-opacity-80 bg-indigo-300"></div>
      </div>
      <div className="flex flex-col h-screen">
        <nav className="flex bg-pink-500 h-16 items-center">
          Full Width Header{' '}
          <button
            onclick="toggleSidebar()"
            className="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200"
          >
            toggle sidebar
          </button>
          <button
            onclick="toggleMobileMenu()"
            className="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200"
          >
            toggle mobile
          </button>
        </nav>

        <div className="flex flex-1 overflow-hidden">
          <aside className="hidden sm:block bg-green-300 w-32 overflow-y-auto">
            Sidebar content (I should hide on small screens but still be
            toggleable)
          </aside>

          <main className="flex flex-1 bg-blue-300 overflow-y-auto paragraph px-4"></main>
        </div>
        <div className="flex bg-yellow-300">Footer</div>
      </div> */}
      {/* <div id="main-wrapper" className="min-h-screen w-full flex flex-row">
        <div
          id="left-sidebar-"
          className="min-h-screen min-w-[200px] bg-pink-600"
        ></div>
        <div
          id="main-content"
          className="min-h-screen min-w-[600px] bg-blue-600"
        ></div>
        <div
          id="right-sidebar"
          className="min-h-screen min-w-[200px] bg-purple-600"
        ></div>
      </div> */}
      ;)
}