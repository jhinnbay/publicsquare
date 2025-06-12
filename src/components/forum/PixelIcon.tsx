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
        <radialGradient id="crystalBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8E4FF" />
          <stop offset="80%" stopColor="#C8BFFF" />
          <stop offset="100%" stopColor="#A89AFF" />
        </radialGradient>
        <linearGradient id="cyanFacet" x1="50%" y1="50%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B0E0E6" />
          <stop offset="100%" stopColor="#00CED1" />
        </linearGradient>
        <linearGradient id="greenFacet" x1="50%" y1="50%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8FFB8" />
          <stop offset="100%" stopColor="#00FF7F" />
        </linearGradient>
        <radialGradient id="yellowStar" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="80%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </radialGradient>
      </defs>

      {/* Outer crystal border - 12-sided */}
      <path
        d="M25,2 L31,5 L37,8 L41,14 L44,20 L47,25 L44,30 L41,36 L37,42 L31,45 L25,48 L19,45 L13,42 L9,36 L6,30 L3,25 L6,20 L9,14 L13,8 L19,5 Z"
        fill="url(#crystalBg)"
        stroke="#9F8FFF"
        strokeWidth="1"
        opacity="0.95"
      />

      {/* Angular crystal facets - cyan */}
      <path
        d="M25,25 L25,5 L31,5 L28,18 Z"
        fill="url(#cyanFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L37,8 L41,14 L32,20 Z"
        fill="url(#cyanFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L47,25 L44,30 L32,27 Z"
        fill="url(#cyanFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L37,42 L31,45 L28,32 Z"
        fill="url(#cyanFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L25,45 L19,45 L22,32 Z"
        fill="url(#cyanFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L13,42 L9,36 L18,30 Z"
        fill="url(#cyanFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L3,25 L6,20 L18,23 Z"
        fill="url(#cyanFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L13,8 L19,5 L22,18 Z"
        fill="url(#cyanFacet)"
        opacity="0.9"
      />

      {/* Angular crystal facets - green (alternating) */}
      <path
        d="M25,25 L31,5 L37,8 L30,19 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L41,14 L44,20 L33,22 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L44,20 L47,25 L34,25 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L44,30 L41,36 L33,28 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L41,36 L37,42 L30,31 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L31,45 L25,45 L26,33 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L19,45 L13,42 L20,31 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L9,36 L6,30 L17,28 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L6,30 L3,25 L16,25 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L6,20 L9,14 L17,22 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L9,14 L13,8 L20,19 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />
      <path
        d="M25,25 L19,5 L25,5 L24,17 Z"
        fill="url(#greenFacet)"
        opacity="0.9"
      />

      {/* Central 5-pointed star */}
      <path
        d="M25,17 L27,22 L32,22 L28.5,25.5 L30,30 L25,27.5 L20,30 L21.5,25.5 L18,22 L23,22 Z"
        fill="url(#yellowStar)"
        stroke="#FFD700"
        strokeWidth="0.5"
      />
    </svg>
  );
}
