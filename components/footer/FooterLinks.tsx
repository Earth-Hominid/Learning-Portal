import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import Logo from '../navigation/logo/Logo';

interface Props {
  englishMode: boolean | null;
}

import {
  MainContainer,
  TopRow,
  LogoHolder,
  InsideContainer,
  SmallText,
  LinkHolder,
  SmallLinkText,
  IconContainer,
  IconHolder,
  HeaderSpan,
} from './Styles';

const FooterLinks: React.FC<Props> = ({ englishMode }) => {
  return (
    <MainContainer>
      <Logo />
      <LinkHolder>
        <Link href="/about">
          <SmallLinkText>{englishMode ? 'About' : 'Sobre nós'}</SmallLinkText>
        </Link>
        <Link href="/privacidade">
          <SmallLinkText>
            {englishMode ? 'Privacy' : 'Privacidade'}
          </SmallLinkText>
        </Link>
      </LinkHolder>

      <IconContainer>
        <Link href="#header">
          <IconHolder>
            <ArrowUpCircleIcon className="h-8 w-8 md:h-10 md:w-10 rounded-full cursor-pointer" />
            <HeaderSpan>
              {englishMode ? 'Back to top' : 'Voltar ao topo'}
            </HeaderSpan>
          </IconHolder>
        </Link>
      </IconContainer>
      <InsideContainer>
        <SmallText>
          © 2022-2023 Rede Bazar Souza. All Rights Reserved.
        </SmallText>
      </InsideContainer>
    </MainContainer>
  );
};

export default FooterLinks;
