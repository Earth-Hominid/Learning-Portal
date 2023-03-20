import {
  HeadingText,
  TextContainer,
  MainSection,
  SubheadingText,
} from './Styles';

const AboutShowcase = ({ englishMode }: { englishMode: boolean | null }) => {
  return (
    <>
      <MainSection>
        <TextContainer>
          <HeadingText>
            {englishMode
              ? 'Illuminating business intelligence and retail research.'
              : 'Iluminando inteligência de negócios e pesquisa de varejo.'}
          </HeadingText>
          {englishMode ? (
            <SubheadingText>
              <b className="font-extrabold text-gray-900">Rede BS docs</b> is
              commited to an in-depth business vision that caters to our
              employees growth.
            </SubheadingText>
          ) : (
            <SubheadingText>
              A <b className="font-extrabold text-gray-900">Rede BS docs</b>{' '}
              está comprometida com uma visão de negócios aprofundada que atende
              ao crescimento de nossos funcionários.
            </SubheadingText>
          )}
        </TextContainer>
      </MainSection>
    </>
  );
};

export default AboutShowcase;
