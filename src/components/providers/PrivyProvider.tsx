import React from "react";
import { PrivyProvider as BasePrivyProvider } from "@privy-io/react-auth";

interface PrivyProviderProps {
  children: React.ReactNode;
}

// Mock context for development when Privy is not configured
const MockPrivyContext = React.createContext({
  ready: true,
  authenticated: false,
  user: null,
  login: async () => {},
  logout: async () => {},
  linkWallet: async () => {},
  unlinkWallet: async () => {},
  createWallet: async () => {},
});

function MockPrivyProvider({ children }: PrivyProviderProps) {
  return (
    <MockPrivyContext.Provider
      value={{
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
      }}
    >
      {children}
    </MockPrivyContext.Provider>
  );
}

export function PrivyProvider({ children }: PrivyProviderProps) {
  const privyAppId = import.meta.env.VITE_PRIVY_APP_ID;

  // Check if we have a valid Privy app ID
  const isValidAppId =
    privyAppId &&
    privyAppId !== "your-privy-app-id" &&
    privyAppId.startsWith("clp") &&
    privyAppId.length > 10;

  // If no valid app ID, use mock provider for development
  if (!isValidAppId) {
    console.warn(
      "⚠️ Privy not configured properly. Using mock provider for development.\n" +
        "To enable wallet functionality:\n" +
        "1. Sign up at https://privy.io/\n" +
        "2. Create a new app\n" +
        "3. Add VITE_PRIVY_APP_ID=your-app-id to your .env file",
    );
    return <MockPrivyProvider>{children}</MockPrivyProvider>;
  }

  return (
    <BasePrivyProvider
      appId={privyAppId}
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet", "sms"],
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
