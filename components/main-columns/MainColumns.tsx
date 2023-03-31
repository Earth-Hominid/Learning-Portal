import Link from 'next/link';

interface DatapointInterface {
  id: string;
  url: string;
  title: string;
}

interface Props {
  children?: React.ReactNode;
  props: Array<DatapointInterface>;
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

const MainColumns: React.FC<Props> = ({ props, children }) => {
  return (
    <MainWrapper>
      <InnerContainer>
        <SideBarContainer id="sidebar">
          <SideBarTopNav aria-label="Neste artigo">
            <section>
              <header>
                <SideBarTitle>Neste artigo</SideBarTitle>
                <TopList>
                  {props.datapoints.map((datapoint) => (
                    <div key={datapoint.id}>
                      <Link href={datapoint.url}>
                        <TopListItem>{datapoint.title}</TopListItem>
                      </Link>
                    </div>
                  ))}
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
