import React, { ReactNode } from 'react';

import BigGradientSpinner from '/public/images/bigGradientSpinner.svg';
import CopyIcon from '/public/images/icons/copy.svg';
import LinkIcon from '/public/images/icons/link.svg';

import {
  BasicModal,
  Box,
  Button,
  CopyToClipboard,
  Flex,
  Image,
  Link,
  Typography,
} from '../../ui';
import { CHAINS } from '../../utils/chains';
import { desiredChainID } from '../../web3/store/web3Slice';

interface ActionModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topBlock?: ReactNode;
  contentMinHeight?: number;
  children: ReactNode;
  txHash?: string;
  txPending?: boolean;
  txSuccess?: boolean;
  isTxStart: boolean;
  setIsTxStart: (value: boolean) => void;
  error: string;
  setError: (value: string) => void;
}

export function ActionModal({
  isOpen,
  setIsOpen,
  topBlock,
  contentMinHeight,
  children,
  txHash,
  txPending,
  txSuccess,
  isTxStart,
  setIsTxStart,
  error,
  setError,
}: ActionModalProps) {
  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} withCloseButton>
      {topBlock}

      <Flex
        css={{
          minHeight: contentMinHeight,
          flexDirection: 'column',
          width: '100%',
        }}>
        {isTxStart ? (
          <>
            <Flex
              css={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                flex: 1,
                flexDirection: 'column',
                mb: 60,
              }}>
              {txPending && (
                <Box css={{ lineHeight: 0, ml: -13 }}>
                  <Image as={BigGradientSpinner} css={{ size: 77 }} />
                </Box>
              )}
              <Typography
                variant="h2"
                css={{
                  mb: 8,
                  color: !!error ? '$error' : '$text',
                }}>
                {txPending && 'Pending...'}
                {txSuccess && 'Success'}
                {!!error && 'Error'}
              </Typography>
              <Typography variant="h3">
                {txPending && 'Waiting confirmation from your wallet'}
                {txSuccess && 'Confirmation pass'}
                {!!error && 'Confirmation didn’t pass'}
              </Typography>
              {!!error && (
                <Typography css={{ mt: 8, color: '$textSecondary' }}>
                  {error}
                </Typography>
              )}
              {txHash && (
                <Flex
                  css={{
                    mt: 44,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CopyToClipboard copyText={txHash}>
                    <Typography
                      variant="descriptor"
                      css={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '$textSecondary',
                        mr: 20,
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        path: {
                          transition: 'all 0.2s ease',
                          stroke: '$secondary',
                        },
                        hover: { color: '$text', path: { stroke: '$main' } },
                      }}>
                      Transaction hash{' '}
                      <Image
                        as={CopyIcon}
                        css={{
                          size: 11,
                          ml: 2,
                        }}
                      />
                    </Typography>
                  </CopyToClipboard>
                  <Link
                    href={`${
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      CHAINS[desiredChainID].blockExplorerUrls[0]
                    }/tx/${txHash}`}
                    css={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '$textSecondary',
                      path: {
                        transition: 'all 0.2s ease',
                        fill: '$secondary',
                      },
                      hover: { color: '$text', path: { fill: '$main' } },
                    }}
                    inNewWindow>
                    <Typography variant="descriptor">
                      View in Explorer
                    </Typography>
                    <Image
                      as={LinkIcon}
                      css={{
                        size: 11,
                        ml: 2,
                      }}
                    />
                  </Link>
                </Flex>
              )}
            </Flex>

            <Flex css={{ alignItems: 'center', justifyContent: 'center' }}>
              {txSuccess && (
                <Button size="large" onClick={() => setIsOpen(false)}>
                  Close
                </Button>
              )}
              {!!error && (
                <>
                  <Button
                    size="large"
                    css={{ mr: 20 }}
                    onClick={() => {
                      setIsTxStart(false);
                      setError('');
                    }}>
                    Try again
                  </Button>
                  <Button
                    size="large"
                    color="secondary"
                    transparent
                    onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                </>
              )}
            </Flex>
          </>
        ) : (
          <>{children}</>
        )}
      </Flex>
    </BasicModal>
  );
}
