export function KeyFindingSlide() {
  return (
    <div className="max-w-6xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-base font-medium text-primary uppercase tracking-widest">Key Finding</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground">No PM2.5 Gradient Detected</h2>
        <p className="text-xl text-muted-foreground">
          PM2.5 was remarkably uniform across all three zones
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { zone: 'Broadway', mean: '7.23', median: '7.3', std: '0.40', color: 'border-red-500/30', dot: 'bg-red-500' },
          { zone: 'Park Interior', mean: '7.17', median: '7.3', std: '0.43', color: 'border-green-500/30', dot: 'bg-green-500' },
          { zone: 'Quiet Side', mean: '7.34', median: '7.3', std: '0.26', color: 'border-blue-500/30', dot: 'bg-blue-500' },
        ].map((z) => (
          <div key={z.zone} className={`rounded-xl border-2 ${z.color} bg-muted/30 p-6 space-y-4 text-center`}>
            <div className="flex items-center justify-center gap-2">
              <span className={`w-3 h-3 rounded-full ${z.dot}`} />
              <p className="text-base font-medium text-muted-foreground">{z.zone}</p>
            </div>
            <p className="text-5xl md:text-6xl font-black text-foreground">{z.mean}</p>
            <p className="text-base text-muted-foreground">&mu;g/m&sup3;</p>
            <div className="flex justify-center gap-4 text-base text-muted-foreground">
              <span>Median: {z.median}</span>
              <span>SD: &plusmn;{z.std}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-lg p-5 text-center space-y-2">
        <p className="text-xl font-semibold text-foreground">
          Broadway vs. Quiet Side difference: 0.11 &mu;g/m&sup3; (1.5%)
        </p>
        <p className="text-lg text-muted-foreground">
          The hypothesis was <span className="text-foreground font-medium">not supported</span> &mdash;
          PM2.5 did not decrease from Broadway to the quiet side
        </p>
      </div>
    </div>
  )
}
