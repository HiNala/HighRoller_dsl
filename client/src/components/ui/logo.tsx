import React from 'react';

export default function Logo() {
  return (
    <div className="h-10 w-10 rounded-md bg-[#3C3C3C] flex items-center justify-center shadow-sm transition-transform hover:scale-105 relative overflow-hidden">
      {/* Letter M */}
      <svg viewBox="0 0 64 64" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 16v32h8V28.8L32 40l10-11.2V48h8V16h-8L32 28.8 22 16h-8z" fill="#D88F2C"/>
        
        {/* Subtle accent lines */}
        <rect x="12" y="54" width="40" height="2" fill="#D88F2C" opacity="0.7"/>
        <rect x="12" y="8" width="40" height="2" fill="#D88F2C" opacity="0.7"/>
      </svg>
    </div>
  );
}
