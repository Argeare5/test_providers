import { providers } from 'ethers';

import { IERC20__factory } from '../contracts/IERC20/IERC20__factory';
import { IVotingMachineWithProofs } from '../contracts/IVotingMachineWithProofs';
import { IVotingMachineWithProofs__factory } from '../contracts/IVotingMachineWithProofs__factory';

export type VotersData = {
  proposalId: number;
  address: string;
  support: boolean;
  votingPower: string;
};

const AAVE_TOKEN_ADDRESS = '0xf329e36C7bF6E5E86ce2150875a84Ce77f477375';
export const VOTING_MACHINE_WITH_PROOFS_ADDRESS =
  '0x7a09DCf8616257C9E52208E96887C0f929406fc4';

export class AAVEBalanceService {
  private rpcProvider: providers.JsonRpcBatchProvider;
  private signer?: providers.JsonRpcSigner;
  private votingMachine: IVotingMachineWithProofs;
  constructor(rpcProvider: providers.JsonRpcBatchProvider) {
    this.rpcProvider = rpcProvider;
    this.votingMachine = IVotingMachineWithProofs__factory.connect(
      VOTING_MACHINE_WITH_PROOFS_ADDRESS,
      this.rpcProvider,
    );
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

  async getVotedInfo(userAddress: string) {
    const votedInfo: IVotingMachineWithProofs.VoteStructOutput = await this.votingMachine.getVote(userAddress, 4);

    return {
      support: votedInfo.support,
      votedPower: votedInfo.votingPower.toString(),
    }
  }

  async getVoters(): Promise<VotersData[]> {
    // TODO: need fix `from block` and `to block`
    const events = await this.votingMachine.queryFilter(
      this.votingMachine.filters.VoteEmitted(),
      34288842,
      34288842 + 1000,
    );

    return events
      .sort((a, b) => b.blockNumber - a.blockNumber)
      .map((event) => ({
        proposalId: event.args.proposalId.toNumber(),
        address: event.args.voter.toString(),
        support: event.args.support,
        votingPower: event.args.votingPower.toString(),
      }));
  }
}
