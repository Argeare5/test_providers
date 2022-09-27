// TODO: need fix transaction list, should be for each account different

import makeBlockie from 'ethereum-blockies-base64';
import React, { useEffect, useState } from 'react';

import CopyIcon from '/public/images/icons/copy.svg';

import { selectAllTransactions } from '../../../../packages/src';
import { useStore } from '../../../store';
import { TransactionInfoItem } from '../../../transactions/components/TransactionInfoItem';
import {
  BasicModal,
  Box,
  CopyToClipboard,
  Divider,
  Flex,
  Image,
  Link,
  Typography,
} from '../../../ui';
import { textCenterEllipsis } from '../../../ui/utils/text-center-ellipsis';
import { media } from '../../../ui/utils/theme';
import { useMediaQuery } from '../../../ui/utils/useMediaQuery';
import { CHAINS } from '../../../utils/chains';
import { useGetEns } from '../../utils/use-get-ens';

interface AccountInfoModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  allTransactionModalOpen: boolean;
  setAllTransactionModalOpen: (value: boolean) => void;
}

export function AccountInfoModal({
  isOpen,
  setIsOpen,
  allTransactionModalOpen,
  setAllTransactionModalOpen,
}: AccountInfoModalProps) {
  const sm = useMediaQuery(media.sm);

  const activeWallet = useStore((state) => state.activeWallet);
  const getActiveAddress = useStore((state) => state.getActiveAddress);
  const disconnectActiveWallet = useStore(
    (state) => state.disconnectActiveWallet,
  );
  const allTransactions = useStore((state) => selectAllTransactions(state));
  const setModalOpen = useStore((state) => state.setModalOpen);

  const activeAddress = getActiveAddress() || '';

  const { name: ensName, avatar: ensAvatar } = useGetEns(activeAddress);
  const ensNameAbbreviated = ensName
    ? ensName.length > 30
      ? textCenterEllipsis(ensName, 28, 2)
      : ensName
    : undefined;

  const [useBlockie, setUseBlockie] = useState(false);

  useEffect(() => {
    if (ensAvatar) {
      setUseBlockie(false);
    }
  }, [ensAvatar]);

  const handleDisconnectClick = async () => {
    await disconnectActiveWallet();
    setIsOpen(false);
    setModalOpen(false);
  };

  return (
    <BasicModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      withCloseButton
      withoutOverlap={allTransactionModalOpen}>
      <Box>
        <Flex css={{ alignItems: 'center' }}>
          <Image
            src={
              useBlockie
                ? makeBlockie(activeAddress !== '' ? activeAddress : 'default')
                : ensAvatar
            }
            alt=""
            onError={() => setUseBlockie(true)}
            css={{ size: 34, borderRadius: '$4' }}
          />
          <Flex css={{ ml: 6, alignItems: 'center' }}>
            <Typography variant="h2">
              {ensNameAbbreviated
                ? ensNameAbbreviated
                : textCenterEllipsis(activeAddress, sm ? 13 : 10, sm ? 13 : 10)}
            </Typography>
            <CopyToClipboard copyText={activeAddress}>
              <Image
                as={CopyIcon}
                css={{
                  cursor: 'pointer',
                  size: 20,
                  ml: 4,
                  path: {
                    transition: 'all 0.2s ease',
                  },
                  hover: { path: { stroke: '$secondary' } },
                }}
              />
            </CopyToClipboard>
          </Flex>
        </Flex>

        <Divider css={{ mt: 12, mb: 16 }} />

        <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            href={`${
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              CHAINS[activeWallet?.chainId || 1].blockExplorerUrls[0]
            }/address/${activeWallet?.accounts[0]}`}
            css={{
              color: '$textSecondary',
              lineHeight: 1,
              hover: { color: '$text' },
            }}
            inNewWindow>
            <Typography>View on explorer</Typography>
          </Link>

          <Link
            href="/delegate"
            css={{
              color: '$textSecondary',
              lineHeight: 1,
              hover: { color: '$text' },
            }}
            onClick={() => setIsOpen(false)}>
            <Typography>Manage delegations</Typography>
          </Link>

          <Box
            onClick={handleDisconnectClick}
            css={{
              color: '$textSecondary',
              cursor: 'pointer',
              lineHeight: 1,
              transition: 'all 0.2s ease',
              hover: { color: '$text' },
            }}>
            <Typography>Disconnect</Typography>
          </Box>
        </Flex>
      </Box>

      {!!allTransactions.length && (
        <Flex css={{ mt: 50, alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" css={{ textAlign: 'center' }}>
            {allTransactions.length >= 2
              ? 'Last transactions'
              : 'Last transaction'}
          </Typography>
          <Divider css={{ mt: 14, mb: 24, width: '100%' }} />

          {allTransactions
            .slice(-4)
            .sort((a, b) => a.nonce - b.nonce)
            .map((tx, index) => (
              <TransactionInfoItem
                key={index} // TODO: need change to tx.nonce
                tx={tx}
              />
            ))}

          {allTransactions.length > 4 && (
            <Typography
              as="button"
              variant="body"
              css={{
                transition: 'all 0.2s ease',
                display: 'inline-block',
                mt: 30,
                color: '$textSecondary',
                lineHeight: 1,
                hover: { color: '$text' },
              }}
              onClick={() => setAllTransactionModalOpen(true)}>
              All transactions
            </Typography>
          )}
        </Flex>
      )}
    </BasicModal>
  );
}
