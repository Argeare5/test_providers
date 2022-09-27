import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FormattedNumber, FormattedNumberProps } from './FormattedNumber';

export default {
  title: 'Components/FormattedNumber',
  component: FormattedNumber,
} as Meta;

const Template: Story<FormattedNumberProps> = ({ value, ...props }) => (
  <FormattedNumber value={value || 1000} {...props} />
);

export const Default = Template.bind({});
Default.args = {};

export const Compact = Template.bind({});
Compact.args = {
  value: 100000,
  compact: true,
};
