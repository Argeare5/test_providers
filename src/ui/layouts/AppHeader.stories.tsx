import { Meta, Story } from '@storybook/react';
import React from 'react';

import Web3Provider from '../../web3/components/Web3Provider';
import { AppHeader } from './AppHeader';

export default {
  title: 'Components/Header',
  component: AppHeader,
} as Meta;

const Template: Story = ({ size, loaderLineColor, loaderCss, ...props }) => (
  <>
    <Web3Provider />

    <AppHeader />
  </>
);

export const Default = Template.bind({});
Default.args = {};
