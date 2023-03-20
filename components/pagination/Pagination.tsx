import Link from 'next/link';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

import {
  PaginationContainer,
  InsideContainer,
  IconHolderLeft,
  IconHolderRight,
  PaginationLink,
} from './Styles';

const Pagination = ({ page, lastPage }: { page: number; lastPage: number }) => {
  return (
    <PaginationContainer>
      <InsideContainer>
        {page > 1 && (
          <Link href={`/articles?page=${page - 1}`}>
            <a>
              <PaginationLink>
                <IconHolderLeft>
                  <ArrowLeftCircleIcon />
                </IconHolderLeft>
                Anterior
              </PaginationLink>
            </a>
          </Link>
        )}

        {page < lastPage && (
          <Link href={`/articles?page=${page + 1}`}>
            <a>
              <PaginationLink>
                Próximo
                <IconHolderRight>
                  <ArrowRightCircleIcon />
                </IconHolderRight>
              </PaginationLink>
            </a>
          </Link>
        )}
      </InsideContainer>
    </PaginationContainer>
  );
};

export default Pagination;
