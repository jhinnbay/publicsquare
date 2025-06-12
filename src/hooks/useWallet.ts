import React from "react";

// Check if Privy is properly configured
const privyAppId = import.meta.env.VITE_PRIVY_APP_ID;
const isValidAppId =
  privyAppId &&
  privyAppId !== "your-privy-app-id" &&
  privyAppId.startsWith("clp") &&
  privyAppId.length > 10;

// Only import Privy hooks if we have a valid app ID
let usePrivy: any, useWallets: any;

if (isValidAppId) {
  try {
    const privyAuth = require("@privy-io/react-auth");
    usePrivy = privyAuth.usePrivy;
    useWallets = privyAuth.useWallets;
  } catch (error) {
    console.warn("Failed to load Privy hooks:", error);
  }
}

export function useWallet() {
  let privyHooks;
  let walletsHook;

  if (isValidAppId && usePrivy && useWallets) {
    try {
      privyHooks = usePrivy();
      walletsHook = useWallets();
    } catch (error) {
      console.warn("Privy hooks failed:", error);
      privyHooks = null;
      walletsHook = null;
    }
  }

  // Use mock values if Privy is not configured or failed
  if (!privyHooks || !walletsHook) {
    privyHooks = {
      ready: true,
      authenticated: false,
      user: null,
      login: async () => {
        console.warn(
          "Privy not configured. Please set VITE_PRIVY_APP_ID environment variable.",
        );
      },
      logout: async () => {},
      linkWallet: async () => {},
      unlinkWallet: async () => {},
      createWallet: async () => {},
    };
    walletsHook = { wallets: [] };
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
