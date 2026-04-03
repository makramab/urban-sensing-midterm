import { BarChart3 } from 'lucide-react'

export function BoxPlotSlide() {
  return (
    <div className="max-w-4xl w-full space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-widest">Chart</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">PM2.5 by Zone</h2>
        <p className="text-lg text-muted-foreground">
          Box plot with individual data points and mean labels
        </p>
      </div>

      <div className="relative w-full rounded-xl overflow-hidden border border-border bg-muted/30 flex items-center justify-center" style={{ minHeight: '400px' }}>
        <img
          src="/segment_boxplot.png"
          alt="PM2.5 box plot by zone showing Broadway, Park, and Quiet Side distributions"
          className="max-w-full max-h-[60vh] object-contain"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement
            if (fallback) fallback.style.display = 'flex'
          }}
        />
        <div className="hidden items-center justify-center flex-col gap-3 p-8" style={{ display: 'none' }}>
          <BarChart3 size={48} className="text-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            Box plot image not found. Place <code className="text-xs bg-muted px-1.5 py-0.5 rounded">segment_boxplot.png</code> in the <code className="text-xs bg-muted px-1.5 py-0.5 rounded">public/</code> directory.
          </p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        All three zones cluster tightly around 7.2 &mu;g/m&sup3; &mdash; no statistically meaningful difference
      </p>
    </div>
  )
}
