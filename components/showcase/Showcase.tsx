import {
  HeadingText,
  TextContainer,
  MainSection,
  SubheadingText,
} from './Styles';

const Showcase = () => {
  return (
    <>
      <MainSection>
        <TextContainer>
          <HeadingText>
            Iluminando inteligência de negócios e pesquisa de varejo.
          </HeadingText>
          <SubheadingText>
            A <b className="font-extrabold text-gray-900">Rede BS docs</b> está
            comprometida com uma visão de negócios aprofundada que atende ao
            crescimento de nossos funcionários.
          </SubheadingText>
        </TextContainer>
      </MainSection>
    </>
  );
};

export default Showcase;
