import { useState, useEffect } from "react";
import { useWallet } from "./useWallet";

// Define NFT collection requirements for each forum thread
export const NFT_REQUIREMENTS = {
  "Latest Proposals & Discussions": {
    collection: "Public Access",
    contractAddress: null, // Public access - no NFT required
    requiredTokenCount: 0,
    badge: "Public",
  },
  "Project Preparation": {
    collection: "Based Builders",
    contractAddress: "0x1234567890123456789012345678901234567890",
    requiredTokenCount: 500, // 500 $BASED tokens
    badge: "500 $BASED",
  },
  "General Discussion": {
    collection: "Key Card Holders",
    contractAddress: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    requiredTokenCount: 1,
    badge: "Key Card",
  },
};

export interface NFTGatingResult {
  hasAccess: boolean;
  isLoading: boolean;
  requirement: {
    collection: string;
    contractAddress: string | null;
    requiredTokenCount: number;
    badge: string;
  } | null;
  userTokenCount: number;
}

export function useNFTGating(threadTitle: string): NFTGatingResult {
  const { isConnected, address } = useWallet();
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userTokenCount, setUserTokenCount] = useState(0);

  const requirement =
    NFT_REQUIREMENTS[threadTitle as keyof typeof NFT_REQUIREMENTS];

  useEffect(() => {
    async function checkNFTAccess() {
      if (!requirement) {
        setHasAccess(true);
        return;
      }

      // Public access threads
      if (!requirement.contractAddress) {
        setHasAccess(true);
        return;
      }

      // Require wallet connection for gated content
      if (!isConnected || !address) {
        setHasAccess(false);
        setUserTokenCount(0);
        return;
      }

      setIsLoading(true);

      try {
        // Simulate NFT/token balance check
        // In a real implementation, you would call the blockchain here
        const mockTokenBalance = await simulateTokenBalanceCheck(
          address,
          requirement.contractAddress,
        );

        setUserTokenCount(mockTokenBalance);
        setHasAccess(mockTokenBalance >= requirement.requiredTokenCount);
      } catch (error) {
        console.error("Error checking NFT access:", error);
        setHasAccess(false);
        setUserTokenCount(0);
      } finally {
        setIsLoading(false);
      }
    }

    checkNFTAccess();
  }, [threadTitle, isConnected, address, requirement]);

  return {
    hasAccess,
    isLoading,
    requirement,
    userTokenCount,
  };
}

// Mock function to simulate checking token/NFT balance
async function simulateTokenBalanceCheck(
  address: string,
  contractAddress: string,
): Promise<number> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock different scenarios based on contract address
  if (contractAddress.includes("1234")) {
    // Based Builders collection - simulate user having 750 tokens
    return 750;
  } else if (contractAddress.includes("abcd")) {
    // Key Card collection - simulate user having 0 tokens (no access)
    return 0;
  }

  return 0;
}
