export function WhyItMattersSlide() {
  return (
    <div className="max-w-6xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-base font-medium text-primary uppercase tracking-widest">Motivation</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground">Why It Matters</h2>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 space-y-3">
        <p className="text-xl md:text-2xl font-semibold text-foreground">Hypothesis</p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          PM2.5 will be <span className="text-foreground font-medium">highest on the Broadway side</span>,
          lower in the park interior, and <span className="text-foreground font-medium">lowest on the quiet
          residential side</span> &mdash; even without leaf canopy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted/50 rounded-lg p-5 space-y-2">
          <p className="text-lg font-semibold text-foreground">Why early spring?</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            If the pattern holds before leaves emerge, it shows that the
            <span className="text-foreground font-medium"> physical open space itself</span> &mdash;
            distance from traffic, dispersion area &mdash; matters more than vegetation filtering.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-5 space-y-2">
          <p className="text-lg font-semibold text-foreground">Elmhurst context</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Broadway is a major traffic corridor in one of the densest neighborhoods in
            Queens. The park creates a buffer between Broadway and the quieter residential streets
            on the opposite side.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden border border-border aspect-square">
          <iframe
            src={`/context_map.html?token=${import.meta.env.VITE_MAPBOX_TOKEN}`}
            title="Park location context"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-4">
        <p className="text-base text-muted-foreground">
          <span className="font-medium text-foreground">Key question:</span> Does the open space
          of a park &mdash; without its leaf canopy &mdash; reduce street-level PM2.5 concentrations?
        </p>
      </div>
    </div>
  )
}
