import React from "react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/useWallet";
import { Wallet, LogOut } from "lucide-react";

export function ConnectWalletButton() {
  const {
    ready,
    isConnected,
    formattedAddress,
    connectWallet,
    disconnectWallet,
  } = useWallet();

  // Check if Privy is properly configured
  const privyAppId = import.meta.env.VITE_PRIVY_APP_ID;
  const isValidAppId =
    privyAppId &&
    privyAppId !== "your-privy-app-id" &&
    privyAppId.startsWith("clp") &&
    privyAppId.length > 10;

  if (!ready) {
    return (
      <Button
        disabled
        className="h-[58px] px-8 py-3 gap-2 rounded-lg border-2 border-white bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0px_4px_0px_0px_#000] text-white text-lg font-medium opacity-50"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Loading...
      </Button>
    );
  }

  if (isConnected && formattedAddress) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 rounded-lg border-2 border-white text-white text-sm font-medium">
          <Wallet className="w-4 h-4" />
          <span style={{ fontFamily: "DM Sans, sans-serif" }}>
            {formattedAddress}
          </span>
        </div>
        <Button
          onClick={disconnectWallet}
          variant="outline"
          size="sm"
          className="h-[42px] px-4 py-2 gap-1 rounded-lg border-2 border-white bg-transparent hover:bg-white/10 text-white text-sm font-medium"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          <LogOut className="w-4 h-4" />
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={connectWallet}
      className={`h-[58px] px-8 py-3 gap-2 rounded-lg border-2 border-white shadow-[0px_4px_0px_0px_#000] hover:shadow-[0px_2px_0px_0px_#000] hover:translate-y-0.5 transition-all text-white text-lg font-medium ${
        !isValidAppId
          ? "bg-gradient-to-r from-orange-600 to-orange-500"
          : "bg-gradient-to-r from-purple-600 to-blue-500"
      }`}
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      {!isValidAppId ? "Connect Wallet (Dev)" : "Connect Wallet"}
    </Button>
  );
}
