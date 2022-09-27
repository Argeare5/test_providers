import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = ({
  pageCount,
  onPageChange,
  ...props
}) => {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      pageCount={pageCount || 10}
      onPageChange={onPageChange || setPage}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
