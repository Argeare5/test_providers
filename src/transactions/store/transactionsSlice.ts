import { StoreSlice } from "../../../packages/src/types/store";

import {
  BaseTx,
  createTransactionsSlice as createBaseTransactionsSlice,
  ITransactionsSlice,
} from "../../../packages/src/web3/store/transactionsSlice";
import { Web3Slice } from "../../../packages/src/web3/store/walletSlice";
import { getDefaultRPCProviderForReadData } from "../../web3/store/web3Slice";

const providers = {
  // ZERO because it's tx.chainID returns 0, although suppose to return 5
  0: getDefaultRPCProviderForReadData(),
};

type ExampleTX = BaseTx & {
  type: "example";
  payload: {};
};

type TransactionUnion = ExampleTX;

export type TransactionsSlice = ITransactionsSlice<TransactionUnion>;

export const createTransactionsSlice: StoreSlice<
  TransactionsSlice,
  Web3Slice
> = (set, get) => ({
  ...createBaseTransactionsSlice<TransactionUnion>({
    txStatusChangedCallback: (data) => {
      switch (data.type) {
        case "example":
          console.log('example')
      }
    },
    providers,
  })(set, get),
});
