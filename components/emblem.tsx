export function Emblem({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <circle cx="28" cy="28" r="26.5" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="28" cy="28" r="22.5" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
      <path d="M28 6.5v5M28 44.5v5M6.5 28h5M44.5 28h5" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <text
        x="28"
        y="33.4"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="16"
        letterSpacing="1.2"
        fill="currentColor"
      >
        AKT
      </text>
    </svg>
  )
}
