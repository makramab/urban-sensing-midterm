import { TreePine } from 'lucide-react'

export function TitleSlide() {
  return (
    <div className="max-w-6xl w-full text-center space-y-8">
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <TreePine size={40} className="text-primary" />
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
          Does Park Proximity
          <br />
          Improve Air Quality
          <br />
          Before Leaf-Out?
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Measuring PM2.5 across three zones around a park in Elmhurst, Queens
          — before the trees have leaves
        </p>
      </div>

      <div className="pt-4 space-y-2">
        <p className="text-xl text-foreground font-medium">Afra Izzati Kamili</p>
        <p className="text-base text-muted-foreground">
          NYU Tandon School of Engineering &mdash; CUSP
        </p>
        <p className="text-base text-muted-foreground">
          Urban Sensing Midterm &middot; Spring 2026
        </p>
      </div>
    </div>
  )
}
