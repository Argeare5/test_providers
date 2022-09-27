import { useState } from 'react';

import { useStore } from '../../../store';
import { TransactionsModal } from '../../../transactions/components/TransactionsModal';
import { selectActiveWallet } from '../../store/web3Selectors';
import { AccountInfoModal } from './AccountInfoModal';
import { ConnectWalletButton } from './ConnectWalletButton';
import { ConnectWalletModal } from './ConnectWalletModal';

export function WalletWidget() {
  const activeWallet = useStore(selectActiveWallet);
  const connectWalletModalOpen = useStore(
    (state) => state.connectWalletModalOpen,
  );
  const setConnectWalletModalOpen = useStore(
    (state) => state.setConnectWalletModalOpen,
  );

  const [accountInfoModalOpen, setAccountInfoModalOpen] = useState(false);
  const [allTransactionModalOpen, setAllTransactionModalOpen] = useState(false);

  const handleButtonClick = () => {
    if (activeWallet?.isActive) {
      setAccountInfoModalOpen(true);
    } else {
      setConnectWalletModalOpen(true);
    }
  };

  return (
    <>
      <ConnectWalletButton onClick={handleButtonClick} />

      <ConnectWalletModal
        isOpen={connectWalletModalOpen}
        setIsOpen={setConnectWalletModalOpen}
      />
      <AccountInfoModal
        isOpen={accountInfoModalOpen}
        setIsOpen={setAccountInfoModalOpen}
        allTransactionModalOpen={allTransactionModalOpen}
        setAllTransactionModalOpen={setAllTransactionModalOpen}
      />
      <TransactionsModal
        isOpen={allTransactionModalOpen}
        setIsOpen={setAllTransactionModalOpen}
      />
    </>
  );
}
