import Logo from '@/components/navigation/logo/Logo';

type Props = {};

const Navigation = ({ englishMode }: { englishMode: boolean | null }) => {
  return (
    <nav
      id="header"
      className="flex flex-row flex-start items-center w-full border-b border-b-gray-200 "
    >
      <Logo />

      <div className="border-l border-l-gray-200 pl-4 md:text-lg tracking-wide font-montserrat">
        {englishMode ? 'Employee Program' : 'Programa Funcionário'}
      </div>
    </nav>
  );
};

export default Navigation;
