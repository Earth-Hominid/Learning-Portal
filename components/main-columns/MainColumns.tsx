import TopList from './TopList';

interface HeadingInterface {
  id: string;
  title: string;
}

interface HeadingsInterface {
  children?: React.ReactNode;
  headings: HeadingInterface[];
}

import {
  MainWrapper,
  SideBarContainer,
  MainContentContainer,
  SideBarQuickLinks,
  InsideContainer,
  SideBarTitle,
  TopNav,
  TopDocument,
} from './Styles';

type Props = {};

const MainColumns: React.FC<HeadingsInterface> = ({ headings, children }) => {
  return (
    <>
      <MainWrapper id="main-wrapper">
        <InsideContainer>
          <SideBarContainer id="sidebar-container">
            <TopNav>
              <TopDocument>
                <header>
                  <SideBarTitle>Neste artigo</SideBarTitle>
                </header>
                <TopList headings={headings} />
              </TopDocument>

              <ul className="space-y-5"></ul>
            </TopNav>
          </SideBarContainer>
          <MainContentContainer id="main-content-container">
            {children}
          </MainContentContainer>
        </InsideContainer>
      </MainWrapper>
    </>
  );
};

export default MainColumns;
