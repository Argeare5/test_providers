import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Typography } from '../primitives/Typography';
import { Timer, TimerProps } from './Timer';

export default {
  title: 'Components/Timer',
  component: Timer,
} as Meta;

const Template: Story<TimerProps> = ({ timestamp, ...props }) => (
  <Typography variant="h3" css={{ p: 20 }}>
    <Timer timestamp={timestamp || Date.now() / 1000 + 432000} {...props} />
  </Typography>
);

export const Default = Template.bind({});
Default.args = {};
