import Link from 'next/link';

interface childrenInterface {
  children?: React.ReactNode;
}

import {
  MainWrapper,
  InnerContainer,
  SideBarContainer,
  MainContentContainer,
  SideBarTopNav,
  TopList,
  TopListItem,
  SideBarTitle,
} from './Styles';

const MainColumns: React.FC<childrenInterface> = ({ children }) => {
  return (
    <MainWrapper>
      <InnerContainer>
        <SideBarContainer id="sidebar">
          <SideBarTopNav aria-label="Neste artigo">
            <section>
              <header>
                <SideBarTitle>Neste artigo</SideBarTitle>
                <TopList>
                  <Link href="#relevance">
                    <TopListItem>Relevância Hortifrúti</TopListItem>
                  </Link>
                  <Link href="#reference">
                    <TopListItem>Referências</TopListItem>
                  </Link>
                </TopList>
              </header>
            </section>
          </SideBarTopNav>
        </SideBarContainer>
        <div id="main-content-container" className="flex flex-1 flex-col">
          <MainContentContainer id="main-content-container">
            {children}
          </MainContentContainer>
        </div>
      </InnerContainer>
    </MainWrapper>
  );
};

export default MainColumns;
