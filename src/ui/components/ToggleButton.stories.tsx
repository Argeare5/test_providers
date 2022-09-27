import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { ToggleButton, ToggleButtonProps } from './ToggleButton';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
} as Meta;

const Template: Story<ToggleButtonProps> = ({ value, onToggle, ...props }) => {
  const [active, setActive] = useState(false);

  return <ToggleButton value={active} onToggle={setActive} {...props} />;
};

export const Default = Template.bind({});
Default.args = {};
