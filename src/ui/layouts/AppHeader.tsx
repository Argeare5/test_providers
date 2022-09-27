import { useEffect, useRef, useState } from 'react';

import Logo from '/public/images/logo.svg';

import { useStore } from '../../store';
import { WalletWidget } from '../../web3/components/wallet/WalletWidget';
import { Link } from '../components/Link';
import { Box } from '../primitives/Box';
import { Container } from '../primitives/Container';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';
import { media, styled } from '../utils/theme';
import { useClickOutside } from '../utils/useClickOutside';
import { useMediaQuery } from '../utils/useMediaQuery';
import { useScrollDirection } from '../utils/useScrollDirection';

const headerNavItems = [
  {
    link: 'https://app-v3.aave.com/governance/',
    title: 'Governance',
  },
  {
    link: 'https://snapshot.org/#/aave.eth',
    title: 'Snapshots',
  },
  {
    link: 'https://governance.aave.com/',
    title: 'Visit forum',
  },
  {
    link: 'https://docs.aave.com/faq/governance',
    title: 'FAQ',
  },
];

const BurgerButton = styled('button', {
  ml: 8,
  p: 2,
  display: 'inline-block',
  transitionProperty: 'opacity, filter',
  transitionDuration: '0.15s',
  transitionTimingFunction: 'linear',
  overflow: 'visible',
  position: 'relative',
  zIndex: 21,
  '@sm': {
    display: 'none',
  },
  hover: {
    opacity: 0.7,
  },
  '.hamburger-box': {
    width: 17,
    height: 16,
    display: 'inline-block',
    position: 'relative',
  },
  '.hamburger-inner, .hamburger-inner:before, .hamburger-inner:after': {
    width: 17,
    height: 2,
    backgroundColor: '$main',
    position: 'absolute',
    transitionProperty: 'transform',
    transitionDuration: '0.15s',
    transitionTimingFunction: 'ease',
  },
  '.hamburger-inner': {
    display: 'block',
    mt: -2,
    top: 2,
    transition: 'background-color 0s 0.13s linear',
    '&:before, &:after': {
      content: '',
      display: 'block',
    },
    '&:before': {
      top: 8,
      transition:
        'top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
    '&:after': {
      top: 16,
      transition:
        'top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    },
  },
  variants: {
    state: {
      active: {
        '.hamburger-inner': {
          transitionDelay: '0.22s',
          backgroundColor: 'transparent !important',
          '&:before': {
            top: 0,
            transition:
              'top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 8px, 0) rotate(45deg)',
          },
          '&:after': {
            top: 0,
            transition:
              'top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 8px, 0) rotate(-45deg)',
          },
        },
      },
    },
  },
});

export function AppHeader() {
  const sm = useMediaQuery(media.sm);
  const wrapperRef = useRef(null);
  const isModalOpen = useStore((state) => state.isModalOpen);

  const { scrollDirection } = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    setMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
    setMobileMenuOpen(false);
  };

  useClickOutside({
    ref: wrapperRef,
    outsideClickFunc: () => handleCloseMobileMenu(),
    additionalCondition: mobileMenuOpen,
  });

  useEffect(() => {
    if (sm) {
      handleCloseMobileMenu();
    }
  }, [sm]);

  return (
    <Box
      as="header"
      css={{
        py: 18,
        zIndex: 101,
        background: '$main',
        position: 'sticky',
        top: scrollDirection === 'down' ? (isModalOpen ? 0 : -76) : 0,
        transition: 'all 0.5s ease',
        '@sm': {
          py: 22,
          zIndex: 90,
          top: scrollDirection === 'down' ? -84 : 0,
        },
        '@lg': {
          py: 12,
          top: scrollDirection === 'down' ? -73 : 0,
        },
      }}>
      <Container size="normal">
        <Flex
          css={{
            background: '$paper',
            transition: 'all 0.4s ease',
            p: '8px 12px 8px 22px',
            borderRadius: '$2',
            borderTopRightRadius: '$2',
            borderTopLeftRadius: '$2',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '$paper',
          }}>
          <Flex css={{ alignItems: 'center' }}>
            <Link
              href="/"
              css={{
                lineHeight: 0,
                transform: 'translate(0)',
                hover: { opacity: 0.7 },
                '@sm': {
                  mr: 40,
                },
                '@lg': {
                  mr: 65,
                },
              }}>
              <Image as={Logo} css={{ width: 75, height: 20 }} />
            </Link>

            <Flex
              css={{
                display: 'none',
                '@sm': { display: 'flex', alignItems: 'center' },
              }}>
              {headerNavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  inNewWindow
                  css={{
                    color: '$secondary',
                    mr: 25,
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    '@lg': {
                      mr: 40,
                    },
                    '.Header__navItem, .Header__navItem--hover': {
                      transition: 'all 0.2s ease',
                    },
                    '&:last-of-type': {
                      '.Header__navItem--hover': {
                        left: -1,
                      },
                    },
                    hover: {
                      color: '$main',
                      '.Header__navItem': {
                        opacity: 0,
                      },
                      '.Header__navItem--hover': { opacity: 1 },
                    },
                  }}>
                  <Typography className="Header__navItem" variant="body">
                    {item.title}
                  </Typography>
                  <Typography
                    className="Header__navItem--hover"
                    variant="headline"
                    css={{
                      position: 'absolute',
                      whiteSpace: 'nowrap',
                      left: -2,
                      top: 0,
                      opacity: 0,
                    }}>
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </Flex>
          </Flex>

          <Flex css={{ alignItems: 'center' }}>
            <WalletWidget />

            {mobileMenuOpen && (
              <Box
                css={{
                  position: 'fixed',
                  background: '$backgroundOverlap',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 6,
                }}
                aria-hidden="true"
              />
            )}

            <Box ref={wrapperRef}>
              <BurgerButton
                state={mobileMenuOpen ? 'active' : undefined}
                onClick={() => {
                  if (mobileMenuOpen) {
                    handleCloseMobileMenu();
                  } else {
                    handleOpenMobileMenu();
                  }
                }}
                type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </BurgerButton>

              <Box
                css={{
                  display: 'block',
                  transition: 'all 0.4s ease',
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  zIndex: 20,
                  transform: mobileMenuOpen
                    ? 'translateX(0)'
                    : 'translateX(150px)',
                  borderRadius: '12px 0px 0px 12px',
                  boxShadow: '$paper',
                  background: '$paper',
                  width: 150,
                  p: '55px 15px 15px',
                  height: '100%',
                  overflowY: 'auto',
                  '@sm': { display: 'none' },
                }}>
                {headerNavItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    inNewWindow
                    css={{
                      color: '$secondary',
                      mb: 15,
                      display: 'block',
                    }}>
                    <Typography variant="body">{item.title}</Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
