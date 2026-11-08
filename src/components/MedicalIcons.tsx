import React from 'react';

export const LungsIcon: React.FC<{ className?: string }> = ({
  className = 'w-9 h-9',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Trachea */}
    <path d="M24 6V19" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M21 9H27" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M21 12H27" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M21 15H27" className="text-[#3D8CA0]" stroke="currentColor" />
    
    {/* Bronchi branches */}
    <path d="M24 19L18 24M18 24L14 26M18 24L17 29" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M24 19L30 24M30 24L34 26M30 24L31 29" className="text-[#3D8CA0]" stroke="currentColor" />

    {/* Left Lung outline */}
    <path
      d="M21 20C17 20 10 23 9 31C8 38 11 42 16 42C20 42 22 38 22 30V20Z"
      className="text-[#3D8CA0]"
      stroke="currentColor"
    />

    {/* Right Lung outline */}
    <path
      d="M27 20C31 20 38 23 39 31C40 38 37 42 32 42C28 42 26 38 26 30V20Z"
      className="text-[#3D8CA0]"
      stroke="currentColor"
    />
  </svg>
);

export const AllergologyIcon: React.FC<{ className?: string }> = ({
  className = 'w-9 h-9',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Center node */}
    <circle cx="24" cy="24" r="4.5" className="text-[#3D8CA0]" stroke="currentColor" />
    
    {/* Pollen / Petals */}
    <circle cx="24" cy="11" r="3" className="text-[#3D8CA0]" stroke="currentColor" />
    <circle cx="24" cy="37" r="3" className="text-[#3D8CA0]" stroke="currentColor" />
    <circle cx="11" cy="24" r="3" className="text-[#3D8CA0]" stroke="currentColor" />
    <circle cx="37" cy="24" r="3" className="text-[#3D8CA0]" stroke="currentColor" />
    
    <circle cx="15" cy="15" r="2.5" className="text-[#3D8CA0]" stroke="currentColor" />
    <circle cx="33" cy="15" r="2.5" className="text-[#3D8CA0]" stroke="currentColor" />
    <circle cx="15" cy="33" r="2.5" className="text-[#3D8CA0]" stroke="currentColor" />
    <circle cx="33" cy="33" r="2.5" className="text-[#3D8CA0]" stroke="currentColor" />
    
    {/* Radiating connecting lines */}
    <path d="M24 14V19.5" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M24 28.5V34" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M14 24H19.5" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M28.5 24H34" className="text-[#3D8CA0]" stroke="currentColor" />
  </svg>
);

export const CareHeartIcon: React.FC<{ className?: string }> = ({
  className = 'w-9 h-9',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M24 39S10 30 10 19C10 13.5 14.5 9 20 9C22.5 9 24 10.5 24 10.5S25.5 9 28 9C33.5 9 38 13.5 38 19C38 30 24 39 24 39Z"
      className="text-[#3D8CA0]"
      stroke="currentColor"
    />
  </svg>
);

export const ClinicBuildingIcon: React.FC<{ className?: string }> = ({
  className = 'w-5 h-5',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M9 9h1" />
    <path d="M9 13h1" />
    <path d="M9 17h1" />
    <path d="M14 9h1" />
    <path d="M14 13h1" />
    <path d="M14 17h1" />
  </svg>
);

export const StethoscopeBadgeIcon: React.FC<{ className?: string }> = ({
  className = 'w-4 h-4',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M3 3h3M12 3h3" className="text-[#3D8CA0]" stroke="currentColor" />
    <path d="M9 12.5V17a3 3 0 0 0 6 0v-2" className="text-[#3D8CA0]" stroke="currentColor" />
    <circle cx="18" cy="15" r="2.5" className="text-[#3D8CA0]" stroke="currentColor" />
  </svg>
);

