import { useContext } from 'react';
import { LanguageContext } from '@/context/language-context';
import CollectionCard from './CollectionCard';

import {
  FeaturedArticlesContainer,
  TileContainer,
  FeaturedHeading,
} from './Styles';

const ReportSection = () => {
  const { englishMode } = useContext(LanguageContext);

  return (
    <FeaturedArticlesContainer className="featured-articles">
      <TileContainer className="tile-container">
        <CollectionCard
          heading={
            englishMode
              ? 'Monthly Sales Reports'
              : 'Relatórios Mensais de Vendas'
          }
          description={
            englishMode
              ? 'View monthly sales reports by store.'
              : 'Visualize relatórios mensais de vendas por loja.'
          }
          styles="dark:bg-[#343434]
  bg-[#f9f9fb]"
          englishMode={englishMode}
        />
        <CollectionCard
          heading={
            englishMode
              ? 'Monthly Category Sales'
              : 'Vendas mensais por categoria'
          }
          description={
            englishMode
              ? 'View monthly category sales by store'
              : 'Visualize vendas mensais por categoria por loja'
          }
          englishMode={englishMode}
        />
        <CollectionCard
          heading={
            englishMode ? 'Annual Sales Reports' : 'Relatórios Anuais de Vendas'
          }
          description={
            englishMode
              ? 'View annual sales by store'
              : 'Visualizar relatórios anuais de vendas por loja'
          }
          englishMode={englishMode}
        />
      </TileContainer>
    </FeaturedArticlesContainer>
  );
};

export default ReportSection;
