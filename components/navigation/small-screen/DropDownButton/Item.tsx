import Link from 'next/link';
import {
  MenuContentContainer,
  MenuIcon,
  SubMenuItemHeading,
  SubMenuItemDescription,
} from './Styles';
import { SubMenuDescription } from '../../wide-screen/DropDownMenu/Styles';

interface Props {
  heading?: string;
  description?: string;
  link: string;
  iconColor?: string;
}

const Item: React.FC<Props> = ({ heading, link, iconColor, description }) => {
  return (
    <>
      <ul id="references-menu" className="ml-4">
        <li className="relative">
          <li className="w-full">
            <Link
              href={link}
              className="flex items-center border border-transparent dark:hover:bg-[#343434] hover:bg-[#f9f9fb] p-1 rounded-sm"
            >
              <MenuIcon className={iconColor}></MenuIcon>
              <MenuContentContainer>
                <SubMenuItemHeading>{heading}</SubMenuItemHeading>
                <SubMenuItemDescription>{description}</SubMenuItemDescription>
              </MenuContentContainer>
            </Link>
          </li>
        </li>
      </ul>
    </>
  );
};

export default Item;
