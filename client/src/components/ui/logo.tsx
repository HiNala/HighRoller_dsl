import React from 'react';

export default function Logo() {
  return (
    <div className="h-10 w-10 rounded-md bg-[#2C2C2C] flex items-center justify-center shadow-sm transition-transform hover:scale-105 relative overflow-hidden">
      {/* Letter H for High Roller */}
      <svg viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16v32h8V36h16v12h8V16h-8v12H24V16h-8z" fill="#D4AF37"/>
        
        {/* Subtle accent lines */}
        <rect x="12" y="54" width="40" height="2" fill="#D4AF37" opacity="0.7"/>
        <rect x="12" y="8" width="40" height="2" fill="#D4AF37" opacity="0.7"/>
      </svg>
    </div>
  );
}
