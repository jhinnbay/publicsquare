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
        <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="30%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF8C00" />
        </radialGradient>
        <linearGradient id="rayGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
        <linearGradient id="rayGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF7F" />
          <stop offset="100%" stopColor="#90EE90" />
        </linearGradient>
      </defs>

      {/* Outer border/container */}
      <polygon
        points="25,2 32,8 42,6 40,16 48,20 40,24 42,34 32,32 25,38 18,32 8,34 10,24 2,20 10,16 8,6 18,8"
        fill="#E6E6FA"
        stroke="#D8BFD8"
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Alternating rays - cyan/blue */}
      <polygon
        points="25,25 25,5 28,12"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 35,10 32,15"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 40,15 37,20"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 45,25 38,25"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 40,35 37,30"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 35,40 32,35"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 25,45 22,38"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 15,40 18,35"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 10,35 13,30"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 5,25 12,25"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 10,15 13,20"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />
      <polygon
        points="25,25 15,10 18,15"
        fill="url(#rayGradient1)"
        opacity="0.7"
      />

      {/* Alternating rays - green */}
      <polygon
        points="25,25 30,7 27,13"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 38,12 35,17"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 43,20 40,23"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 43,30 40,27"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 38,38 35,33"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 30,43 27,37"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 20,43 23,37"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 12,38 15,33"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 7,30 10,27"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 7,20 10,23"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 12,12 15,17"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />
      <polygon
        points="25,25 20,7 23,13"
        fill="url(#rayGradient2)"
        opacity="0.7"
      />

      {/* Central star */}
      <polygon
        points="25,15 27,21 33,21 28,25 30,31 25,27 20,31 22,25 17,21 23,21"
        fill="url(#starGradient)"
        stroke="#FFD700"
        strokeWidth="0.5"
      />
    </svg>
  );
}
