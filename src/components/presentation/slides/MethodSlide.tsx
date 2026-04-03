import { MapPin } from 'lucide-react'

export function MethodSlide() {
  return (
    <div className="max-w-4xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-widest">Method</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Walking Transect</h2>
        <p className="text-lg text-muted-foreground">
          Three zones measured sequentially on March 31, 2026 (17:46&ndash;18:29)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            zone: 'Broadway',
            color: 'bg-red-500/10 border-red-500/20',
            dot: 'bg-red-500',
            time: '18:00 \u2013 18:06',
            readings: '7 readings',
            desc: 'Busy road edge of the park \u2014 heavy traffic corridor',
          },
          {
            zone: 'Park Interior',
            color: 'bg-green-500/10 border-green-500/20',
            dot: 'bg-green-500',
            time: '18:07 \u2013 18:16',
            readings: '10 readings',
            desc: 'Inside the park \u2014 away from direct traffic exposure',
          },
          {
            zone: 'Quiet Side',
            color: 'bg-blue-500/10 border-blue-500/20',
            dot: 'bg-blue-500',
            time: '18:17 \u2013 18:22',
            readings: '5 readings',
            desc: 'Residential street on the opposite side of the park',
          },
        ].map((z) => (
          <div key={z.zone} className={`rounded-lg border p-5 space-y-3 ${z.color}`}>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${z.dot}`} />
              <p className="text-base font-semibold text-foreground">{z.zone}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-mono text-foreground">{z.time}</p>
              <p className="text-xs text-muted-foreground">{z.readings}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{z.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 bg-muted/30 rounded-lg p-4">
        <MapPin size={18} className="text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Transit readings</span> (17:46&ndash;17:59, 18:23&ndash;18:29)
          account for 21 readings during walk to/from the site. These are excluded from the experiment.
          Gap at 18:20 &mdash; no reading in either CSV.
        </p>
      </div>
    </div>
  )
}
