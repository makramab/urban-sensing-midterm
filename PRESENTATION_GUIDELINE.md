# Project Handover: Park Buffer Air Quality Experiment

**Last updated:** April 2, 2026
**Status:** Data collected, analysis complete, presentation generated

---

## Project Overview

This project tests whether park proximity improves street-level air quality in early spring before leaf-out. Using an Atmotube Pro sensor, PM2.5 concentrations were measured at three zones around a park bordering Broadway in Jackson Heights, Queens:

1. **Broadway side** — the busy road edge of the park
2. **Park interior** — inside the park
3. **Quiet side** — the residential street on the opposite side of the park

### Science Question

**"Does park proximity improve air quality before leaf-out?"**

- **Hypothesis:** PM2.5 will be highest on the Broadway side, lower in the park interior, and lowest on the quiet residential side — even without leaf canopy.
- **Why early spring matters:** If the pattern holds before leaves emerge, it shows that the physical open space itself (distance from traffic, dispersion area) matters more than vegetation filtering.

---

## Data Collection (Completed)

### Sensor
- **Atmotube Pro** — portable air quality monitor
- Measures: PM1, PM2.5, PM10 (µg/m³), TVOCs (ppm), AQS (0–100), temperature, humidity, pressure
- GPS coordinates logged automatically via Bluetooth smartphone
- Data interval: **1 reading per minute**
- Export: CSV from the Atmotube app

### Collection Details
- **Date:** March 31, 2026, 17:46–18:29
- **Location:** Jackson Heights, Queens — park bordering Broadway
- **Carried at:** chest height (~1.5m) to approximate breathing zone
- **Two CSV exports:** `Data_1.csv` (34 rows, 17:46–18:19) and `Data_2.csv` (9 rows, 18:21–18:29)
- **Note:** There is a gap at 18:20 (no reading in either CSV)

### Zone Timestamps (Final)

```
Broadway:    18:00 – 18:06  (7 readings)
Park:        18:07 – 18:16  (10 readings)
Quiet Side:  18:17 – 18:22  (5 readings, gap at 18:20)
Transit:     17:46 – 17:59, 18:23 – 18:29  (21 readings, not part of experiment)
```

These timestamps are stored in `segments.json` and used by the analysis script to label each reading.

---

## Analysis Results

### Key Finding: No PM2.5 Gradient Detected

PM2.5 was **remarkably uniform** across all three zones:

| Zone | Readings | PM2.5 w/ data | Mean PM2.5 | Median | Min | Max | Std Dev | Mean AQS |
|------|----------|---------------|------------|--------|-----|-----|---------|----------|
| Broadway | 7 | 7 | **7.23** µg/m³ | 7.3 | 6.5 | 7.7 | 0.40 | 91.29 |
| Park | 10 | 7 | **7.17** µg/m³ | 7.3 | 6.4 | 7.7 | 0.43 | 93.70 |
| Quiet Side | 5 | 5 | **7.34** µg/m³ | 7.3 | 7.1 | 7.7 | 0.26 | 91.00 |

- **Broadway vs. Quiet Side difference:** 0.11 µg/m³ (1.5%) — essentially no difference
- The hypothesis was **not supported**: PM2.5 did not decrease from Broadway to the quiet side

### Why This Makes Sense (Literature Support)

The null result is consistent with published research on seasonal vegetation effects:

