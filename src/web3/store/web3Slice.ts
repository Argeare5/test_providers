import { providers } from 'ethers';

import {
  createWeb3Slice as createWeb3BaseSlice,
  Web3Slice as BaseWeb3Slice,
} from '../../../packages/src/web3/store/walletSlice';
import { StoreSlice } from '../../store/types';
import { chainInfoHelper } from '../../utils/chains';
import { GovCoreService } from '../services/govCoreService';

/**
 * web3Slice is required only to have a better control over providers state i.e
 * change provider, trigger data refetch if provider changed and have globally available instances of rpcs and data providers
 */
export type IWeb3Slice = BaseWeb3Slice & {
  connectSigner: () => void;
  connectWalletModalOpen: boolean;
  setConnectWalletModalOpen: (value: boolean) => void;

  govCoreProvider: providers.JsonRpcBatchProvider;
  govCoreService: GovCoreService;
};

export type WalletType =
  | 'Metamask'
  | 'WalletConnect'
  | 'Coinbase'
  | 'Impersonated';

export const desiredChainID = 1;

const initGovCoreService = (provider: providers.JsonRpcBatchProvider) => {
  return new GovCoreService(provider);
};

export const createWeb3Slice: StoreSlice<IWeb3Slice> = (set, get) => ({
  ...createWeb3BaseSlice({
    walletConnected: () => {
      get().connectSigner();
    },
    getChainParameters: chainInfoHelper.getChainParameters,
    desiredChainID,
  })(set, get),
  connectWalletModalOpen: false,

  connectSigner() {
    const activeWallet = get().activeWallet;
    if (activeWallet?.signer) {
      get().govCoreService.connectSigner(activeWallet.signer);
    }
  },

  setConnectWalletModalOpen(value) {
    set({ connectWalletModalOpen: value });
  },

  govCoreProvider: chainInfoHelper.providerInstances[1].instance,
  govCoreService: initGovCoreService(
    chainInfoHelper.providerInstances[1].instance,
  ),
});
