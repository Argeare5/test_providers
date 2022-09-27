import { CSS } from '@stitches/react';

import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Typography } from '../primitives/Typography';
import { styled } from '../utils/theme';

export interface ToggleButtonProps {
  value: boolean;
  onToggle: (value: boolean) => void;
  css?: CSS;
}

const Button = styled('button', {
  width: '50%',
  position: 'relative',
  zIndex: 4,
  transition: 'all 0.4s ease',
  display: 'inline-block',
  border: 'none',
  background: 'transparent',
});

const ButtonPointColor = styled('div', {
  position: 'absolute',
  inset: 0,
  transition: 'all 0.4s ease',
  boxShadow: '$buttonInsetBig',
  variants: {
    color: {
      for: {
        forGradientFlat: '',
      },
      against: {
        againstGradientFlat: '',
      },
    },
  },
});

export function ToggleButton({ value, onToggle, css }: ToggleButtonProps) {
  const width = '100%';
  const height = 46;

  return (
    <Box
      css={{
        width: width,
        minHeight: height,
        position: 'relative',
        borderRadius: '$3',
        background: '$paper',
        overflow: 'hidden',
        hover: {
          '.ToggleButton__point--wrapper': {
            '.ToggleButton__point': {
              borderRadius: '$3',
            },
          },
          '.Button__hover__for': {
            opacity: value ? 1 : 0,
          },
          '.Button__hover__against': {
            opacity: !value ? 1 : 0,
          },
        },
        ...css,
      }}>
      <Box
        css={{
          position: 'absolute',
          inset: 0,
          boxShadow: '$buttonInsetBig',
          zIndex: 2,
          borderRadius: '$3',
        }}
      />

      <Flex
        css={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Box
          className="ToggleButton__point--wrapper"
          css={{
            transform: `translateX(${value ? '100%' : 0})`,
            position: 'absolute',
            left: 0,
            top: 0,
            width: '50%',
            height: '100%',
            transition: 'all 0.4s ease',
            zIndex: 3,
            '.ToggleButton__point': {
              position: 'relative',
              overflow: 'hidden',
              display: 'block',
              size: '100%',
              borderRadius: '$3',
            },
          }}>
          <Box className="ToggleButton__point">
            <ButtonPointColor color={!value ? 'for' : 'against'} />
          </Box>
        </Box>

        <Button
          onClick={() => onToggle(false)}
          type="button"
          css={{
            minHeight: height,
            color: !value ? '$textWhite' : '$mainFor',
          }}>
          <Typography variant="buttonLarge">For</Typography>
        </Button>
        <Button
          onClick={() => onToggle(true)}
          type="button"
          css={{
            minHeight: height,
            color: value ? '$textWhite' : '$mainAgainst',
          }}>
          <Typography variant="buttonLarge">Against</Typography>
        </Button>
      </Flex>
    </Box>
  );
}
