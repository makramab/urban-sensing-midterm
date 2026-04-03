import { MapPin } from 'lucide-react'

export function MethodSlide() {
  return (
    <div className="max-w-6xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-base font-medium text-primary uppercase tracking-widest">Method</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground">Walking Transect</h2>
        <p className="text-xl text-muted-foreground">
          Three zones measured sequentially at the end of March 2026
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 grid grid-cols-1 gap-4">
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
            <div key={z.zone} className={`rounded-lg border p-4 flex items-center gap-4 ${z.color}`}>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`w-3 h-3 rounded-full ${z.dot}`} />
                <p className="text-lg font-semibold text-foreground">{z.zone}</p>
              </div>
              <p className="text-base font-mono text-foreground shrink-0">{z.time}</p>
              <p className="text-base text-muted-foreground">{z.readings}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-80 shrink-0 rounded-xl overflow-hidden border border-border aspect-square">
          <video
            src="/park_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
