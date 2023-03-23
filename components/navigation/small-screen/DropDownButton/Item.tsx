import Link from 'next/link';
import { ContentList } from './Styles';

interface Props {
  heading?: string;
  description?: string;
}

const Item: React.FC<Props> = ({ heading }) => {
  return (
    <>
      <ul className="">
        <li className="w-full">
          <Link
            href="/pt-br/hortifruti"
            className="items-center border border-transparent dark:text-white text-[#1b1b1b] h-full w-full p-4 text-sm"
          >
            <div className="bg-[#00b755 h-8 relative w-[0.2rem] mr-[0.75rem]"></div>
            <div>
              <h4>{heading}</h4>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Item;
