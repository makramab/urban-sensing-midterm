import { TreePine } from 'lucide-react'

export function TitleSlide() {
  return (
    <div className="max-w-3xl w-full text-center space-y-8">
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <TreePine size={40} className="text-primary" />
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
          Does Park Proximity
          <br />
          Improve Air Quality
          <br />
          Before Leaf-Out?
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Measuring PM2.5 across three zones around a park in Jackson Heights, Queens
          — before the trees have leaves
        </p>
      </div>

      <div className="pt-4 space-y-2">
        <p className="text-lg text-foreground font-medium">Afra Izzati Kamili</p>
        <p className="text-sm text-muted-foreground">
          NYU Tandon School of Engineering &mdash; CUSP
        </p>
        <p className="text-sm text-muted-foreground">
          Urban Sensing Midterm &middot; Spring 2026
        </p>
      </div>
    </div>
  )
}
