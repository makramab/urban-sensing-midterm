export function InterpretationSlide() {
  return (
    <div className="max-w-4xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-widest">Interpretation</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Scientific Reasoning</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground uppercase tracking-wide">Hypothesis &rarr; Result</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We expected a PM2.5 gradient from Broadway (high) through the park (medium) to the quiet side (low).
            Instead, all three zones measured <span className="text-foreground font-medium">~7.2 &mu;g/m&sup3;</span>.
            The null result suggests that <span className="text-foreground font-medium">open space alone does
            not buffer PM2.5</span> before leaf-out.
          </p>
        </div>

        <div className="bg-muted/30 rounded-lg p-5 space-y-2">
          <p className="text-sm font-semibold text-foreground">Key Interpretation</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            The leaf canopy &mdash; not just park proximity &mdash; appears to be the key mechanism for
            PM reduction. A summer follow-up study (post-leaf-out) at the same location could directly test this.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-foreground">Literature Support</p>
        <div className="space-y-2">
          {[
            {
              authors: 'Setala et al. (2013)',
              journal: 'Environmental Pollution',
              finding: 'Park interiors had slightly but often insignificantly lower PM during leaf-off conditions',
            },
            {
              authors: 'Yli-Pelkonen, Setala & Viippola (2017)',
              journal: 'Landscape and Urban Planning',
              finding: 'Urban forests reduced coarse particles by 23% during leaf-on; effect was weaker during leaf-off',
            },
            {
              authors: 'Nowak et al. (2014)',
              journal: 'Environmental Pollution',
              finding: 'US urban trees remove ~17.4M tonnes of pollution/year via leaf surface deposition',
            },
            {
              authors: 'Janhall (2015)',
              journal: 'Atmospheric Environment',
              finding: 'Vegetation can reduce local PM by 7\u201324% under favorable conditions (dense canopy, low wind)',
            },
            {
              authors: 'Baldauf (2017)',
              journal: 'Transportation Research Part D',
              finding: 'Vegetation barriers of sufficient height/thickness reduce downwind PM2.5; porous vegetation with gaps has no effect',
            },
          ].map((ref) => (
            <div key={ref.authors} className="flex gap-3 bg-muted/30 rounded-lg px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm text-foreground">
                  <span className="font-medium">{ref.authors}</span>
                  <span className="text-muted-foreground"> &mdash; {ref.journal}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{ref.finding}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
