// TODO: need fix transaction list, should be for each account different

import React from 'react';

import { selectAllTransactions } from '../../../packages/src';
import { useStore } from '../../store';
import { BackButton, BasicModal, Box, Divider, Typography } from '../../ui';
import { TransactionInfoItem } from './TransactionInfoItem';

interface TransactionsModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function TransactionsModal({
  isOpen,
  setIsOpen,
}: TransactionsModalProps) {
  const allTransactions = useStore((state) => selectAllTransactions(state));

  return (
    <BasicModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      withCloseButton
      withoutAnimationWhenOpen>
      <Box>
        <Typography variant="h2" css={{ textAlign: 'center' }}>
          All Transactions
        </Typography>

        <Divider css={{ mt: 13, mb: 26 }} />

        <Box css={{ overflowY: 'scroll', height: 311, pr: 20 }}>
          {allTransactions
            .sort((a, b) => a.nonce - b.nonce)
            .map((tx, index) => (
              <TransactionInfoItem
                key={index} // TODO: need change to tx.nonce
                tx={tx}
              />
            ))}
        </Box>

        <BackButton onClick={() => setIsOpen(false)} css={{ mt: 40 }} />
      </Box>
    </BasicModal>
  );
}
