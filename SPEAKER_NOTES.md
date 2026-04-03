# Speaker Notes — Park Buffer Air Quality Presentation

**Total time:** 8 minutes (~48 seconds per slide) + 2-minute Q&A

---

## Slide 1: Title
**"Does Park Proximity Improve Air Quality Before Leaf-Out?"**

> Good evening, everyone. My project investigates a simple but important question: can a park reduce air pollution on the streets around it, even before the trees have their leaves? I collected the data at the end of March while walking with my kid — the sensor was mounted on the stroller at about 1 meter height, which is roughly the breathing zone of a child. So this question felt personal to me: is the air my kid breathes actually better when we're in the park? I used a portable sensor called the Atmotube Pro to measure PM2.5 at three zones around a park in Elmhurst, Queens.

---

## Slide 2: The Sensor — Atmotube Pro

> The Atmotube Pro is a compact, battery-powered air quality monitor. It measures particulate matter at three size fractions — PM1, PM2.5, and PM10 — as well as volatile organic compounds, temperature, humidity, and pressure. It also computes an overall Air Quality Score from 0 to 100. It logs one reading per minute, averaging internal samples taken every two seconds.
>
> GPS coordinates are logged automatically through a Bluetooth connection to my phone. For the experiment, I collected 22 readings across the three zones — Broadway, park interior, and the quiet residential side.

---

## Slide 3: Why It Matters

> Most air quality research on parks focuses on the summer months when trees are in full canopy. But what about the rest of the year? In early spring, the trees are bare. If we still see lower PM2.5 inside and behind the park, that would suggest that the physical open space itself — the distance from traffic, the room for air to disperse — is doing the work, not the leaves.
>
> Elmhurst is relevant because Broadway is a major traffic corridor running through one of the densest neighborhoods in Queens. The park sits right between Broadway and a quieter residential street on the other side, creating a natural transect from high traffic to low traffic with a green buffer in between.
>
> So the hypothesis: PM2.5 will be highest on Broadway, lower inside the park, and lowest on the quiet residential side — even without leaves.

---

## Slide 4: Method — Walking Transect

> The method is straightforward. I walked through three zones sequentially, starting just after 6 PM.
>
> First, I spent about 6 minutes on the Broadway side of the park — the busy road edge with heavy traffic. That gave me 7 readings. Then I walked into the park interior and stayed for about 10 minutes, playing with my kid while collecting 10 readings away from direct traffic. Finally, I crossed to the quiet residential side — the street on the opposite side of the park from Broadway — and collected 5 readings over about 5 minutes. That's 22 readings total across the three zones.

---

## Slide 5: Raw Data

> Here's a sample of what the raw data looks like after labeling each reading with its zone. Each row is one minute of walking. You can see the PM2.5 values, PM10, the Air Quality Score, and the temperature.
>
> Even just glancing at this table, something stands out — the numbers are very similar across all three zones. PM2.5 hovers between about 6.4 and 7.7 regardless of whether I was on Broadway, in the park, or on the quiet side. We'll look at this more rigorously in the next few slides.

---

## Slide 6: Pollution Map

> This is an interactive 3D Mapbox map showing my walking route with each reading plotted as a colored marker. You can toggle between three views: color by zone, by Air Quality Score, or by PM2.5 concentration. Clicking any marker shows the full sensor data for that point. You can also rotate the map to see the 3D buildings surrounding the park.
>
> The path traces from the Broadway side of the park, through the interior, and out to the residential street. What you can see — and this previews the key finding — is that the colors are quite uniform. There's no obvious hot spot on Broadway or cool spot in the park.

---

## Slide 7: Key Finding — No PM2.5 Gradient Detected

> Here's the headline result. The mean PM2.5 was 7.23 on Broadway, 7.17 in the park, and 7.34 on the quiet side. The medians are all identical at 7.3. The standard deviations are tiny — between 0.26 and 0.43.
>
> The difference between Broadway and the quiet side is just 0.11 micrograms per cubic meter — that's a 1.5% difference, well within the noise of the sensor.
>
> So the hypothesis was not supported. PM2.5 did not decrease as I moved from Broadway through the park to the quiet side. The park, without its leaves, did not create a measurable pollution gradient.

---

## Slide 8: PM2.5 by Zone — Box Plot

> The box plot makes this even clearer visually. All three boxes sit at nearly the same level, centered around 7.2 micrograms per cubic meter. The individual data points — the dots — overlap almost completely between zones. The means, marked on the plot, are within a fraction of a microgram of each other.
>
> There is simply no statistically meaningful difference between the zones. The distributions are essentially identical.

---

## Slide 9: Scientific Reasoning — Interpretation

> So how do we interpret a null result? We expected a gradient and didn't find one. This actually tells us something important: open space alone — without leaf canopy — does not appear to buffer PM2.5.
>
> This is consistent with the literature. Setala and colleagues in 2013 found that park interiors in Helsinki had only slightly lower PM during leaf-off conditions, and the differences were often not significant. And Janhall's 2015 review found that vegetation can reduce PM by 7 to 24 percent, but only with dense canopy and low wind conditions — neither of which applied in our case.
>
> The implication: it's the leaf canopy, not just park proximity, that drives PM2.5 reduction.

**Reference links for cross-checking:**

1. **Setala et al. (2013)** — "Does urban vegetation mitigate air pollution in northern conditions?"
   - *Environmental Pollution*, 183, 104–112
   - PubMed: https://pubmed.ncbi.nlm.nih.gov/23274234/
   - **Section to check:** Results, section 3.1 ("Particle deposition") — Table 2 shows PM concentrations under tree canopy vs. open areas in August (leaf-on) and March (leaf-off). The leaf-off differences were small and mostly not statistically significant.
   - **Key quote from abstract:** "Concentrations of each pollutant in August and March were slightly but often insignificantly lower under tree canopies than in adjacent open areas."

2. **Janhall (2015)** — "Review on urban vegetation and particle air pollution — Deposition and dispersion"
   - *Atmospheric Environment*, 105, 130–137
   - ScienceDirect: https://www.sciencedirect.com/science/article/pii/S1352231015000758
   - **Section to check:** Section 3 ("The effect of vegetation on particles") and Table 1 — summarizes studies showing 7–24% PM reduction under optimal conditions (dense canopy, low wind speed). Section 4 discusses how sparse/leafless vegetation provides minimal filtering.
   - **Key quote from abstract:** "The design and choice of urban vegetation is crucial when using vegetation as an ecosystem service for air quality improvements."

---

## Slide 10: Limitations

> A few important caveats. The sample size is small — just 22 readings across a single walk. And the zones were measured sequentially, not simultaneously, so conditions could have shifted during the walk.
>
> That said, for an exploratory study, this gives us a clear signal — or in this case, a clear lack of one — which is itself a meaningful result.
>
> Thank you. I'm happy to take questions.