- **Setala et al. (2013)** — *Environmental Pollution*, 183, 104–112
  - Park interiors had slightly but often insignificantly lower PM during leaf-off conditions in Helsinki
  - Concludes vegetation's ability to remove air pollutants is minor without foliage
  - [PubMed](https://pubmed.ncbi.nlm.nih.gov/23274234/)

- **Yli-Pelkonen, Setala & Viippola (2017)** — *Landscape and Urban Planning*, 158, 39–47
  - Urban forests near roads reduced coarse particles by 23% during leaf-on season
  - Effect was **weaker during leaf-off** — supports our pre-leaf-out finding
  - [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0169204616302043)

- **Nowak et al. (2014)** — *Environmental Pollution*, 193, 119–129
  - US urban trees remove ~17.4 million tonnes of air pollution/year via leaf surface deposition
  - Mechanism requires leaf presence
  - [Full PDF (USDA)](https://www.fs.usda.gov/nrs/pubs/jrnl/2014/nrs_2014_nowak_001.pdf)

- **Janhall (2015)** — *Atmospheric Environment*, 105, 130–137
  - Review: vegetation can reduce local PM by 7–24% under favorable conditions (dense canopy, low wind)
  - Design and density of vegetation are crucial
  - [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S1352231015000758)

- **Baldauf (2017)** — *Transportation Research Part D*, 52, 354–361
  - Vegetation barriers of sufficient height/thickness reduce downwind PM2.5
  - Porous vegetation with gaps can have no effect
  - [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S136192091630685X)

### Interpretation

Before leaf-out, the open space of a park alone does not significantly buffer PM2.5. The leaf canopy — not just park proximity — appears to be the key mechanism for PM reduction. A summer follow-up study (post-leaf-out) at the same location could directly test this.

---

## Generated Outputs

All outputs are in `pipeline/output/`:

| File | Description | Status |
|------|-------------|--------|
| `merged_data.csv` | 43 readings from both CSVs with zone labels | Done |
| `pollution_map.html` | Interactive Leaflet map, 3 layer modes (Zone/AQS/PM2.5), zone-colored path, clickable popups | Done |
| `segment_boxplot.png` | PM2.5 box plot by zone with individual data points and mean labels | Done |
| `temporal_profile.png` | PM2.5 over time with zone-colored shading and markers | Done |
| `analysis_summary.json` | Per-zone stats (mean, median, min, max, std, AQS) | Done |
| `presentation.html` | 10-slide Reveal.js presentation (in `pipeline/`) | Done |

---

## Presentation (10 Slides, Reveal.js)

Located at `pipeline/presentation.html`. Navigate with arrow keys, `F` for fullscreen.

| # | Slide | Content |
|---|-------|---------|
| 1 | **Title** | Research question, location, date |
| 2 | **The Sensor** | Atmotube Pro specs (PM, VOC, AQS, GPS, frequency) |
| 3 | **Why It Matters** | Pre-leaf-out hypothesis, Jackson Heights context, nearest monitor distance |
| 4 | **Method** | 3 zones with time windows, reading counts, protocol |
| 5 | **Raw Data** | Sample table from merged dataset (43 readings) |
| 6 | **Pollution Map** | Interactive Leaflet map embedded as iframe |
| 7 | **Key Finding** | 3 stat cards showing uniform PM2.5 (~7.2 µg/m³ all zones) |
| 8 | **PM2.5 by Zone** | Box plot chart |
| 9 | **Scientific Reasoning** | Hypothesis → Result → Interpretation with literature citations |
| 10 | **Limitations + Thank You** | 6 limitations, references, Q&A |

**Rubric alignment:** 15 pts — Sensor Info (8pts), Formatting & Visuals (3pts), Presentation Style (2pts), Attention to Others (2pts). 8-minute presentation + 2-minute Q&A.

---

## File Structure

```
Midterm Showcase/
├── Data_1.csv                          # Atmotube export (17:46–18:19, 34 rows)
├── Data_2.csv                          # Atmotube export (18:21–18:29, 9 rows)
├── Midterm_Proposal_Atmotube_WalkingTransect.md  # Original proposal (references video — outdated)
├── Midterm_Proposal_Draft.md           # Earlier draft (Telraam traffic study — different project)
├── Rubric.pdf                          # Grading rubric
└── pipeline/
    ├── 01_extract_frames.sh            # OLD — video approach, not used
    ├── 02_analyze_environment.py       # OLD — video approach, not used
    ├── 03_analyze_and_visualize.py     # REWRITTEN — reads CSVs + segments.json, generates outputs
    ├── 04_generate_presentation.py     # REWRITTEN — generates 10-slide Reveal.js deck
    ├── segments.json                   # Zone timestamps
    ├── README.md                       # Quick start guide (needs update)
    ├── HANDOVER.md                     # This document
    ├── presentation.html               # Generated Reveal.js presentation
    └── output/
        ├── merged_data.csv             # 43 readings with zone labels
        ├── pollution_map.html          # Interactive Leaflet map
        ├── segment_boxplot.png         # PM2.5 box plot by zone
        ├── temporal_profile.png        # PM2.5 over time with zone shading
        └── analysis_summary.json       # Per-zone statistics
```

---

## How to Regenerate

If data or timestamps change, regenerate everything:

```bash
cd pipeline
python3 03_analyze_and_visualize.py    # regenerates output/
python3 04_generate_presentation.py    # regenerates presentation.html
```

### Dependencies

```bash
pip3 install pandas numpy matplotlib
```

No torch/transformers/folium needed — the map is hand-built Leaflet HTML.

---

## What's Left / Next Steps

- **Refine the slides** — review content, adjust wording, add your name, rehearse timing (~48 seconds per slide for the 8-minute window). Consider adding photos of the sensor or walk route if available.
- **Remove old scripts** (`01_extract_frames.sh`, `02_analyze_environment.py`) — kept for now but not used
- **Summer follow-up:** Repeat the same walk after leaf-out (June–August) to test if canopy makes a difference
- **Wind data:** Cross-reference with weather station data to account for wind direction/speed
