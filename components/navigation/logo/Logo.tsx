import Link from 'next/link';
import Image from 'next/image';
import { Container, Title, Subtitle, LogoTextHolder } from './Styles';
import LightLogo from '@/public/logo.png';

const Logo = () => {
  return (
    <Link href="/">
      <Container>
        <Image src={LightLogo} alt="logo" className="h-16 w-auto" />
        <LogoTextHolder>
          <Title>Rede BS</Title>
          <Subtitle>docs</Subtitle>
        </LogoTextHolder>
      </Container>
    </Link>
  );
};

export default Logo;
