import React from "react";

export function useWallet() {
  // Check if Privy is properly configured
  const privyAppId = import.meta.env.VITE_PRIVY_APP_ID;
  const isValidAppId =
    privyAppId &&
    privyAppId !== "your-privy-app-id" &&
    (privyAppId.startsWith("clp") || privyAppId.startsWith("cmb")) &&
    privyAppId.length > 10;

  // If Privy is not configured, return mock values immediately
  if (!isValidAppId) {
    const mockLogin = async () => {
      console.warn(
        "Privy not configured. Please set VITE_PRIVY_APP_ID environment variable.",
      );
      alert(
        "🔧 Development Mode\n\n" +
          "Wallet functionality is disabled because Privy is not configured.\n\n" +
          "To enable wallet connections:\n" +
          "1. Sign up at https://privy.io/\n" +
          "2. Create a new app\n" +
          "3. Add VITE_PRIVY_APP_ID=your-app-id to your .env file\n" +
          "4. Restart the dev server",
      );
    };

    return {
      ready: true,
      authenticated: false,
      user: null,
      wallets: [],
      connectedWallet: null,
      embeddedWallet: null,
      coinbaseWallet: null,
      isConnected: false,
      address: null,
      formattedAddress: null,
      connectWallet: mockLogin,
      disconnectWallet: async () => {},
      login: mockLogin,
      logout: async () => {},
      linkWallet: async () => {},
      unlinkWallet: async () => {},
      createWallet: async () => {},
    };
  }

  // Only try to use Privy hooks if we have a valid app ID
  let privyHooks;
  let walletsHook;

  try {
    const { usePrivy, useWallets } = require("@privy-io/react-auth");
    privyHooks = usePrivy();
    walletsHook = useWallets();
  } catch (error) {
    console.error("Failed to initialize Privy hooks:", error);
    // Fallback to mock if Privy fails
    return {
      ready: true,
      authenticated: false,
      user: null,
      wallets: [],
      connectedWallet: null,
      embeddedWallet: null,
      coinbaseWallet: null,
      isConnected: false,
      address: null,
      formattedAddress: null,
      connectWallet: async () => {
        console.error("Privy initialization failed");
      },
      disconnectWallet: async () => {},
      login: async () => {},
      logout: async () => {},
      linkWallet: async () => {},
      unlinkWallet: async () => {},
      createWallet: async () => {},
    };
  }

  const {
    ready,
    authenticated,
    user,
    login,
    logout,
    linkWallet,
    unlinkWallet,
    createWallet,
  } = privyHooks;

  const { wallets } = walletsHook;

  const connectedWallet = wallets?.find(
    (wallet: any) => wallet.connectorType !== "unknown",
  );
  const embeddedWallet = wallets?.find(
    (wallet: any) => wallet.walletClientType === "privy",
  );
  const coinbaseWallet = wallets?.find(
    (wallet: any) => wallet.walletClientType === "coinbase_wallet",
  );

  const connectWallet = async () => {
    if (!authenticated) {
      // If user is not authenticated, trigger login which can create a wallet
      await login();
    } else {
      // If user is authenticated but has no wallet, create one
      if (wallets?.length === 0) {
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
    wallets: wallets || [],
    connectedWallet,
    embeddedWallet,
    coinbaseWallet,
    isConnected: authenticated && (wallets?.length || 0) > 0,
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
