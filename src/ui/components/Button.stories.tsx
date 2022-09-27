import { Meta, Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Box } from '../primitives/Box';
import { Image } from '../primitives/Image';
import { Button, ButtonProps } from './Button';
import { Spinner } from './Spinner';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...props }) => (
  <Button {...props}>{children || 'Vote'}</Button>
);

const TemplateWithClick: Story<ButtonProps> = ({
  children,
  loading,
  ...props
}) => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    setTimeout(() => setClick(false), 10000);
  }, [click]);

  return (
    <Button
      {...props}
      onClick={() => setClick(true)}
      loading={loading || click}>
      {click ? 'Pending' : 'Vote'}
    </Button>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const VoteForPopup = Template.bind({});
VoteForPopup.args = {
  size: 'large',
  activeColorType: 'forVote',
};

export const WithPendingAfterClick = TemplateWithClick.bind({});
WithPendingAfterClick.args = {
  size: 'large',
  activeColorType: 'forVote',
  gradientLoader: true,
  loadingColorType: 'pending',
};

export const VoteAgainstPopup = Template.bind({});
VoteAgainstPopup.args = {
  size: 'large',
  activeColorType: 'againstVote',
};

export const VoteButton = Template.bind({});
VoteButton.args = {
  size: 'medium',
};

export const VoteLargePending = Template.bind({});
VoteLargePending.args = {
  size: 'large',
  loading: true,
  gradientLoader: true,
  loadingColorType: 'pending',
  children: 'Pending',
};

export const VoteMediumPending = Template.bind({});
VoteMediumPending.args = {
  size: 'medium',
  loading: true,
  gradientLoader: true,
  loadingColorType: 'pending',
  children: 'Pending',
};

export const ConnectWallet = Template.bind({});
ConnectWallet.args = {
  children: 'Connect wallet',
  size: 'small',
};

export const ConnectWalletLoading = Template.bind({});
ConnectWalletLoading.args = {
  children: 'Connecting',
  size: 'small',
  loading: true,
};

export const ConnectWalletWrongNetwork = Template.bind({});
ConnectWalletWrongNetwork.args = {
  children: 'Wrong network',
  size: 'small',
  error: true,
};

export const Connected = Template.bind({});
Connected.args = {
  children: '0x0b...n342',
  size: 'small',
  color: 'gray',
  leftComponent: <Image src="/stories/gravatar.png" css={{ size: 20 }} />,
};

export const TransactionPending = Template.bind({});
TransactionPending.args = {
  children: '0x0b...n342',
  size: 'small',
  color: 'gray',
  leftComponent: (
    <Box
      css={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        size: 26,
        background: 'inherit',
        backgroundImage: 'inherit',
        borderRadius: '$4',
      }}>
      <Spinner
        size={26}
        loaderLineColor="$paper"
        loaderCss={{ background: '$main' }}
        css={{ position: 'absolute' }}
      />
      <Image src="/stories/gravatar.png" css={{ size: 20 }} />
    </Box>
  ),
};

export const TransactionError = Template.bind({});
TransactionError.args = {
  children: 'Error',
  size: 'small',
  error: true,
  leftComponent: <Image src="/stories/gravatar.png" css={{ size: 20 }} />,
};

export const TransactionSuccess = Template.bind({});
TransactionSuccess.args = {
  children: 'Success',
  size: 'small',
  success: true,
  leftComponent: <Image src="/stories/gravatar.png" css={{ size: 20 }} />,
};
