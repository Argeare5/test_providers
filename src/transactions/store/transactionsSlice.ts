import { StoreSlice } from '../../../packages/src';
import {
  BaseTx,
  createTransactionsSlice as createBaseTransactionsSlice,
  ITransactionsSlice,
} from '../../../packages/src/web3/store/transactionsSlice';
import { IProposalsSliceNew } from '../../proposals/store/proposalsSliceNew';
import { chainInfoHelper } from '../../utils/chains';
import { IWeb3Slice } from '../../web3/store/web3Slice';

const providers = {
  0: chainInfoHelper.providerInstances[1].instance,
};

type VotingTx = BaseTx & {
  type: 'vote';
  status?: number;
  pending: boolean;
  payload: {
    proposalId: number;
    support: boolean;
  };
};

type CreateProposalTx = BaseTx & {
  type: 'create';
  status?: number;
  pending: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  payload: {};
};

export type TransactionUnion = VotingTx | CreateProposalTx;

export type TransactionsSlice = ITransactionsSlice<TransactionUnion>;

export const createTransactionsSlice: StoreSlice<
  TransactionsSlice,
  IWeb3Slice & IProposalsSliceNew
> = (set, get) => ({
  ...createBaseTransactionsSlice<TransactionUnion>({
    txStatusChangedCallback: async (data) => {
      if (data.type === 'vote') {
        get().getDetailedProposalsDataNew([data.payload.proposalId]);
      } else if (data.type === 'create') {
        // get().getNewProposalIds();
        get().getProposalsIdsNew();
      }
    },
    providers,
  })(set, get),
});
