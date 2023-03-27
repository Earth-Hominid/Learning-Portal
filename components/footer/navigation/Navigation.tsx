import Link from 'next/link';
import Logo from '@/components/navigation/logo/Logo';
import { FooterColumn, FooterGrid, PageFooter } from './Styles';
interface Props {
  englishMode: boolean | null;
}

const Navigation: React.FC<Props> = ({ englishMode }) => {
  return (
    <>
      <PageFooter>
        <FooterGrid>
          <Logo />
          <FooterColumn>
            <Link href="/about">
              <span>{englishMode ? 'About' : 'Sobre nós'}</span>
            </Link>
          </FooterColumn>
          <FooterColumn>
            <Link href="/privacidade">
              <span>{englishMode ? 'Privacy' : 'Privacidade'}</span>
            </Link>
          </FooterColumn>
        </FooterGrid>
      </PageFooter>
    </>
  );
};

export default Navigation;
