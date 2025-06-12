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
        <radialGradient id="outerRing" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E6E4FF" />
          <stop offset="70%" stopColor="#D0CAFF" />
          <stop offset="100%" stopColor="#B8A9FF" />
        </radialGradient>
        <linearGradient id="cyanRay" x1="50%" y1="50%" x2="80%" y2="20%">
          <stop offset="30%" stopColor="#C0F0FF" />
          <stop offset="100%" stopColor="#40E0D0" />
        </linearGradient>
        <linearGradient id="greenRay" x1="50%" y1="50%" x2="80%" y2="20%">
          <stop offset="30%" stopColor="#C0FFC0" />
          <stop offset="100%" stopColor="#00FF80" />
        </linearGradient>
        <radialGradient id="centerStar" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF4D" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </radialGradient>
      </defs>

      {/* Outer circular boundary */}
      <circle
        cx="25"
        cy="25"
        r="23"
        fill="url(#outerRing)"
        stroke="#A594D9"
        strokeWidth="1"
        opacity="0.9"
      />

      {/* Main directional rays - cyan */}
      <path d="M25,25 L25,3 L29,3 L27,20 L23,20 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L47,25 L47,21 L30,23 L30,27 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L25,47 L21,47 L23,30 L27,30 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L3,25 L3,29 L20,27 L20,23 Z" fill="url(#cyanRay)" />

      {/* Diagonal rays - green */}
      <path d="M25,25 L38,7 L41,10 L31,21 L28,18 Z" fill="url(#greenRay)" />
      <path d="M25,25 L43,38 L40,41 L29,31 L32,28 Z" fill="url(#greenRay)" />
      <path d="M25,25 L12,43 L9,40 L19,29 L22,32 Z" fill="url(#greenRay)" />
      <path d="M25,25 L7,12 L10,9 L21,19 L18,22 Z" fill="url(#greenRay)" />

      {/* Secondary diagonal rays - cyan */}
      <path d="M25,25 L36,10 L38,13 L30,22 L27,19 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L40,36 L37,38 L28,30 L31,27 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L14,40 L12,37 L20,28 L23,31 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L10,14 L13,12 L22,20 L19,23 Z" fill="url(#cyanRay)" />

      {/* Additional intermediate rays - green */}
      <path d="M25,25 L32,6 L34,8 L28,19 L26,17 Z" fill="url(#greenRay)" />
      <path d="M25,25 L44,32 L42,34 L31,28 L33,26 Z" fill="url(#greenRay)" />
      <path d="M25,25 L18,44 L16,42 L22,31 L24,33 Z" fill="url(#greenRay)" />
      <path d="M25,25 L6,18 L8,16 L19,22 L17,24 Z" fill="url(#greenRay)" />

      {/* More intermediate rays - cyan */}
      <path d="M25,25 L30,5 L32,7 L27,18 L25,16 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L45,30 L43,32 L32,27 L34,25 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L20,45 L18,43 L23,32 L25,34 Z" fill="url(#cyanRay)" />
      <path d="M25,25 L5,20 L7,18 L18,23 L16,25 Z" fill="url(#cyanRay)" />

      {/* Central 5-pointed star */}
      <path
        d="M25,16.5 L27.2,21.5 L32.5,21.5 L28.65,24.75 L30.85,29.75 L25,26.5 L19.15,29.75 L21.35,24.75 L17.5,21.5 L22.8,21.5 Z"
        fill="url(#centerStar)"
        stroke="#FFD700"
        strokeWidth="0.3"
      />
    </svg>
  );
}
