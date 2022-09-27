import { useStore } from '../../../store';
import { Flex, Image, Typography } from '../../../ui';
import { WalletType } from '../../store/web3Slice';

export type Wallet = {
  walletType: WalletType;
  icon: string;
  title: string;
  setOpenImpersonatedForm?: (value: boolean) => void;
};

export function WalletItem({
  walletType,
  title,
  icon,
  setOpenImpersonatedForm,
}: Wallet) {
  const connectWallet = useStore((state) => state.connectWallet);

  const handleWalletClick = async () => {
    if (walletType === 'Impersonated' && setOpenImpersonatedForm) {
      setOpenImpersonatedForm(true);
    } else {
      await connectWallet(walletType);
    }
  };

  return (
    <Flex
      onClick={handleWalletClick}
      css={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        mb: 10,
        p: '10px 15px',
        borderRadius: '$1',
        background: '$light',
        hover: {
          boxShadow: '$buttonInset',
          buttonGradientDisabled: '',
        },
        '&:active': {
          boxShadow: 'none',
          background: '$disabled',
        },
      }}>
      <Typography variant="h3">{title}</Typography>
      <Image src={icon} css={{ size: 28 }} />
    </Flex>
  );
}
