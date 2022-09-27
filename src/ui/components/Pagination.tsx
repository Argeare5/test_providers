import ReactPaginate from 'react-paginate';

import { Flex } from '../primitives/Flex';

export interface PaginationProps {
  pageCount: number;
  onPageChange: (value: number) => void;
  forcePage?: number;
}

export function Pagination({
  pageCount,
  onPageChange,
  forcePage,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <Flex
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        mt: 32,
        '.pagination': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.arrow': {
          a: {
            border: 'solid $secondary',
            borderWidth: '0 2px 2px 0',
            display: 'inline-block',
            padding: '4px',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            position: 'relative',
            top: 2.5,
          },
          hover: {
            a: {
              border: 'solid $main',
              borderWidth: '0 2px 2px 0',
            },
          },
          '&.disabled': {
            a: {
              border: 'solid $light',
              borderWidth: '0 2px 2px 0',
              cursor: 'default',
            },
          },
          '&.arrow-next': {
            a: {
              transform: 'rotate(-45deg)',
              ml: 8,
            },
          },
          '&.arrow-prev': {
            a: {
              transform: 'rotate(135deg)',
              mr: 8,
            },
          },
        },
        '.page-item': {
          a: {
            color: '$disabled',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: 40,
            height: 29,
            pt: 5,
            fontSize: 11,
            lineHeight: 1,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            '@sm': {
              width: 92,
            },
            span: {
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 20,
              p: '4.5px 6px',
              borderRadius: '$4',
            },
            '&:after, &:before': {
              content: '',
              width: '100%',
              height: 2,
              position: 'absolute',
              top: 0,
              left: 0,
              background: '$light',
              transition: 'all 0.2s ease',
            },
            '&:after': {
              width: 0,
            },
          },
          '&.active': {
            a: {
              cursor: 'default',
              color: '$textSecondary !important',
              '&:after': {
                background: '$disabled !important',
                width: '100%',
              },
            },
          },
          hover: {
            a: {
              color: '$text',
              '&:after': {
                mainGradient: '',
                width: '100%',
              },
            },
          },
          '&:active': {
            a: {
              span: {
                background: '$light',
              },
            },
          },
        },
      }}>
      <ReactPaginate
        onPageChange={(selectedItem) => {
          onPageChange(selectedItem.selected);
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }
        }}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        nextLabel=""
        previousLabel=""
        pageClassName="page-item"
        previousClassName="arrow arrow-prev"
        nextClassName="arrow arrow-next"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        forcePage={forcePage}
        renderOnZeroPageCount={() => null}
        pageLabelBuilder={(page) => <span>{page}</span>}
      />
    </Flex>
  );
}
