import { Menu } from '@headlessui/react';
import React, { MouseEvent, useEffect, useRef } from 'react';

import ArrowToLeft from '/public/images/icons/arrowToLeft.svg';
import ArrowToRight from '/public/images/icons/arrowToRight.svg';

import { ProposalStateForFilter } from '../../proposals/utils/statuses';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';
import { keyframes, styled } from '../utils/theme';

export interface FilterDropdownProps {
  statuses: ProposalStateForFilter[];
  selectedStatus: number | null;
  setSelectedStatus: (value: number | null) => void;
}

const MenuButton = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  px: 6,
  minWidth: 115,
  height: 22,
  border: '1px solid $paper',
  boxShadow: '$button',
  color: '$textSecondary',
  borderRadius: '$5',
  position: 'relative',
  '.MenuButton__regular': {
    opacity: 1,
    zIndex: 1,
  },
  hover: {
    color: '$textWhite',
    '.MenuButton__regular': {
      opacity: 0,
      zIndex: -1,
    },
    '.MenuButton__hover': {
      opacity: 1,
      zIndex: 1,
    },
    path: { stroke: '$textWhite' },
  },
});

const MenuColor = styled('div', {
  transition: 'all 0.2s ease',
  position: 'absolute',
  inset: -1,
  borderRadius: '$5',
  opacity: 0,
  zIndex: -1,
  '@media (hover: hover) and (pointer: fine)': {
    inset: 0,
  },
  variants: {
    color: {
      regular: {
        background: '$paper',
      },
      dark: {
        buttonGradientDark: '',
      },
    },
  },
});

const MenuItems = styled('div', {
  display: 'flex',
  alignItems: 'center',
  pl: 18,
  transition: 'all 0.2s ease',
  position: 'absolute',
  overflow: 'hidden',
  zIndex: 2,
  borderRadius: '$5',
  boxShadow: '$button',
  border: '1px solid $paper',
  height: 22,
  right: 0,
  top: 0,
  '.MenuItems__regular': {
    opacity: 1,
    zIndex: 1,
  },
});

const MenuItem = styled('div', {
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  color: '$textSecondary',
  cursor: 'pointer',
  mx: 7,
  background: 'transparent',
  borderRadius: '$5',
  hover: {
    color: '$textWhite',
  },
  '&:first-of-type': {
    ml: 10,
  },
  '&:last-of-type': {
    mr: 14,
  },
});

