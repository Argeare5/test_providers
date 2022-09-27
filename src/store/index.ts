import create, { GetState, SetState } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createWeb3Slice, Web3Slice } from '../web3/store/web3Slice';
import { createTransactionsSlice, TransactionsSlice } from '../transactions/store/transactionsSlice';

type RootState = Web3Slice & TransactionsSlice;

const createRootSlice = (
  set: SetState<RootState>,
  get: GetState<RootState>
) => ({
  ...createWeb3Slice(set, get),
  ...createTransactionsSlice(set, get),
});

export const useStore = create(devtools(createRootSlice, { serialize: true }));
