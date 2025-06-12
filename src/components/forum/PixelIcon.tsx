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
          <stop offset="0%" stopColor="#E8E4FF" />
          <stop offset="100%" stopColor="#B8A9FF" />
        </radialGradient>
        <linearGradient id="cyanRay" x1="50%" y1="50%" x2="100%" y2="0%">
          <stop offset="20%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#00BFFF" />
        </linearGradient>
        <linearGradient id="greenRay" x1="50%" y1="50%" x2="100%" y2="0%">
          <stop offset="20%" stopColor="#98FB98" />
          <stop offset="100%" stopColor="#32CD32" />
        </linearGradient>
        <radialGradient id="starCenter" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#FFFF4D" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </radialGradient>
      </defs>

      {/* Outer dodecagonal crystal shape */}
      <path
        d="M25,1 L32,4 L39,11 L42,18 L46,25 L42,32 L39,39 L32,46 L25,49 L18,46 L11,39 L8,32 L4,25 L8,18 L11,11 L18,4 Z"
        fill="url(#backgroundGradient)"
        stroke="#A594D9"
        strokeWidth="1.5"
        opacity="0.9"
      />

      {/* 12 alternating rays - cyan (main directions) */}
      <path
        d="M25,25 L25,4 L27,20 L23,20 Z"
        fill="url(#cyanRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L39,11 L30,22 L28,18 Z"
        fill="url(#cyanRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L46,25 L30,27 L30,23 Z"
        fill="url(#cyanRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L39,39 L30,28 L28,32 Z"
        fill="url(#cyanRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L25,46 L23,30 L27,30 Z"
        fill="url(#cyanRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L11,39 L20,28 L22,32 Z"
        fill="url(#cyanRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L4,25 L20,23 L20,27 Z"
        fill="url(#cyanRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L11,11 L20,22 L22,18 Z"
        fill="url(#cyanRay)"
        opacity="0.85"
      />

      {/* 4 alternating rays - green (diagonal directions) */}
      <path
        d="M25,25 L32,4 L29,19 L26,17 Z"
        fill="url(#greenRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L42,18 L31,24 L29,21 Z"
        fill="url(#greenRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L42,32 L31,26 L29,29 Z"
        fill="url(#greenRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L32,46 L29,31 L26,33 Z"
        fill="url(#greenRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L18,46 L21,31 L24,33 Z"
        fill="url(#greenRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L8,32 L19,26 L21,29 Z"
        fill="url(#greenRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L8,18 L19,24 L21,21 Z"
        fill="url(#greenRay)"
        opacity="0.85"
      />
      <path
        d="M25,25 L18,4 L21,19 L24,17 Z"
        fill="url(#greenRay)"
        opacity="0.85"
      />

      {/* Central 5-pointed star */}
      <path
        d="M25,16 L26.9,21.1 L32.4,21.1 L28.25,24.4 L30.15,29.5 L25,26.2 L19.85,29.5 L21.75,24.4 L17.6,21.1 L23.1,21.1 Z"
        fill="url(#starCenter)"
        stroke="#FFD700"
        strokeWidth="0.5"
      />

      {/* Inner highlight on star */}
      <circle cx="25" cy="22.5" r="2" fill="#FFFF99" opacity="0.8" />
    </svg>
  );
}
