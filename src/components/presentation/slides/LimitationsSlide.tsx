export function LimitationsSlide() {
  return (
    <div className="max-w-6xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-base font-medium text-primary uppercase tracking-widest">Limitations</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground">Caveats</h2>
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
            title: 'Sequential sampling',
            text: 'Zones measured one after another, not simultaneously \u2014 conditions may have changed',
          },
        ].map((item) => (
          <div key={item.num} className="flex gap-4 bg-muted/30 rounded-lg p-4">
            <span className="text-2xl font-bold text-muted-foreground/20 shrink-0 leading-none pt-0.5">
              {item.num}
            </span>
            <div className="space-y-1">
              <p className="text-lg font-semibold text-foreground">{item.title}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4 space-y-3">
        <p className="text-4xl font-bold text-foreground">Thank You</p>
        <p className="text-xl text-muted-foreground">Questions?</p>
      </div>
    </div>
  )
}
