import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { proposalStatusesForFilter } from '../../proposals/utils/statuses';
import { Box } from '../primitives/Box';
import { FilterDropdown, FilterDropdownProps } from './FilterDropdown';

export default {
  title: 'Components/FilterDropdown',
  component: FilterDropdown,
} as Meta;

const Template: Story<FilterDropdownProps> = ({
  statuses,
  selectedStatus,
  setSelectedStatus,
}) => {
  const [selectedStatu, setSelectedStatu] = useState<number | null>(null);

  return (
    <Box
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 20,
        background: '$main',
      }}>
      <FilterDropdown
        statuses={statuses || proposalStatusesForFilter}
        selectedStatus={selectedStatus || selectedStatu}
        setSelectedStatus={setSelectedStatus || setSelectedStatu}
      />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {};
