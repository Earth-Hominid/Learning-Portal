import {
  HeadingText,
  TextContainer,
  MainSection,
  SubheadingText,
} from './Styles';

interface Props {
  englishMode: boolean | null;
}

const Showcase: React.FC<Props> = ({
  englishMode,
}: {
  englishMode: boolean | null;
}) => {
  return (
    <>
      <MainSection>
        <TextContainer>
          <HeadingText>
            {englishMode
              ? 'Exploring insights in business intelligence and retail market research.'
              : 'Explorando insights em inteligência empresarial e pesquisa de mercado varejista.'}
          </HeadingText>
          {englishMode ? (
            <SubheadingText>
              <b className="font-extrabold dark:text-white text-gray-900">
                Rede BS docs
              </b>{' '}
              is commited to an in-depth business vision that caters to our{' '}
              <b className="underline dark:decoration-[#FDF335] underline-offset-2">
                employees
              </b>{' '}
              growth.
            </SubheadingText>
          ) : (
            <SubheadingText>
              A{' '}
              <b className="font-extrabold dark:text-white text-gray-900">
                Rede BS docs
              </b>{' '}
              está comprometida com uma visão de negócios aprofundada que atende
              ao crescimento de nossos{' '}
              <b className="underline dark:decoration-[#FDF335]">
                funcionários
              </b>
              .
            </SubheadingText>
          )}
        </TextContainer>
      </MainSection>
    </>
  );
};

export default Showcase;
