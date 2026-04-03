export function RawDataSlide() {
  const sampleRows = [
    { time: '18:00', zone: 'Broadway', pm25: 7.7, pm10: 9.3, aqs: 91, temp: 11.0 },
    { time: '18:03', zone: 'Broadway', pm25: 7.3, pm10: 8.8, aqs: 92, temp: 10.9 },
    { time: '18:06', zone: 'Broadway', pm25: 6.5, pm10: 7.9, aqs: 91, temp: 10.8 },
    { time: '18:08', zone: 'Park', pm25: 7.3, pm10: 8.9, aqs: 94, temp: 10.7 },
    { time: '18:12', zone: 'Park', pm25: 7.7, pm10: 9.2, aqs: 93, temp: 10.5 },
    { time: '18:16', zone: 'Park', pm25: 6.4, pm10: 7.7, aqs: 94, temp: 10.3 },
    { time: '18:18', zone: 'Quiet Side', pm25: 7.3, pm10: 8.8, aqs: 91, temp: 10.2 },
    { time: '18:21', zone: 'Quiet Side', pm25: 7.1, pm10: 8.5, aqs: 91, temp: 10.1 },
  ]

  return (
    <div className="max-w-6xl w-full space-y-8">
      <div className="space-y-3">
        <p className="text-base font-medium text-primary uppercase tracking-widest">Data</p>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground">Raw Readings</h2>
        <p className="text-xl text-muted-foreground">
          22 experiment readings across three zones, labeled by location
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-base">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Time</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Zone</th>
              <th className="text-right px-4 py-3 font-medium text-muted-foreground">PM2.5</th>
              <th className="text-right px-4 py-3 font-medium text-muted-foreground">PM10</th>
              <th className="text-right px-4 py-3 font-medium text-muted-foreground">AQS</th>
              <th className="text-right px-4 py-3 font-medium text-muted-foreground">Temp &deg;C</th>
            </tr>
          </thead>
          <tbody>
            {sampleRows.map((row) => (
              <tr key={row.time} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-2.5 font-mono text-foreground">{row.time}</td>
                <td className="px-4 py-2.5">
                  <span className={`inline-flex items-center gap-1.5 text-foreground`}>
                    <span className={`w-2 h-2 rounded-full ${
                      row.zone === 'Broadway' ? 'bg-red-500' :
                      row.zone === 'Park' ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    {row.zone}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-right font-mono text-foreground">{row.pm25}</td>
                <td className="px-4 py-2.5 text-right font-mono text-muted-foreground">{row.pm10}</td>
                <td className="px-4 py-2.5 text-right font-mono text-muted-foreground">{row.aqs}</td>
                <td className="px-4 py-2.5 text-right font-mono text-muted-foreground">{row.temp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-base text-muted-foreground text-center">
        Sample of 8 readings shown above &mdash; full experiment dataset contains 22 readings across 3 zones
      </p>
    </div>
  )
}
