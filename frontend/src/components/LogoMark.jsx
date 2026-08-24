import React from 'react';

export default function LogoMark({ className = "w-11 h-11" }) {
  return (
    <div className={`relative ${className} shrink-0 group`}>
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg transform group-hover:scale-105 transition-transform duration-300"
      >
        <defs>
          {/* Gold Gradient */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Forest Jade Gradient */}
          <linearGradient id="jadeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#065F46" />
            <stop offset="60%" stopColor="#064E3B" />
            <stop offset="100%" stopColor="#022C22" />
          </linearGradient>

          {/* Soft Glow Filter */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Gold Ring */}
        <circle cx="60" cy="60" r="56" fill="url(#goldGrad)" />

        {/* Inner Dark Emerald Core */}
        <circle cx="60" cy="60" r="51" fill="url(#jadeGrad)" stroke="#047857" strokeWidth="1.5" />

        {/* Tropical Sun Rays */}
        <path 
          d="M60 16 L60 22 M35 25 L39 29 M85 25 L81 29 M22 47 L28 49 M98 47 L92 49" 
          stroke="url(#goldGrad)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          opacity="0.8"
        />

        {/* Golden Sun Circle */}
        <circle cx="60" cy="42" r="14" fill="url(#goldGrad)" opacity="0.9" />

        {/* Stylized Palm Fronds & Ceylon Leaves */}
        {/* Central Crown Leaves */}
        <path 
          d="M60 52 C52 42 34 44 26 50 C36 54 52 56 60 62 C68 56 84 54 94 50 C86 44 68 42 60 52 Z" 
          fill="url(#goldGrad)" 
        />
        <path 
          d="M60 58 C48 46 26 54 20 64 C32 66 50 64 60 70 C70 64 88 66 100 64 C94 54 72 46 60 58 Z" 
          fill="url(#goldGrad)" 
          opacity="0.9"
        />
        
        {/* Palm Trunk */}
        <path 
          d="M57 66 C56 78 54 90 51 98 L69 98 C66 90 64 78 63 66 Z" 
          fill="url(#goldGrad)" 
        />

        {/* Golden Coconuts / Fruits Emblem */}
        <circle cx="53" cy="64" r="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
        <circle cx="60" cy="67" r="4.5" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
        <circle cx="67" cy="64" r="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />

        {/* Base Ocean Wave Lines */}
        <path 
          d="M26 94 Q43 90 60 94 T94 94" 
          stroke="url(#goldGrad)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.7"
        />
        <path 
          d="M32 100 Q46 97 60 100 T88 100" 
          stroke="url(#goldGrad)" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          fill="none" 
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
