export function LimitationsSlide() {
  return (
    <div className="max-w-4xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-widest">Limitations &amp; Next Steps</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Caveats &amp; Future Work</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          {
            num: 1,
            title: 'Small sample size',
            text: 'Only 22 experiment readings (7 + 10 + 5) across one 22-minute walk',
          },
          {
            num: 2,
            title: 'Single session',
            text: 'One evening, one day \u2014 no replication across different weather conditions or times',
          },
          {
            num: 3,
            title: 'Sequential sampling',
            text: 'Zones measured one after another, not simultaneously \u2014 conditions may have changed',
          },
          {
            num: 4,
            title: 'No wind data',
            text: 'Wind direction and speed can dominate PM dispersion but were not recorded',
          },
          {
            num: 5,
            title: 'Sensor precision',
            text: 'Low-cost sensor may lack sensitivity to detect sub-1 \u00B5g/m\u00B3 differences between zones',
          },
          {
            num: 6,
            title: 'Background PM2.5 was low',
            text: 'At ~7 \u00B5g/m\u00B3, any gradient signal may be too small to detect above noise',
          },
        ].map((item) => (
          <div key={item.num} className="flex gap-4 bg-muted/30 rounded-lg p-4">
            <span className="text-2xl font-bold text-muted-foreground/20 shrink-0 leading-none pt-0.5">
              {item.num}
            </span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-5 space-y-2">
        <p className="text-sm font-semibold text-foreground">Proposed Follow-Up</p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Repeat the same walking transect in <span className="text-foreground font-medium">June&ndash;August 2026</span> after
          full leaf-out. If a PM2.5 gradient appears post-leaf-out, it directly confirms that
          the canopy &mdash; not open space &mdash; is the active filtering mechanism.
        </p>
      </div>

      <div className="text-center pt-4 space-y-3">
        <p className="text-2xl font-bold text-foreground">Thank You</p>
        <p className="text-base text-muted-foreground">Questions?</p>
      </div>
    </div>
  )
}
