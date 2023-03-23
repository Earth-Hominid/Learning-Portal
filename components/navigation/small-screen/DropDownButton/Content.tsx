import Link from 'next/link';
import Item from './Item';

import { Content } from './Styles';

interface Props {
  heading?: string;
  link?: string;
}

const Content: React.FC<Props> = ({ heading, link }) => {
  return (
    <Content>
      <li>
        <Link href={`${link}`}>
          <Item heading={heading} />
        </Link>
      </li>
    </Content>
  );
};

export default Content;
