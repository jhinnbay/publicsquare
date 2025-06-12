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
          <stop offset="80%" stopColor="#D8BFD8" />
          <stop offset="100%" stopColor="#C8A2C8" />
        </radialGradient>
        <linearGradient id="cyanRay" x1="50%" y1="50%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#00FFFF" />
        </linearGradient>
        <linearGradient id="greenRay" x1="50%" y1="50%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#98FB98" />
          <stop offset="100%" stopColor="#00FF7F" />
        </linearGradient>
        <radialGradient id="centerStar" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF8C00" />
        </radialGradient>
      </defs>

      {/* Circular background */}
      <circle
        cx="25"
        cy="25"
        r="24"
        fill="url(#backgroundGradient)"
        opacity="0.9"
      />

      {/* Radiating rays - cyan/blue set */}
      <path d="M25,25 L25,3 L27,15 Z" fill="url(#cyanRay)" opacity="0.8" />
      <path d="M25,25 L38,7 L32,17 Z" fill="url(#cyanRay)" opacity="0.8" />
      <path d="M25,25 L47,25 L35,25 Z" fill="url(#cyanRay)" opacity="0.8" />
      <path d="M25,25 L38,43 L32,33 Z" fill="url(#cyanRay)" opacity="0.8" />
      <path d="M25,25 L25,47 L23,35 Z" fill="url(#cyanRay)" opacity="0.8" />
      <path d="M25,25 L12,43 L18,33 Z" fill="url(#cyanRay)" opacity="0.8" />
      <path d="M25,25 L3,25 L15,25 Z" fill="url(#cyanRay)" opacity="0.8" />
      <path d="M25,25 L12,7 L18,17 Z" fill="url(#cyanRay)" opacity="0.8" />

      {/* Radiating rays - green set (offset) */}
      <path d="M25,25 L31,5 L29,16 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L45,12 L34,20 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L45,31 L34,27 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L45,38 L34,30 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L31,45 L29,34 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L19,45 L21,34 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L5,38 L16,30 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L5,31 L16,27 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L5,19 L16,23 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L5,12 L16,20 Z" fill="url(#greenRay)" opacity="0.8" />
      <path d="M25,25 L19,5 L21,16 Z" fill="url(#greenRay)" opacity="0.8" />

      {/* Central star */}
      <path
        d="M25,18 L26.5,22.5 L31,22.5 L27.75,25.25 L29.25,29.75 L25,27 L20.75,29.75 L22.25,25.25 L19,22.5 L23.5,22.5 Z"
        fill="url(#centerStar)"
        stroke="#FFD700"
        strokeWidth="0.5"
      />
    </svg>
  );
}
