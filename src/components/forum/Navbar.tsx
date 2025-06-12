import React from "react";
import { MessageCircle, Wallet } from "lucide-react";
import { ConnectWalletButton } from "./ConnectWalletButton";

export function Navbar() {
  return (
    <div className="flex h-[100px] px-8 py-2.5 justify-between items-center bg-gradient-to-r from-[#264EA4] via-[#4158ED] via-[#297FE8] via-[#2246BC] to-[#181862] rounded-b-3xl border-x border-b border-[#44DFE9]">
      {/* Logo and Brand */}
      <div className="flex items-center justify-between w-[405px]">
        {/* Logo */}
        <div className="relative w-[37px] h-[40px]">
          <div className="absolute w-6 h-6 border-2 border-white left-[6px] top-2"></div>
          <div className="absolute w-6 h-6 border-2 border-white left-3 top-4"></div>
          <div className="absolute w-6 h-6 border-2 border-white left-3 top-0"></div>
          <div className="absolute w-6 h-6 border-2 border-white left-0 top-[3px]"></div>
        </div>

        {/* Brand and Navigation */}
        <div className="flex items-center gap-10 px-1">
          <h1
            className="text-[32px] font-bold leading-[22px] bg-gradient-to-r from-[#CF57DC] to-[#83BCF3] bg-clip-text text-transparent"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Public.Square
          </h1>

          <div className="flex items-center gap-3">
            {/* Message Icon */}
            <div className="flex w-[37px] h-[37px] p-2.5 justify-center items-center gap-2.5 rounded-xl border border-white bg-[#FF26DC] shadow-[0px_1px_10.4px_0px_rgba(46,44,166,0.40)]">
              <div className="relative">
                <MessageCircle className="w-5 h-5 text-white" />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#FFDB1E] rounded-full"></div>
              </div>
            </div>

            {/* Wallet Icon */}
            <div className="flex w-[37px] h-[37px] p-2.5 justify-center items-center gap-2.5 rounded-xl border border-white bg-[#27BBFB] shadow-[0px_1px_10.4px_0px_rgba(46,44,166,0.40)]">
              <Wallet className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <ConnectWalletButton />
    </div>
  );
}
