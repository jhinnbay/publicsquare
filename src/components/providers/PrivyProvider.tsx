import React from "react";
import { PrivyProvider as PrivyProviderBase } from "@privy-io/react-auth";
import { WagmiProvider } from "@privy-io/wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { mainnet, polygon, arbitrum, base } from "viem/chains";
import { createConfig } from "wagmi";

const wagmiConfig = createConfig({
  chains: [mainnet, polygon, arbitrum, base],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
});

const queryClient = new QueryClient();

interface PrivyProviderProps {
  children: React.ReactNode;
}

export function PrivyProvider({ children }: PrivyProviderProps) {
  return (
    <PrivyProviderBase
      appId={import.meta.env.VITE_PRIVY_APP_ID || "your-privy-app-id"}
      config={{
        loginMethods: ["wallet", "email", "sms"],
        appearance: {
          theme: "dark",
          accentColor: "#4158ED",
          logo: "https://your-logo-url.com/logo.png",
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProviderBase>
  );
}
