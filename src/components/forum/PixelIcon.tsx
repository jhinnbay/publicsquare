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
        <radialGradient id="backgroundGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E6E6FA" />
          <stop offset="100%" stopColor="#B19CD9" />
        </radialGradient>
        <linearGradient id="cyanRay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
        <linearGradient id="greenRay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF7F" />
          <stop offset="100%" stopColor="#90EE90" />
        </linearGradient>
        <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </radialGradient>
      </defs>

      {/* Dodecagonal background */}
      <path
        d="M25,2 L35,6 L43,14 L47,25 L43,36 L35,44 L25,48 L15,44 L7,36 L3,25 L7,14 L15,6 Z"
        fill="url(#backgroundGradient)"
        stroke="#B19CD9"
        strokeWidth="1"
      />

      {/* Top ray (cyan) */}
      <path d="M25,25 L25,2 L28,18 Z" fill="url(#cyanRay)" opacity="0.8" />

      {/* Top-right ray (green) */}
      <path d="M25,25 L35,6 L30,20 Z" fill="url(#greenRay)" opacity="0.8" />

      {/* Right-top ray (cyan) */}
      <path d="M25,25 L43,14 L32,22 Z" fill="url(#cyanRay)" opacity="0.8" />

      {/* Right ray (green) */}
      <path d="M25,25 L47,25 L32,25 Z" fill="url(#greenRay)" opacity="0.8" />

      {/* Right-bottom ray (cyan) */}
      <path d="M25,25 L43,36 L32,28 Z" fill="url(#cyanRay)" opacity="0.8" />

      {/* Bottom-right ray (green) */}
      <path d="M25,25 L35,44 L30,30 Z" fill="url(#greenRay)" opacity="0.8" />

      {/* Bottom ray (cyan) */}
      <path d="M25,25 L25,48 L22,32 Z" fill="url(#cyanRay)" opacity="0.8" />

      {/* Bottom-left ray (green) */}
      <path d="M25,25 L15,44 L20,30 Z" fill="url(#greenRay)" opacity="0.8" />

      {/* Left-bottom ray (cyan) */}
      <path d="M25,25 L7,36 L18,28 Z" fill="url(#cyanRay)" opacity="0.8" />

      {/* Left ray (green) */}
      <path d="M25,25 L3,25 L18,25 Z" fill="url(#greenRay)" opacity="0.8" />

      {/* Left-top ray (cyan) */}
      <path d="M25,25 L7,14 L18,22 Z" fill="url(#cyanRay)" opacity="0.8" />

      {/* Top-left ray (green) */}
      <path d="M25,25 L15,6 L20,20 Z" fill="url(#greenRay)" opacity="0.8" />

      {/* Central yellow star */}
      <path
        d="M25,17 L26.8,21.2 L31.5,21.2 L27.85,24.3 L29.65,28.5 L25,25.4 L20.35,28.5 L22.15,24.3 L18.5,21.2 L23.2,21.2 Z"
        fill="url(#starGradient)"
        stroke="#FFD700"
        strokeWidth="0.3"
      />
    </svg>
  );
}
