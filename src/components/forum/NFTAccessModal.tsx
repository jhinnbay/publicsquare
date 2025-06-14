import React from "react";
import { X, Lock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NFTAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  requirement: {
    collection: string;
    contractAddress: string | null;
    requiredTokenCount: number;
    badge: string;
  };
  userTokenCount: number;
}

export function NFTAccessModal({
  isOpen,
  onClose,
  requirement,
  userTokenCount,
}: NFTAccessModalProps) {
  if (!isOpen) return null;

  const shortfall = requirement.requiredTokenCount - userTokenCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] rounded-2xl border-2 border-[#ABABF9] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#ABABF9]/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-full">
              <Lock className="w-5 h-5 text-red-600" />
            </div>
            <h2
              className="text-xl font-bold text-black"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Access Restricted
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 text-black hover:bg-black/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="text-center">
            <Badge
              className="mb-4 h-12 px-6 py-3 text-base font-bold"
              variant="outline"
            >
              {requirement.badge}
            </Badge>
            <p
              className="text-black mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              This forum thread requires ownership of{" "}
              <span className="font-semibold">{requirement.collection}</span>{" "}
              NFTs to access.
            </p>
          </div>

          <div className="bg-white/50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span
                className="text-sm text-black/70"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Required:
              </span>
              <span
                className="font-semibold text-black"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {requirement.requiredTokenCount.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span
                className="text-sm text-black/70"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                You have:
              </span>
              <span
                className={`font-semibold ${
                  userTokenCount >= requirement.requiredTokenCount
                    ? "text-green-600"
                    : "text-red-600"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {userTokenCount.toLocaleString()}
              </span>
            </div>
            {shortfall > 0 && (
              <div className="flex justify-between items-center pt-2 border-t border-black/10">
                <span
                  className="text-sm text-red-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Missing:
                </span>
                <span
                  className="font-semibold text-red-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {shortfall.toLocaleString()}
                </span>
              </div>
            )}
          </div>

          <div className="text-center text-sm text-black/60">
            <p style={{ fontFamily: "DM Sans, sans-serif" }}>
              Get access by purchasing {requirement.collection} NFTs or earning
              the required tokens.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#ABABF9]/30 space-y-3">
          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Collection
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full border-2 border-[#ABABF9] hover:bg-[#ABABF9]/10"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
