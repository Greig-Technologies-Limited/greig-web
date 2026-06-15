// Greig Technologies globe icon — matches the logo aesthetic:
// green sphere with network node pattern, professional and clean.

export default function GlobeIcon({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="globeGrad" cx="38%" cy="35%" r="62%">
          <stop offset="0%"   stopColor="#6dcc72" />
          <stop offset="45%"  stopColor="#3a9e3f" />
          <stop offset="100%" stopColor="#1a5c1e" />
        </radialGradient>
        <radialGradient id="globeSheen" cx="38%" cy="30%" r="45%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="globeClip">
          <circle cx="50" cy="50" r="44" />
        </clipPath>
      </defs>

      {/* Outer shadow ring */}
      <circle cx="50" cy="50" r="46" fill="rgba(0,0,0,0.25)" />

      {/* Globe fill */}
      <circle cx="50" cy="50" r="44" fill="url(#globeGrad)" />

      {/* Network lines clipped inside globe */}
      <g clipPath="url(#globeClip)" stroke="#1a5c1e" strokeWidth="1.4" strokeOpacity="0.65" fill="none">
        {/* Main connecting lines */}
        <line x1="50" y1="50" x2="28" y2="28" />
        <line x1="50" y1="50" x2="72" y2="28" />
        <line x1="50" y1="50" x2="20" y2="58" />
        <line x1="50" y1="50" x2="78" y2="60" />
        <line x1="50" y1="50" x2="48" y2="82" />
        <line x1="50" y1="50" x2="68" y2="74" />
        {/* Cross connections */}
        <line x1="28" y1="28" x2="72" y2="28" />
        <line x1="28" y1="28" x2="20" y2="58" />
        <line x1="72" y1="28" x2="78" y2="60" />
        <line x1="20" y1="58" x2="48" y2="82" />
        <line x1="78" y1="60" x2="68" y2="74" />
        <line x1="48" y1="82" x2="68" y2="74" />
      </g>

      {/* Network nodes */}
      {/* Centre node */}
      <circle cx="50" cy="50" r="5" fill="#0d3010" stroke="#1a5c1e" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="2.5" fill="#6dcc72" />

      {/* Outer nodes */}
      {[
        [28, 28], [72, 28], [20, 58], [78, 60], [48, 82], [68, 74],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4.5" fill="#0d3010" stroke="#1a5c1e" strokeWidth="1.2" />
          <circle cx={cx} cy={cy} r="2.2" fill="#4caf50" />
        </g>
      ))}

      {/* Sheen overlay */}
      <circle cx="50" cy="50" r="44" fill="url(#globeSheen)" />
    </svg>
  );
}
