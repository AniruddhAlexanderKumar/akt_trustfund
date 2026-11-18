import { formatINR } from '@/lib/initiative'

/**
 * Progress towards the target, calculated from verified contributions only.
 * `tone="dark"` is for use on the forest panels.
 */
export function InitiativeProgress({
  raised,
  target,
  tone = 'light',
  className = '',
}: {
  raised: number
  target: number
  tone?: 'light' | 'dark'
  className?: string
}) {
  const ratio = target > 0 ? Math.min(1, Math.max(0, raised / target)) : 0
  const percent = Math.round(ratio * 100)
  const dark = tone === 'dark'

  return (
    <div className={className}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p
          className={`font-serif text-[1.9rem] leading-none tabular-nums ${
            dark ? 'text-ivory' : 'text-forest'
          }`}
        >
          {formatINR(raised)}
          <span
            className={`ml-2.5 font-sans text-[0.56rem] font-bold uppercase tracking-[0.2em] ${
              dark ? 'text-ivory/55' : 'text-sage'
            }`}
          >
            raised
          </span>
        </p>
        <p
          className={`text-[0.56rem] font-bold uppercase tracking-[0.2em] tabular-nums ${
            dark ? 'text-ivory/55' : 'text-sage'
          }`}
        >
          {percent}% of {formatINR(target)}
        </p>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={target}
        aria-valuenow={raised}
        aria-valuetext={`${formatINR(raised)} raised of ${formatINR(target)}`}
        aria-label="Contributions received towards the ₹50,000 target"
        className={`mt-4 h-[3px] w-full ${dark ? 'bg-ivory/15' : 'bg-forest/12'}`}
      >
        <div
          className="h-full bg-gold transition-[width] duration-700 ease-out"
          style={{ width: `${ratio * 100}%` }}
        />
      </div>
    </div>
  )
}
