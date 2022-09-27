import { produce } from 'immer';

import { StoreSlice } from '../../store/types';
import { TransactionsSlice } from '../../transactions/store/transactionsSlice';
import { Proposal } from '../../web3/services/govCoreService';
import { IWeb3Slice } from '../../web3/store/web3Slice';

export interface IProposalsSliceNew {
  proposalsIdsNew: number[];
  getProposalsIdsNew: () => void;

  detailedProposalsDataNew: Record<number, Proposal>;
  getDetailedProposalsDataNew: (ids: number[]) => void;

  createProposalNew: () => void;
}

export const createProposalsSliceNew: StoreSlice<
  IProposalsSliceNew,
  IWeb3Slice & TransactionsSlice
> = (set, get) => ({
  proposalsIdsNew: [],
  getProposalsIdsNew: async () => {
    try {
      const idsFromContact = await get().govCoreService.getProposalsIds();
      const currentIds = get().proposalsIdsNew;

      const newIds = idsFromContact.filter(
        (id) => currentIds.indexOf(id) === -1,
      );

      if (newIds.length > 0) {
        set((state) =>
          produce(state, (draft) => {
            draft.proposalsIdsNew = [...newIds, ...draft.proposalsIdsNew];
          }),
        );
        await get().getDetailedProposalsDataNew(newIds);
      }
    } catch (e) {
      console.error(`Get proposal id's error: ${e}`);
    }
  },

  detailedProposalsDataNew: {},
  getDetailedProposalsDataNew: async (ids) => {
    const proposalsData = await get().govCoreService.getDetailedProposalsData(
      ids,
    );

    set((state) =>
      produce(state, (draft) => {
        proposalsData.forEach((proposal) => {
          draft.detailedProposalsDataNew[proposal.id] = proposal;
        });
      }),
    );
  },

  createProposalNew: async () => {
    try {
      const govCoreService = get().govCoreService;
      if (govCoreService) {
        await get().executeTx({
          body: () => govCoreService.createProposal(),
          params: {
            type: 'create',
            payload: {},
          },
        });
      }
    } catch (e) {
      console.log(e, 'e');
    }
  },
});
