import React from "react";

export function PixelIcon() {
  return (
    <div className="w-[50px] h-[50px] flex-shrink-0 bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 rounded-full flex items-center justify-center">
      {/* Crystal star image would go here */}
      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
        <span className="text-white text-xl">⭐</span>
      </div>
    </div>
  );
}
