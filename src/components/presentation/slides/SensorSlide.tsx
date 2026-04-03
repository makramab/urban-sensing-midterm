import { Radio } from 'lucide-react'

export function SensorSlide() {
  return (
    <div className="max-w-4xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium text-primary uppercase tracking-widest">The Sensor</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">Atmotube Pro</h2>
        <p className="text-lg text-muted-foreground">
          Portable air quality monitor with GPS logging via Bluetooth
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Particulate', value: 'PM1, PM2.5, PM10', unit: '\u00B5g/m\u00B3' },
          { label: 'VOCs', value: 'TVOCs', unit: 'ppm' },
          { label: 'Air Quality', value: 'AQS', unit: '0\u2013100 score' },
          { label: 'Environment', value: 'Temp, Humidity', unit: '+ Pressure' },
        ].map((item) => (
          <div key={item.label} className="bg-muted/50 rounded-lg p-4 space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
            <p className="text-base font-semibold text-foreground">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.unit}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 flex items-start gap-3">
          <Radio size={20} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">1 reading / minute</p>
            <p className="text-sm text-muted-foreground">Continuous logging over Bluetooth</p>
          </div>
        </div>
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground">GPS coordinates</p>
          <p className="text-sm text-muted-foreground">Auto-logged via smartphone connection</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm font-semibold text-foreground">Carried at chest height</p>
          <p className="text-sm text-muted-foreground">~1.5m to approximate breathing zone</p>
        </div>
      </div>

      <div className="bg-muted/30 rounded-lg p-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Export:</span> CSV from the Atmotube app.
          Two files collected: Data_1.csv (34 rows, 17:46&ndash;18:19) and Data_2.csv (9 rows, 18:21&ndash;18:29),
          totaling 43 readings with a gap at 18:20.
        </p>
      </div>
    </div>
  )
}
