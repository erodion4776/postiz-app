'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      role="img"
      aria-label="XTOP Social Studio"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
    >
      <defs>
        <linearGradient id="xtop-logo-gradient" x1="7" y1="6" x2="53" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="54" height="54" rx="16" fill="#151321" />
      <path
        d="M16 15H25.2L44 45H34.8L16 15Z"
        fill="url(#xtop-logo-gradient)"
      />
      <path
        d="M43.5 15H34.3L15.5 45H24.7L43.5 15Z"
        fill="url(#xtop-logo-gradient)"
      />
      <path d="M15 15H25L45 45H35L15 15Z" fill="white" fillOpacity=".12" />
    </svg>
  );
};
