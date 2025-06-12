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
        <radialGradient id="polygonBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EBEAFF" />
          <stop offset="70%" stopColor="#D4CFFF" />
          <stop offset="100%" stopColor="#BAA9FF" />
        </radialGradient>
        <linearGradient id="cyanFacet" x1="50%" y1="50%" x2="100%" y2="0%">
          <stop offset="40%" stopColor="#B8E6FF" />
          <stop offset="100%" stopColor="#20B2AA" />
        </linearGradient>
        <linearGradient id="greenFacet" x1="50%" y1="50%" x2="100%" y2="0%">
          <stop offset="40%" stopColor="#C8FFC8" />
          <stop offset="100%" stopColor="#32CD32" />
        </linearGradient>
        <radialGradient id="starCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF55" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </radialGradient>
      </defs>

      {/* 16-sided polygon border */}
      <path
        d="M25,2 L29,3 L33,6 L36,9 L39,13 L42,17 L44,21 L46,25 L44,29 L42,33 L39,37 L36,41 L33,44 L29,47 L25,48 L21,47 L17,44 L14,41 L11,37 L8,33 L6,29 L4,25 L6,21 L8,17 L11,13 L14,9 L17,6 L21,3 Z"
        fill="url(#polygonBg)"
        stroke="#A599E9"
        strokeWidth="0.8"
      />

      {/* Primary rays - cyan (12 o'clock, 3 o'clock, 6 o'clock, 9 o'clock) */}
      <path d="M25,25 L25,3 L29,3 L27,18 L23,18 Z" fill="url(#cyanFacet)" />
      <path d="M25,25 L46,25 L44,21 L31,23 L31,27 Z" fill="url(#cyanFacet)" />
      <path d="M25,25 L25,47 L21,47 L23,32 L27,32 Z" fill="url(#cyanFacet)" />
      <path d="M25,25 L4,25 L6,29 L19,27 L19,23 Z" fill="url(#cyanFacet)" />

      {/* Secondary rays - green (1:30, 4:30, 7:30, 10:30) */}
      <path d="M25,25 L33,6 L36,9 L29,20 L26,17 Z" fill="url(#greenFacet)" />
      <path d="M25,25 L44,29 L42,33 L31,28 L34,25 Z" fill="url(#greenFacet)" />
      <path d="M25,25 L17,44 L14,41 L21,30 L24,33 Z" fill="url(#greenFacet)" />
      <path d="M25,25 L6,21 L8,17 L19,22 L16,25 Z" fill="url(#greenFacet)" />

      {/* Tertiary rays - cyan (2:30, 5:30, 8:30, 11:30) */}
      <path d="M25,25 L39,13 L42,17 L32,22 L29,19 Z" fill="url(#cyanFacet)" />
      <path d="M25,25 L39,37 L36,41 L29,30 L32,27 Z" fill="url(#cyanFacet)" />
      <path d="M25,25 L11,37 L8,33 L18,28 L21,31 Z" fill="url(#cyanFacet)" />
      <path d="M25,25 L11,13 L14,9 L22,18 L19,21 Z" fill="url(#cyanFacet)" />

      {/* Additional rays - green */}
      <path d="M25,25 L29,3 L33,6 L28,19 L26,16 Z" fill="url(#greenFacet)" />
      <path d="M25,25 L44,21 L44,29 L33,26 L33,24 Z" fill="url(#greenFacet)" />
      <path d="M25,25 L21,47 L17,44 L22,31 L24,34 Z" fill="url(#greenFacet)" />
      <path d="M25,25 L6,29 L6,21 L17,24 L17,26 Z" fill="url(#greenFacet)" />

      {/* Central 5-pointed star */}
      <path
        d="M25,16 L27.3,21.2 L32.8,21.2 L28.75,24.9 L31.05,30.1 L25,26.4 L18.95,30.1 L21.25,24.9 L17.2,21.2 L22.7,21.2 Z"
        fill="url(#starCore)"
        stroke="#FFD700"
        strokeWidth="0.4"
      />
    </svg>
  );
}
