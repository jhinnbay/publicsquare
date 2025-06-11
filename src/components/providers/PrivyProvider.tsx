import React from "react";
import { PrivyProvider as PrivyProviderBase } from "@privy-io/react-auth";

interface PrivyProviderProps {
  children: React.ReactNode;
}

export function PrivyProvider({ children }: PrivyProviderProps) {
  return (
    <PrivyProviderBase
      appId={import.meta.env.VITE_PRIVY_APP_ID || "clvqfm1xy00ow13zrfsr3nzpz"}
      config={{
        loginMethods: ["wallet", "email", "sms"],
        appearance: {
          theme: "dark",
          accentColor: "#4158ED",
          logo: "https://auth.privy.io/logos/privy-logo.png",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
        supportedChains: [
          {
            id: 1,
            name: "Ethereum",
            nativeCurrency: {
              name: "Ether",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: {
              default: {
                http: ["https://eth.llamarpc.com"],
              },
            },
            blockExplorers: {
              default: {
                name: "Etherscan",
                url: "https://etherscan.io",
              },
            },
          },
        ],
      }}
    >
      {children}
    </PrivyProviderBase>
  );
}
