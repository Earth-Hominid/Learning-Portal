import Link from 'next/link';
import Logo from '@/components/navigation/logo/Logo';
import { useRouter } from 'next/router';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

import {
  HeaderSpan,
  IconContainer,
  IconHolder,
  LinkContainer,
  PageFooter,
  LinkText,
  SmallText,
} from './Styles';
interface Props {
  englishMode: boolean | null;
}

const Navigation: React.FC<Props> = ({ englishMode }) => {
  const router = useRouter();
  const href = router.pathname + '#header';
  return (
    <>
      <PageFooter>
        <div className="md:hidden">
          <Logo />
        </div>

        <LinkContainer>
          <Link href="/about">
            <LinkText>{englishMode ? 'About' : 'Sobre nós'}</LinkText>
          </Link>
          <Link href="/privacy">
            <LinkText>{englishMode ? 'Privacy' : 'Privacidade'}</LinkText>
          </Link>
        </LinkContainer>
        <SmallText>
          © 2022-2023 Rede Bazar Souza. All Rights Reserved.
        </SmallText>
        <IconContainer>
          <Link href={href}>
            <IconHolder>
              <ArrowUpCircleIcon className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer" />
              <HeaderSpan>
                {englishMode ? 'Back to top' : 'Voltar ao topo'}
              </HeaderSpan>
            </IconHolder>
          </Link>
        </IconContainer>
      </PageFooter>
    </>
  );
};

export default Navigation;
