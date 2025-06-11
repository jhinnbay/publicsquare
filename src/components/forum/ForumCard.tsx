import React from "react";
import { Badge } from "@/components/ui/badge";

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
  const getBadgeClasses = () => {
    switch (badge.variant) {
      case "cyan":
        return "bg-[#44DFE9] text-[#F9FAFB] border-none";
      case "default":
        return "bg-gradient-to-r from-purple-600 to-blue-500 text-white border-none";
      default:
        return "";
    }
  };

  return (
    <div className="flex h-[88px] px-8 py-2.5 justify-between items-center border border-[#6B7280] bg-[#111827] bg-blend-color-dodge w-full">
      <div className="flex items-center gap-2.5">
        {/* Icon */}
        {icon && <div className="flex-shrink-0">{icon}</div>}

        {/* Content */}
        <div className="flex flex-col justify-center items-start gap-2.5 w-full max-w-[654px]">
          <h3
            className="text-sm font-medium bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {title}
          </h3>
          <p
            className="text-sm font-medium text-[#6B7280] leading-[18px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Badge */}
      <div className="flex-shrink-0">
        <Badge
          className={`h-10 px-4 py-2 rounded-[44px] text-[10px] font-black leading-none ${getBadgeClasses()}`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {badge.text}
        </Badge>
      </div>
    </div>
  );
}
