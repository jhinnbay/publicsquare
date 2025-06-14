import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle } from "lucide-react";
import { useNFTGating } from "@/hooks/useNFTGating";
import { NFTAccessModal } from "./NFTAccessModal";

interface ForumCardProps {
  title: string;
  description: string;
  badge: {
    text: string;
    variant: "default" | "secondary" | "outline" | "cyan";
    color?: string;
  };
  icon?: React.ReactNode;
}

export function ForumCard({ title, description, badge, icon }: ForumCardProps) {
  const [showAccessModal, setShowAccessModal] = useState(false);
  const { hasAccess, isLoading, requirement, userTokenCount } = useNFTGating(title);

  const getBadgeClasses = () => {
    const baseClasses = hasAccess
      ? ""
      : "opacity-75 grayscale";

    switch (badge.variant) {
      case "cyan":
        return `bg-[#44DFE9] text-[#F9FAFB] border-none w-full ${baseClasses}`;
      case "default":
        return `bg-gradient-to-r from-purple-600 to-blue-500 text-white border-none w-[100px] ${baseClasses}`;
      default:
        return `w-[100px] ${baseClasses}`;
    }
  };

  const handleCardClick = () => {
    if (!hasAccess && requirement) {
      setShowAccessModal(true);
    }
  };

  return (
    <>
      <div
        className={`flex h-[88px] px-8 py-2.5 justify-between items-center border border-[#6B7280] bg-[#111827] bg-blend-color-dodge w-full ${
          !hasAccess ? "cursor-pointer hover:bg-[#1f2937] transition-colors" : ""
        } ${!hasAccess ? "opacity-80" : ""}`}
        onClick={handleCardClick}
        <div className="flex items-center gap-2.5">
          {/* Icon */}
          {icon && <div className="flex-shrink-0">{icon}</div>}

          {/* Content */}
          <div className="flex flex-col justify-center items-start gap-2.5 w-full max-w-[654px]">
            <div className="flex items-center gap-2">
              <h3
                className={`text-sm font-medium bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent ${
                  !hasAccess ? "opacity-75" : ""
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {title}
              </h3>
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              ) : !hasAccess ? (
                <Lock className="w-4 h-4 text-red-400" />
              ) : (
                <CheckCircle className="w-4 h-4 text-green-400" />
              )}
            </div>
            <p
              className={`text-sm font-medium text-[#6B7280] leading-[18px] ${
                !hasAccess ? "opacity-75" : ""
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {!hasAccess && requirement
                ? `🔒 Requires ${requirement.collection} NFTs to access`
                : description}
            </p>
          </div>
        </div>

        {/* Badge */}
        <div className="flex-shrink-0 flex flex-col">
          <Badge
            className={`h-10 px-4 py-2 rounded-[44px] text-[10px] font-black leading-none text-center mx-auto ${getBadgeClasses()}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {badge.text}
          </Badge>
          {!hasAccess && requirement && (
            <div className="text-xs text-red-400 text-center mt-1">
              {userTokenCount}/{requirement.requiredTokenCount}
            </div>
          )}
        </div>
      </div>

      {/* NFT Access Modal */}
      {requirement && (
        <NFTAccessModal
          isOpen={showAccessModal}
          onClose={() => setShowAccessModal(false)}
          requirement={requirement}
          userTokenCount={userTokenCount}
        />
      )}
    </>
  );
}