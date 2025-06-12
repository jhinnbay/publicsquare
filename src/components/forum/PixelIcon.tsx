import React from "react";

export function PixelIcon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="crystalBase" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0EFFF" />
          <stop offset="60%" stopColor="#D8D0FF" />
          <stop offset="100%" stopColor="#B8A5FF" />
        </radialGradient>
        <linearGradient id="cyanCut" x1="50%" y1="50%" x2="85%" y2="15%">
          <stop offset="30%" stopColor="#E0F8FF" />
          <stop offset="100%" stopColor="#00CED1" />
        </linearGradient>
        <linearGradient id="greenCut" x1="50%" y1="50%" x2="85%" y2="15%">
          <stop offset="30%" stopColor="#E0FFE0" />
          <stop offset="100%" stopColor="#32CD32" />
        </linearGradient>
        <radialGradient id="goldStar" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
      </defs>

      {/* 20-sided polygon crystal outline */}
      <path
        d="M25,1.5 L28,2.5 L31,4.5 L34,7 L37,10 L39.5,13.5 L41.5,17 L43,20.5 L44,23.5 L44.5,25 L44,26.5 L43,29.5 L41.5,33 L39.5,36.5 L37,40 L34,43 L31,45.5 L28,47.5 L25,48.5 L22,47.5 L19,45.5 L16,43 L13,40 L10.5,36.5 L8.5,33 L7,29.5 L6,26.5 L5.5,25 L6,23.5 L7,20.5 L8.5,17 L10.5,13.5 L13,10 L16,7 L19,4.5 L22,2.5 Z"
        fill="url(#crystalBase)"
        stroke="#A599E9"
        strokeWidth="0.5"
        opacity="0.95"
      />

      {/* Top section - cyan */}
      <path
        d="M25,25 L25,2.5 L28,2.5 L26.5,20 L23.5,20 Z"
        fill="url(#cyanCut)"
      />

      {/* Top-right - green */}
      <path d="M25,25 L31,4.5 L34,7 L28,19 L25,16 Z" fill="url(#greenCut)" />

      {/* Right-top - cyan */}
      <path d="M25,25 L37,10 L39.5,13.5 L30,21 L27,18 Z" fill="url(#cyanCut)" />

      {/* Right - green */}
      <path
        d="M25,25 L41.5,17 L43,20.5 L32,23 L32,27 Z"
        fill="url(#greenCut)"
      />

      {/* Right-center - cyan */}
      <path d="M25,25 L44,23.5 L44.5,25 L32,25 Z" fill="url(#cyanCut)" />

      {/* Right-bottom - green */}
      <path
        d="M25,25 L43,29.5 L41.5,33 L32,27 L32,23 Z"
        fill="url(#greenCut)"
      />

      {/* Bottom-right - cyan */}
      <path d="M25,25 L39.5,36.5 L37,40 L30,29 L27,32 Z" fill="url(#cyanCut)" />

      {/* Bottom - green */}
      <path d="M25,25 L34,43 L31,45.5 L28,31 L25,34 Z" fill="url(#greenCut)" />

      {/* Bottom-center - cyan */}
      <path
        d="M25,25 L25,47.5 L22,47.5 L23.5,30 L26.5,30 Z"
        fill="url(#cyanCut)"
      />

      {/* Bottom-left - green */}
      <path d="M25,25 L19,45.5 L16,43 L22,31 L25,34 Z" fill="url(#greenCut)" />

      {/* Left-bottom - cyan */}
      <path d="M25,25 L10.5,36.5 L13,40 L20,29 L23,32 Z" fill="url(#cyanCut)" />

      {/* Left - green */}
      <path d="M25,25 L8.5,33 L7,29.5 L18,27 L18,23 Z" fill="url(#greenCut)" />

      {/* Left-center - cyan */}
      <path d="M25,25 L6,23.5 L5.5,25 L18,25 Z" fill="url(#cyanCut)" />

      {/* Left-top - green */}
      <path d="M25,25 L7,20.5 L8.5,17 L18,23 L18,27 Z" fill="url(#greenCut)" />

      {/* Top-left - cyan */}
      <path d="M25,25 L10.5,13.5 L13,10 L20,21 L23,18 Z" fill="url(#cyanCut)" />

      {/* Top-left corner - green */}
      <path d="M25,25 L16,7 L19,4.5 L22,19 L25,16 Z" fill="url(#greenCut)" />

      {/* Central 5-pointed star */}
      <path
        d="M25,15.5 L27.5,20.8 L33.2,20.8 L28.85,24.6 L31.35,29.9 L25,26.1 L18.65,29.9 L21.15,24.6 L16.8,20.8 L22.5,20.8 Z"
        fill="url(#goldStar)"
        stroke="#FFD700"
        strokeWidth="0.3"
      />
    </svg>
  );
}
