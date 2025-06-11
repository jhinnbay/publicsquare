import { usePrivy } from "@privy-io/react-auth";

export function useWallet() {
  const {
    ready,
    authenticated,
    user,
    login,
    logout,
    connectWallet,
    linkWallet,
    unlinkWallet,
  } = usePrivy();

  const formatAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getWalletAddress = () => {
    if (!user?.wallet?.address) return null;
    return user.wallet.address;
  };

  const getFormattedAddress = () => {
    const address = getWalletAddress();
    return address ? formatAddress(address) : null;
  };

  return {
    ready,
    authenticated,
    user,
    login,
    logout,
    connectWallet,
    linkWallet,
    unlinkWallet,
    walletAddress: getWalletAddress(),
    formattedAddress: getFormattedAddress(),
    isConnected: authenticated && !!user?.wallet?.address,
  };
}
