import { useRef, useEffect, useState } from 'react';
import Item from './Item';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  buttonName: string;
  headingOne?: string;
  linkOne: string;
  descriptionOne?: string;
  iconColor?: string;
}

import {
  Container,
  AccordianSummary,
  SummaryTitle,
  IconHolder,
} from './Styles';

const DropDownButton: React.FC<Props> = ({
  buttonName,
  headingOne,
  linkOne,
  descriptionOne,
}) => {
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
            heading={headingOne}
            description={descriptionOne}
            link={linkOne}
            iconColor="bg-[#00b755] hover:bg-[#009A46]/[.7] dark:bg-[#00B755]/[.7] dark:hover:bg-[#00B754]"
          />
        </details>
      </Container>
    </>
  );
};

export default DropDownButton;
