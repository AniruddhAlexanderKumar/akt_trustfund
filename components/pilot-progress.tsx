import { formatINR } from '@/lib/pilot'

export function PilotProgress({
  received,
  target,
  className = '',
}: {
  received: number
  target: number
  className?: string
}) {
  const ratio = target > 0 ? Math.min(1, Math.max(0, received / target)) : 0
  const percent = Math.round(ratio * 100)

  return (
    <div className={className}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="font-serif text-[2rem] leading-none text-forest tabular-nums">
          {formatINR(received)}
          <span className="ml-2.5 font-sans text-[0.58rem] font-bold uppercase tracking-[0.2em] text-sage">
            raised
          </span>
        </p>
        <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-sage tabular-nums">
          {percent}% of {formatINR(target)}
        </p>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={target}
        aria-valuenow={received}
        aria-valuetext={`${formatINR(received)} raised of ${formatINR(target)}`}
        aria-label="Contributions received towards the Pilot 001 target"
        className="mt-4 h-[3px] w-full bg-forest/12"
      >
        <div
          className="h-full bg-gold transition-[width] duration-700 ease-out"
          style={{ width: `${ratio * 100}%` }}
        />
      </div>

      <p className="mt-3 text-[0.72rem] leading-relaxed text-walnut/60">
        Verified contributions only. This figure is updated after a contribution has been received
        and recorded by the administrator.
      </p>
    </div>
  )
}
