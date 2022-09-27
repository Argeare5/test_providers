import { CSS } from '@stitches/react';
import React from 'react';

import BackArrow from '/public/images/icons/backArrow.svg';

import { Box } from '../primitives/Box';
import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';
import { styled } from '../utils/theme';

interface BackButtonProps {
  onClick: () => void;
  variant?: 'flat' | 'normal';
  css?: CSS;
}

const ButtonWrapper = styled('button', {
  transition: 'all 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
  color: '$textSecondary',
  lineHeight: 1,
  variants: {
    variant: {
      flat: {
        hover: {
          color: '$text',
          '.BackButton__arrow': {
            path: {
              fill: '$text',
            },
          },
        },
      },
      normal: {
        borderRadius: '$5',
        minWidth: 81,
        height: 22,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '$paper',
        boxShadow: '$paper',
        '.BackButton__arrow': {
          width: 15,
        },
      },
    },
  },
});

export function BackButton({
  onClick,
  css,
  variant = 'flat',
}: BackButtonProps) {
  return (
    <ButtonWrapper
      type="button"
      variant={variant}
      css={{
        ...css,
      }}
      onClick={onClick}>
      <Image as={BackArrow} css={{ mr: 5 }} className="BackButton__arrow" />
      <Typography variant="body">Back</Typography>
    </ButtonWrapper>
  );
}
