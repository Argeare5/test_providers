import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Spinner, SpinnerProps } from './Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = ({
  size,
  loaderLineColor,
  loaderCss,
  ...props
}) => (
  <div style={{ background: 'inherit', display: 'inline' }}>
    <Spinner
      loaderLineColor={loaderLineColor || '$dark'}
      size={size || 40}
      loaderCss={loaderCss || { mainGradient: '' }}
      {...props}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
