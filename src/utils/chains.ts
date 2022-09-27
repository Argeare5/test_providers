import type { AddEthereumChainParameter } from '@web3-react/types';

import {
  ChainInformation,
  initChainInformationConfig,
} from '../../packages/src/utils/chainInfoHelpers';
import { getEnvOrFail } from './getEnv';

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
  name: 'Ether',
  symbol: 'ETH',
  decimals: 18,
};

export const CHAINS: {
  [chainId: number]: ChainInformation;
} = {
  1: {
    urls: [getEnvOrFail('GOV_CORE_RPC')],
    nativeCurrency: ETH,
    name: 'Custom deployment',
    blockExplorerUrls: ['https://etherscan.io'],
  },
};

export const chainInfoHelper = initChainInformationConfig(CHAINS);
