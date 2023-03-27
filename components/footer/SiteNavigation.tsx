import Link from 'next/link';
import Image from 'next/image';
import LightLogo from '@/public/logo.png';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';

interface Props {
  englishMode: boolean | null;
}

import {
  MainContainer,
  InsideContainer,
  SmallText,
  LinkHolder,
  SmallLinkText,
  IconContainer,
  IconHolder,
  HeaderSpan,
} from './Styles';

const SiteNavigation: React.FC<Props> = ({ englishMode }) => {
  return (
    <>
      <MainContainer>
        <div className="flex flex-col flex-start">
          <div className="w-full flex flex-row flex-start space-x-20 mx-2">
            <Link href="/">
              <Image src={LightLogo} alt="logo" className="h-16 w-auto" />
            </Link>
            <LinkHolder>
              <Link href="/about">
                <SmallText>{englishMode ? 'About' : 'Sobre nós'}</SmallText>
              </Link>
            </LinkHolder>
            <LinkHolder>
              <Link href="/about">
                <SmallText>{englishMode ? 'Privacy' : 'Privacidade'}</SmallText>
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
          </div>

          <SmallText>
            © 2022-2023 Rede Bazar Souza. All Rights Reserved.
          </SmallText>
        </div>
      </MainContainer>
    </>
  );
};

export default SiteNavigation;
