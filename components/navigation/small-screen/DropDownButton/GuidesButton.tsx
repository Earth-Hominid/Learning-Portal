import { useRef, useEffect, useState } from 'react';
import Item from './Item';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  buttonName: string;
  englishMode?: boolean | null;
}

interface Props {
  buttonName: string;
  englishMode?: boolean | null;
}

import {
  Container,
  AccordianSummary,
  SummaryTitle,
  IconHolder,
} from './Styles';

const GuidesButton: React.FC<Props> = ({ buttonName, englishMode }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleAccordianClick = () => {
    if (!accordianOpen) {
      setAccordianOpen(true);
    } else {
      setAccordianOpen(false);
    }
  };

  return (
    <>
      <Container>
        <details>
          <AccordianSummary onClick={handleAccordianClick}>
            <SummaryTitle>{buttonName}</SummaryTitle>
            <IconHolder>
              {accordianOpen ? (
                <ChevronDownIcon h-5 w-5 />
              ) : (
                <ChevronRightIcon h-5 w-5 />
              )}
            </IconHolder>
          </AccordianSummary>
          <Item
            heading={
              englishMode
                ? 'Sales and Inventory Management'
                : 'Gerenciamento de Vendas e Estoques'
            }
            link="/pt-br/guias/vendas/intro"
            iconColor="dark:bg-[#5E9EFF] dark:hover:bg-[#8CB4FF] bg-[#0085F2] hover:bg-[#2969C2]"
            description={
              englishMode
                ? 'Learn effective inventory management skills'
                : 'Desenvolva habilidades eficazes de gerenciamento de estoque.'
            }
          />
          <Item
            heading={englishMode ? 'Merchandising' : 'Merchandising'}
            description={
              englishMode
                ? 'Learn proven merchandising skills'
                : 'Aprenda habilidades comprovadas em merchandising'
            }
            link="/pt-br/merchandising"
            iconColor="dark:bg-[#AFA100] bg-[#938700]/[.7]"
          />
        </details>
      </Container>
    </>
  );
};

export default GuidesButton;
