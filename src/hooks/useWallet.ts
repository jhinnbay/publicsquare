import { usePrivy, useWallets } from "@privy-io/react-auth";

export function useWallet() {
  const {
    ready,
    authenticated,
    user,
    login,
    logout,
    linkWallet,
    unlinkWallet,
    createWallet,
  } = usePrivy();

  const { wallets } = useWallets();

  const connectedWallet = wallets.find(
    (wallet) => wallet.connectorType !== "unknown",
  );
  const embeddedWallet = wallets.find(
    (wallet) => wallet.walletClientType === "privy",
  );
  const coinbaseWallet = wallets.find(
    (wallet) => wallet.walletClientType === "coinbase_wallet",
  );

  const connectWallet = async () => {
    if (!authenticated) {
      // If user is not authenticated, trigger login which can create a wallet
      await login();
    } else {
      // If user is authenticated but has no wallet, create one
      if (wallets.length === 0) {
        await createWallet();
      } else {
        // Link additional wallet
        await linkWallet();
      }
    }
  };

  const disconnectWallet = async () => {
    if (connectedWallet) {
      await unlinkWallet(connectedWallet.address);
    }
    // Optionally logout the user completely
    // await logout();
  };

  const getDisplayAddress = () => {
    if (coinbaseWallet) return coinbaseWallet.address;
    if (embeddedWallet) return embeddedWallet.address;
    if (connectedWallet) return connectedWallet.address;
    return null;
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return {
    ready,
    authenticated,
    user,
    wallets,
    connectedWallet,
    embeddedWallet,
    coinbaseWallet,
    isConnected: authenticated && wallets.length > 0,
    address: getDisplayAddress(),
    formattedAddress: getDisplayAddress()
      ? formatAddress(getDisplayAddress()!)
      : null,
    connectWallet,
    disconnectWallet,
    login,
    logout,
    linkWallet,
    unlinkWallet,
    createWallet,
  };
}
