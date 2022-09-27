import { Web3Provider as Web3BaseProvider } from '../../../packages/src/web3/providers/Web3Provider';
import { useStore } from '../../store';
import { chainInfoHelper, CHAINS } from '../../utils/chains';
import { desiredChainID } from '../store/web3Slice';

export default function Web3Provider() {
  return (
    <Web3BaseProvider
      connectorsInitProps={{
        appName: 'AAVEGovernanceV3',
        chains: CHAINS,
        desiredChainId: desiredChainID,
        urls: chainInfoHelper.urls,
      }}
      useStore={useStore}
    />
  );
}