export function FilterDropdown({
  statuses,
  selectedStatus,
  setSelectedStatus,
}: FilterDropdownProps) {
  const menuButton = useRef(null);
  const mobileScrollingWrapper = useRef(null);

  const menuOpen = keyframes({
    '0%': {
      width: 0,
    },
    '100%': {
      width: 'calc(100% - 115px)',
    },
  });

  useEffect(() => {
    if (mobileScrollingWrapper && mobileScrollingWrapper.current) {
      if (selectedStatus === 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mobileScrollingWrapper.current.scrollLeft = 0;
      } else if (selectedStatus === null) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mobileScrollingWrapper.current.scrollLeft =
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          mobileScrollingWrapper.current.scrollWidth;
      }
    }
  }, [mobileScrollingWrapper, selectedStatus]);

  return (
    <>
      <Menu
        as={Box}
        css={{
          position: 'relative',
          display: 'none',
          alignItems: 'center',
          overflow: 'hidden',
          '@sm': { display: 'flex', overflow: 'unset' },
        }}>
        {({ open }) => (
          <>
            <Flex
              css={{
                position: 'relative',
                zIndex: -1,
                opacity: 0,
                pl: 18,
                maxWidth: 220,
                '@sm': {
                  maxWidth: 'unset',
                },
              }}>
              {statuses.map((status) => (
                <MenuItem key={status.value}>
                  <Typography
                    css={{
                      lineHeight: 1,
                      letterSpacing: '0.03em',
                      fontSize: 13,
                      '@lg': { fontSize: 14 },
                    }}>
                    {status.title}
                  </Typography>
                </MenuItem>
              ))}
            </Flex>

            <Menu.Button
              ref={menuButton}
              as={MenuButton}
              css={{ zIndex: open ? -1 : 0, opacity: open ? 0 : 1 }}>
              {!open && (
                <Image
                  as={ArrowToLeft}
                  css={{
                    position: 'absolute',
                    zIndex: 2,
                    left: 6,
                    width: 7,
                    height: 12,
                    path: {
                      transition: 'all 0.2s ease',
                      stroke: '$textSecondary',
                    },
                  }}
                />
              )}

              <Box css={{ position: 'relative', zIndex: 2 }}>
                <Typography
                  css={{
                    lineHeight: 1,
                    letterSpacing: '0.03em',
                    fontSize: 13,
                    '@lg': { fontSize: 14 },
                  }}>
                  {
                    statuses.find((status) => status.value === selectedStatus)
                      ?.title
                  }
                </Typography>
              </Box>

              <MenuColor className="MenuButton__regular" color="regular" />
              <MenuColor className="MenuButton__hover" color="dark" />
            </Menu.Button>

            <Menu.Items
              as={MenuItems}
              css={{
                animation: `${menuOpen} 0.5s`,
                maxWidth: '100%',
                overflowX: 'auto',
                '@sm': {
                  maxWidth: 'unset',
                  overflowX: 'hidden',
                },
              }}>
              <Box
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  menuButton.current?.click();
                }}
                css={{
                  position: 'absolute',
                  zIndex: 2,
                  left: 7,
                  width: 15,
                  height: 20,
                  p: 4,
                  display: 'inline-block',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  lineHeight: 0,

                  hover: {
                    path: { stroke: '$textSecondary' },
                  },
                }}>
                <Image
                  as={ArrowToRight}
                  css={{
                    width: 7,
                    height: 12,
                    path: { transition: 'all 0.2s ease', stroke: '$textWhite' },
                  }}
                />
              </Box>

              <Flex
                css={{
                  position: 'relative',
                  zIndex: 2,
                  alignItems: 'center',
                  borderRadius: '$5',
                }}>
                {statuses.map((status) => (
                  <Menu.Item
                    key={status.value}
                    as={MenuItem}
                    onClick={(e: MouseEvent<HTMLDivElement>) => {
                      e.preventDefault();
                      selectedStatus !== status.value &&
                        setSelectedStatus(status.value);
                    }}
                    css={{
                      cursor:
                        selectedStatus === status.value ? 'default' : 'pointer',
                      color:
                        selectedStatus === status.value
                          ? '$textWhite'
                          : '$textSecondary',
                    }}>
                    <Typography
                      css={{
                        lineHeight: 1,
                        letterSpacing: '0.03em',
                        fontSize: 13,
                        '@lg': { fontSize: 14 },
                      }}>
                      {status.title}
                    </Typography>
                  </Menu.Item>
                ))}
              </Flex>

              <MenuColor className="MenuItems__regular" color="dark" />
            </Menu.Items>
          </>
        )}
      </Menu>

      <Flex
        ref={mobileScrollingWrapper}
        css={{
          display: 'flex',
          maxWidth: '100%',
          overflowX: 'auto',
          pb: 15,
          '@sm': { display: 'none' },
        }}>
        {statuses.map((status) => (
          <Box
            key={status.value}
            as={MenuItem}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.preventDefault();
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              e.target.scrollIntoView({ inline: 'center' });
              selectedStatus !== status.value &&
                setSelectedStatus(status.value);
            }}
            css={{
              cursor: selectedStatus === status.value ? 'default' : 'pointer',
              color:
                selectedStatus === status.value
                  ? '$textWhite'
                  : '$textSecondary',
            }}>
            <Typography variant="body" css={{ lineHeight: 1 }}>
              {status.title}
            </Typography>
          </Box>
        ))}
      </Flex>
    </>
  );
}
