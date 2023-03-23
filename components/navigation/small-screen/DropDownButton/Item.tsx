import Link from 'next/link';
import { ContentList, MenuContentContainer, MenuIcon } from './Styles';

interface Props {
  heading?: string;
  description?: string;
  link: string;
  iconColor?: string;
}

const Item: React.FC<Props> = ({ heading, link, iconColor }) => {
  return (
    <>
      <ul id="references-menu" className="ml-4">
        <li className="relative">
          <li className="w-full">
            <Link
              href={link}
              className="flex items-center border border-transparent dark:hover:bg-[#343434] hover:bg-[#f9f9fb] p-1"
            >
              <MenuIcon className={iconColor}></MenuIcon>
              <MenuContentContainer>
                <h4>{heading}</h4>
              </MenuContentContainer>
            </Link>
          </li>
        </li>
      </ul>
    </>
  );
};

export default Item;
