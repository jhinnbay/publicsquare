import React from "react";
import { PrivyProvider as BasePrivyProvider } from "@privy-io/react-auth";

interface PrivyProviderProps {
  children: React.ReactNode;
}

export function PrivyProvider({ children }: PrivyProviderProps) {
  const privyAppId = import.meta.env.VITE_PRIVY_APP_ID;

  // Check if we have a valid Privy app ID
  const isValidAppId =
    privyAppId &&
    privyAppId !== "your-privy-app-id" &&
    (privyAppId.startsWith("clp") || privyAppId.startsWith("cmb")) &&
    privyAppId.length > 10;

  // If no valid app ID, just return children without Privy wrapper
  if (!isValidAppId) {
    console.warn(
      "⚠️ Privy not configured properly. Running in development mode.\n" +
        "To enable wallet functionality:\n" +
        "1. Sign up at https://privy.io/\n" +
        "2. Create a new app\n" +
        "3. Add VITE_PRIVY_APP_ID=your-app-id to your .env file",
    );
    return <>{children}</>;
  }

  return (
    <BasePrivyProvider
      appId={privyAppId}
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          logo: "https://your-logo-url",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
        // Configure external wallets - simplified to avoid WalletConnect issues
        externalWallets: {
          coinbaseWallet: {
            connectionOptions: "smartWalletOnly",
          },
          metamask: {
            connectionOptions: "injectedOnly",
          },
        },
        // Disable WalletConnect for now to avoid domain issues
        walletConnectCloudProjectId: undefined,
        // Configure supported chains
        supportedChains: [
          {
            id: 1, // Ethereum Mainnet
            name: "Ethereum",
            network: "homestead",
            nativeCurrency: {
              decimals: 18,
              name: "Ether",
              symbol: "ETH",
            },
            rpcUrls: {
              default: {
                http: ["https://cloudflare-eth.com"],
              },
              public: {
                http: ["https://cloudflare-eth.com"],
              },
            },
            blockExplorers: {
              default: { name: "Etherscan", url: "https://etherscan.io" },
            },
          },
          {
            id: 8453, // Base Mainnet (Coinbase L2)
            name: "Base",
            network: "base",
            nativeCurrency: {
              decimals: 18,
              name: "Ether",
              symbol: "ETH",
            },
            rpcUrls: {
              default: {
                http: ["https://mainnet.base.org"],
              },
              public: {
                http: ["https://mainnet.base.org"],
              },
            },
            blockExplorers: {
              default: { name: "BaseScan", url: "https://basescan.org" },
            },
          },
        ],
        // Enable smart wallets (including Coinbase Smart Wallet)
        smartWallet: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      {children}
    </BasePrivyProvider>
  );
}
