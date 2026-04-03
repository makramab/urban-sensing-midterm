import { Map } from 'lucide-react'

export function MapSlide() {
  return (
    <div className="max-w-6xl w-full space-y-6">
      <div className="space-y-3">
        <p className="text-base font-medium text-primary uppercase tracking-widest">Visualization</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground">Pollution Map</h2>
        <p className="text-xl text-muted-foreground">
          Interactive Leaflet map with zone-colored path and clickable popups
        </p>
      </div>

      <div className="relative w-full rounded-xl overflow-hidden border border-border bg-muted/30" style={{ height: 'min(60vh, 500px)' }}>
        <iframe
          src={`/pollution_map.html?token=${import.meta.env.VITE_MAPBOX_TOKEN}`}
          title="Pollution Map"
          className="w-full h-full border-0"
          loading="lazy"
        />
        <noscript>
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="text-center space-y-3">
              <Map size={40} className="text-muted-foreground mx-auto" />
              <p className="text-base text-muted-foreground">Interactive map requires JavaScript</p>
            </div>
          </div>
        </noscript>
      </div>

      <p className="text-base text-muted-foreground text-center">
        Three layer modes: Zone / AQS / PM2.5. Click markers for detailed readings.
      </p>
    </div>
  )
}
