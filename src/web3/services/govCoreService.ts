import { providers } from 'ethers';

import {
  IGovernanceCore,
  IGovernanceCore__factory,
} from '../../contracts/contracts_gov_v3';
import { CrosschainUtils } from '../../contracts/contracts_gov_v3/IGovernanceCore';
import { GOV_CORE_ADDRESS, VOTING_PORTAL_ADDRESS } from '../../utils/constants';

enum PS {
  Null,
  Created,
  Queued,
  Executed,
  Failed,
  Cancelled,
  Expired,
}

export enum ProposalState {
  Null = 'Null',
  Created = 'Created',
  Queued = 'Queued',
  Executed = 'Executed',
  Failed = 'Failed',
  Cancelled = 'Cancelled',
  Expired = 'Expired',
}

interface Payload {
  chain: number;
  accessLevel: number;
  mandateProvider: string;
  payloadId: number;
  __RESERVED: number;
}

export interface Proposal {
  id: number;
  votingChain: number;
  votingDuration: number;
  creationTime: number;
  snapshotBlockHash: string;
  accessLevel: number;
  state: ProposalState;
  creator: string;
  payloads: CrosschainUtils.PayloadStructOutput[];
  queuingTime: number;
  votingPortal: string;
  ipfsHash: string;
  forVotes: number;
  againstVotes: number;
  config: {
    isActive: boolean;
    quorum: number;
    differential: number;
    minPropositionPower: number;
  };
}

export class GovCoreService {
  private rpcProvider: providers.JsonRpcProvider;
  private govCore: IGovernanceCore;
  private signer: providers.JsonRpcSigner | undefined;
  constructor(provider: providers.JsonRpcProvider) {
    this.rpcProvider = provider;
    this.govCore = IGovernanceCore__factory.connect(
      GOV_CORE_ADDRESS,
      this.rpcProvider,
    );
  }
  connectSigner(signer: providers.JsonRpcSigner) {
    this.signer = signer;
  }

  async getProposalsIds(): Promise<number[]> {
    const proposalsCount = await this.govCore.proposalsCount();
    return Array.from(Array(proposalsCount.toNumber()).keys()).sort(
      (a, b) => b - a,
    );
  }

  // TODO: need VotingMachine to get votedPower
  // TODO: need data helper contract
  async getDetailedProposalsData(ids: number[]): Promise<Proposal[]> {
    const proposalsData = ids.map(async (id) => {
      const proposalData = await this.govCore.getProposal(id);
      const proposalConfig = await this.govCore.getVotingConfig(
        proposalData.accessLevel,
      );

      return {
        id,
        votingChain: +proposalData.votingChain,
        votingDuration: +proposalData.votingDuration,
        creationTime: +proposalData.creationTime,
        snapshotBlockHash: proposalData.snapshotBlockHash,
        accessLevel: +proposalData.accessLevel,
        state: this.getProposalState(+proposalData.state),
        creator: proposalData.creator,
        payloads: proposalData.payloads,
        queuingTime: +proposalData.queuingTime,
        votingPortal: proposalData.votingPortal,
        ipfsHash: proposalData.ipfsHash,
        forVotes: proposalData.forVotes.toNumber(),
        againstVotes: proposalData.againstVotes.toNumber(),
        config: {
          isActive: proposalConfig.isActive,
          quorum: proposalConfig.quorum.toNumber(),
          differential: proposalConfig.differential.toNumber(),
          minPropositionPower: proposalConfig.minPropositionPower.toNumber(),
        },
      };
    });

    return Promise.all(proposalsData);
  }

  // TODO: need fix
  private getProposalState(proposalState: PS): ProposalState {
    switch (proposalState) {
      case PS.Null:
        return ProposalState.Null;
      case PS.Created:
        return ProposalState.Created;
      case PS.Queued:
        return ProposalState.Queued;
      case PS.Executed:
        return ProposalState.Executed;
      case PS.Failed:
        return ProposalState.Failed;
      case PS.Cancelled:
        return ProposalState.Cancelled;
      case PS.Expired:
        return ProposalState.Expired;
      default:
        return ProposalState.Null;
    }
  }

  async createProposal() {
    const payload: Payload = {
      chain: 2,
      accessLevel: 1,
      mandateProvider: '0x0000000000000000000000000000000000000002',
      payloadId: 0,
      __RESERVED: 0,
    };

    let connectedGovCore = this.govCore;
    if (this.signer) {
      connectedGovCore = this.govCore.connect(this.signer);
    }

    return await connectedGovCore.create(
      [payload],
      1,
      VOTING_PORTAL_ADDRESS,
      '0xfc2b36ceb45105fa1c53d81da3c4bd574c576fc13994a68484bab35cb35cd1a1',
    );
  }
}
