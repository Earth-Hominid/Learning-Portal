import { useRef, useEffect, useState } from 'react';
import Item from './Item';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

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

const ResourcesButton: React.FC<Props> = ({ buttonName, englishMode }) => {
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
                <ChevronDownIcon className="h-5 w-5" />
              ) : (
                <ChevronRightIcon className="h-5 w-5" />
              )}
            </IconHolder>
          </AccordianSummary>
          <Item
            heading={englishMode ? 'Produce' : 'Hortifruti'}
            link="/pt-br/recursos/hortifruti"
            description={
              englishMode
                ? 'Fruit and vegetable references for produce clerks'
                : 'Referências de frutas e verduras para balconistas de hortifrúti.'
            }
            iconColor="bg-[#00b755] hover:bg-[#009A46]/[.7] dark:bg-[#00B755]/[.7] dark:hover:bg-[#00B754"
          />
          <Item
            heading={englishMode ? 'Merchandising' : 'Merchandising'}
            description={
              englishMode
                ? 'Learn proven merchandising skills'
                : 'Aprenda habilidades comprovadas em merchandising'
            }
            link="/pt-br/recursos/merchandising"
            iconColor="dark:bg-[#AFA100] bg-[#938700]/[.7]"
          />
        </details>
      </Container>
    </>
  );
};

export default ResourcesButton;
