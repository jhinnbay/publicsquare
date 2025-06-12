import React from "react";
import { PrivyProvider as BasePrivyProvider } from "@privy-io/react-auth";

interface PrivyProviderProps {
  children: React.ReactNode;
}

export function PrivyProvider({ children }: PrivyProviderProps) {
  return (
    <BasePrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID || "your-privy-app-id"}
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
