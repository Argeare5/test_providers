export const getNameByChainId = (chainId: number) => {
  switch (chainId) {
    case 1:
      return 'Ethereum';
    case 3:
      return 'Ethereum Ropsten';
    case 4:
      return 'Ethereum Rinkeby';
    case 42:
      return 'Ethereum Kovan';
    case 137:
      return 'Polygon';
    case 80001:
      return 'Polygon Mumbai';
    case 43114:
      return 'Avalanche';
    case 43113:
      return 'Avalanche Fuji';
    default:
      return 'Ethereum';
  }
};
