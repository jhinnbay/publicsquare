import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ForumRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ForumRulesModal({ isOpen, onClose }: ForumRulesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] mx-4 bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] rounded-2xl border-2 border-[#ABABF9] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#ABABF9]/30">
          <h1
            className="text-3xl font-bold text-black"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Rules
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 text-black hover:bg-black/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  1
                </span>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  2
                </span>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  3
                </span>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  4
                </span>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  5
                </span>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  6
                </span>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  7
                </span>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  8
                </span>
                <p
                  className="text-black text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#ABABF9]/30">
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            I Understand
          </Button>
        </div>
      </div>
    </div>
  );
}
