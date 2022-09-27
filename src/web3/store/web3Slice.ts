import { StoreSlice, createWeb3Slice as createWeb3BaseSlice, Web3Slice as BaseWeb3Slice, } from '../../../packages/src';

import { ethers } from "ethers";
import { AAVEBalanceService } from "../services/AAVEBalanceService";
import { DESIRED_CHAIN_ID, RPC_URL } from "../../utils/constants";
import { AddEthereumChainParameter } from "@web3-react/types";
import { ChainInformation, initChainInformationConfig } from "../../../packages/src/utils/chainInfoHelpers";

const ETH: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Ether",
  symbol: "ETH",
  decimals: 18,
};


export const CHAINS: {
  [chainId: number]: ChainInformation;
} = {
  1: {
    urls: [RPC_URL],
    nativeCurrency: ETH,
    name: "Mainnet",
    blockExplorerUrls: ["https://etherscan.io"],
  },
};

export const chainInfoHelpers = initChainInformationConfig(CHAINS);

export type Web3Slice = BaseWeb3Slice & {
  // here application custom properties
  rpcProvider: ethers.providers.JsonRpcBatchProvider;
  aaveBalanceService: AAVEBalanceService;

  aaveBalances: string[];
  getAAVEBalances: () => Promise<void>;
};

// having separate rpc provider for reading data only
export const getDefaultRPCProviderForReadData = () => {
  return chainInfoHelpers.providerInstances[DESIRED_CHAIN_ID].instance
};

export const createWeb3Slice: StoreSlice<Web3Slice> = (set, get) => ({
  ...createWeb3BaseSlice({
    walletConnected: () => {
      const activeWallet = get().activeWallet;
      if (activeWallet) {
        get().aaveBalanceService.connectSigner(activeWallet.signer);
      }
    },
    getChainParameters: chainInfoHelpers.getChainParameters,
    desiredChainID: DESIRED_CHAIN_ID,
  })(set, get),

  rpcProvider: getDefaultRPCProviderForReadData(),
  aaveBalanceService: new AAVEBalanceService(
    getDefaultRPCProviderForReadData()
  ),

  aaveBalances: [],
  getAAVEBalances: async () => {
    const exampleAddresses = [
      '0x2c01b28b08c592acc407f4c140335b77383ebf56',
      '0xa0332b1873803e73687cd21aa02e2500301d21ba',
      '0x43adde52c6c142912662d3e427709db5cac9b811'
    ];

    const balances = await Promise.all(exampleAddresses.map(async (address) => await get().aaveBalanceService.getRandomAddressAAVEBalance(address)));

    set({ aaveBalances: balances.map((balance) => balance.toString()) })
  }
});
