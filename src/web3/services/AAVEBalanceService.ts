import { providers } from 'ethers';

import { IERC20__factory } from '../contracts/IERC20/IERC20__factory';

const AAVE_TOKEN_ADDRESS = '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9';

export class AAVEBalanceService {
  private rpcProvider: providers.JsonRpcBatchProvider;
  private signer?: providers.JsonRpcSigner;
  constructor(rpcProvider: providers.JsonRpcBatchProvider) {
    this.rpcProvider = rpcProvider;
  }
  connectSigner(signer: providers.JsonRpcSigner) {
    this.signer = signer;
  }

  async getRandomAddressAAVEBalance(userAddress: string) {
    const erc20 = IERC20__factory.connect(
      AAVE_TOKEN_ADDRESS,
      this.rpcProvider,
    );

    return erc20.balanceOf(userAddress);
  }
}
