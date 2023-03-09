import TopBar from './header/TopBar';
import BottomBar from './header/BottomBar';
import ToolBar from './header/ToolBar';

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <TopBar />
      <BottomBar />
      <ToolBar />
    </>
  );
};

export default Header;
