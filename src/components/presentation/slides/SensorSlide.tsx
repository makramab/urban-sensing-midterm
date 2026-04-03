import { Radio } from 'lucide-react'

export function SensorSlide() {
  return (
    <div className="max-w-6xl w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: all content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <p className="text-base font-medium text-primary uppercase tracking-widest">The Sensor</p>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">Atmotube Pro</h2>
            <p className="text-xl text-muted-foreground">
              Portable air quality monitor with GPS logging via Bluetooth
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Particulate', value: 'PM1, PM2.5, PM10', unit: '\u00B5g/m\u00B3' },
              { label: 'VOCs', value: 'TVOCs', unit: 'ppm' },
              { label: 'Air Quality', value: 'AQS', unit: '0\u2013100 score' },
              { label: 'Environment', value: 'Temp, Humidity', unit: '+ Pressure' },
            ].map((item) => (
              <div key={item.label} className="bg-muted/50 rounded-lg p-4 space-y-1">
                <p className="text-base text-muted-foreground uppercase tracking-wide">{item.label}</p>
                <p className="text-base font-semibold text-foreground">{item.value}</p>
                <p className="text-base text-muted-foreground">{item.unit}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 flex items-start gap-3">
              <Radio size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-base font-semibold text-foreground">1 reading / minute</p>
                <p className="text-base text-muted-foreground">Continuous logging over Bluetooth</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-muted/50 rounded-lg p-4 flex-1">
                <p className="text-base font-semibold text-foreground">GPS coordinates</p>
                <p className="text-base text-muted-foreground">Auto-logged via smartphone</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 flex-1">
                <p className="text-base font-semibold text-foreground">Mounted on stroller</p>
                <p className="text-base text-muted-foreground">~1m height, child's breathing zone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: sensor image */}
        <div className="w-full md:w-80 shrink-0 flex items-center">
          <img
            src="/Atmotube-Pro-Wearable-Portable-Air-Quality-Monitor-and-Tracker-for-Temperature-and-Humidity_424cf12d-c9f5-4e46-a884-ec39549a7ed2_1.d2cc8b1af7a79c66a6e54394c5cc4035.jpeg.webp"
            alt="Atmotube Pro sensor"
            className="w-full rounded-xl border border-border object-contain"
          />
        </div>
      </div>
    </div>
  )
}
