import memoize from 'proxy-memoize';

import { desiredChainID, IWeb3Slice } from './web3Slice';

export const selectActiveWallet = memoize((store: IWeb3Slice) => {
  return store.activeWallet
    ? {
        ...store.activeWallet,
        wrongNetwork: store.activeWallet.chainId !== desiredChainID,
      }
    : undefined;
});
