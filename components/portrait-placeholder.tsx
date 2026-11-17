import { Camera } from 'lucide-react'
import { Eyebrow } from '@/components/section-heading'

export function PortraitPlaceholder({ caption, note }: { caption: string; note: string }) {
  return (
    <figure className="w-full">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e9e2d2]">
        <div aria-hidden="true" className="absolute inset-4 border border-forest/20" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(40,59,53,0.10),transparent_62%)]"
        />
        <div className="relative flex h-full flex-col items-center justify-center px-10 text-center">
          <Camera className="h-7 w-7 text-forest/35" aria-hidden="true" />
          <p className="mt-5 font-serif text-[1.3rem] leading-snug text-forest/70 italic">{note}</p>
          <span aria-hidden="true" className="mt-6 block h-px w-10 bg-gold" />
        </div>
      </div>
      <figcaption className="mt-5">
        <span className="block font-serif text-[1.15rem] text-forest">{caption}</span>
        <Eyebrow className="mt-2 text-sage/80">Portrait pending</Eyebrow>
      </figcaption>
    </figure>
  )
}
