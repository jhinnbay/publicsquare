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
    // Check for linked wallets first, then embedded wallet
    const linkedWallet = user?.linkedAccounts?.find(
      (account) => account.type === "wallet",
    );
    if (linkedWallet && "address" in linkedWallet) {
      return linkedWallet.address;
    }

    // Check for embedded wallet
    if (user?.wallet?.address) {
      return user.wallet.address;
    }

    return null;
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
    isConnected: authenticated && !!getWalletAddress(),
  };
}
