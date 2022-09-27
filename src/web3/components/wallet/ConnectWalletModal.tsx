import { useEffect, useState } from 'react';

import BigGradientSpinner from '/public/images/bigGradientSpinner.svg';

import { useStore } from '../../../store';
import { BasicModal, Flex, Image, Link, Typography } from '../../../ui';
import { ImpersonatedForm } from './ImpersonatedForm';
import { Wallet, WalletItem } from './WalletItem';

interface ConnectWalletModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const wallets: Wallet[] = [
  {
    walletType: 'Metamask',
    icon: '/images/wallets/browserWallet.svg',
    title: 'Browser wallet',
  },
  {
    walletType: 'Coinbase',
    icon: '/images/wallets/coinbase.svg',
    title: 'Coinbase',
  },
  {
    walletType: 'WalletConnect',
    icon: '/images/wallets/walletConnect.svg',
    title: 'WalletConnect',
  },
  {
    walletType: 'Impersonated',
    icon: '/images/wallets/impersonated.svg',
    title: 'Impersonated',
  },
];

export function ConnectWalletModal({
  isOpen,
  setIsOpen,
}: ConnectWalletModalProps) {
  const walletActivating = useStore((state) => state.walletActivating);
  const walletConnectionError = useStore(
    (state) => state.walletConnectionError,
  );
  const setModalOpen = useStore((state) => state.setModalOpen);

  const [impersonatedFormOpen, setImpersonatedFormOpen] = useState(false);

  useEffect(() => {
    setImpersonatedFormOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (!walletActivating && !walletConnectionError) {
      setIsOpen(false);
      setModalOpen(false);
    }
  }, [walletActivating, walletConnectionError]);

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} withCloseButton>
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Flex css={{ flexDirection: 'column', mb: 18, width: '100%' }}>
          <Typography variant="h1" css={{ mb: 24, textAlign: 'center' }}>
            Connect a wallet
          </Typography>

          <Flex
            css={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              minHeight: 245,
            }}>
            {walletActivating ? (
              <Flex
                css={{
                  background: '$paper',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                <Image as={BigGradientSpinner} css={{ size: 77 }} />

                <Typography variant="h2" css={{ mb: 7 }}>
                  Connecting...
                </Typography>
                <Typography variant="h3">
                  Waiting confirmation from your wallet
                </Typography>
              </Flex>
            ) : (
              <>
                {impersonatedFormOpen ? (
                  <ImpersonatedForm closeClick={setImpersonatedFormOpen} />
                ) : (
                  <>
                    {wallets.map((wallet) => (
                      <WalletItem
                        walletType={wallet.walletType}
                        icon={wallet.icon}
                        title={wallet.title}
                        key={wallet.walletType}
                        setOpenImpersonatedForm={setImpersonatedFormOpen}
                      />
                    ))}
                  </>
                )}
              </>
            )}

            {walletConnectionError && (
              <Typography
                variant="descriptor"
                css={{ color: '$error', textAlign: 'center' }}>
                {walletConnectionError}
              </Typography>
            )}
          </Flex>
        </Flex>

        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          <Typography variant="body" css={{ mb: 28 }}>
            Need help connecting a wallet?{' '}
            <Link
              href="https://docs.aave.com/faq/troubleshooting"
              css={{
                color: '$main',
                textDecoration: 'underline',
                hover: { color: '$textSecondary' },
              }}
              inNewWindow>
              Read FAQ
            </Link>
          </Typography>
          <Typography variant="descriptor" css={{ color: '$textSecondary' }}>
            Wallets are provided by External Providers and by selecting you
            agree to Terms of those Providers. Your access to the wallet might
            be reliant on the External Provider being operational.
          </Typography>
        </Flex>
      </Flex>
    </BasicModal>
  );
}
