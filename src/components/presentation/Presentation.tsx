import { useRef, useState } from 'react'
import { useSlideNavigation } from '#/hooks/presentation/useSlideNavigation'
import { SlideShell } from '#/components/presentation/SlideShell'
import { SlideNavigation } from '#/components/presentation/SlideNavigation'
import { TitleSlide } from '#/components/presentation/slides/TitleSlide'
import { SensorSlide } from '#/components/presentation/slides/SensorSlide'
import { WhyItMattersSlide } from '#/components/presentation/slides/WhyItMattersSlide'
import { MethodSlide } from '#/components/presentation/slides/MethodSlide'
import { RawDataSlide } from '#/components/presentation/slides/RawDataSlide'
import { MapSlide } from '#/components/presentation/slides/MapSlide'
import { KeyFindingSlide } from '#/components/presentation/slides/KeyFindingSlide'
import { BoxPlotSlide } from '#/components/presentation/slides/BoxPlotSlide'
import { InterpretationSlide } from '#/components/presentation/slides/InterpretationSlide'
import { LimitationsSlide } from '#/components/presentation/slides/LimitationsSlide'

const SLIDES = [
  TitleSlide,
  SensorSlide,
  WhyItMattersSlide,
  MethodSlide,
  RawDataSlide,
  MapSlide,
  KeyFindingSlide,
  BoxPlotSlide,
  InterpretationSlide,
  LimitationsSlide,
]

export function Presentation() {
  const { current, total, go, next, prev } = useSlideNavigation(SLIDES.length)
  const [direction, setDirection] = useState(0)
  const prevSlide = useRef(current)

  if (prevSlide.current !== current) {
    setDirection(current > prevSlide.current ? 1 : -1)
    prevSlide.current = current
  }

  const SlideComponent = SLIDES[current]

  return (
    <div className="relative bg-background select-none">
      <SlideShell slideKey={current} direction={direction}>
        <SlideComponent />
      </SlideShell>
      <SlideNavigation
        current={current}
        total={total}
        onPrev={prev}
        onNext={next}
        onGo={go}
      />
    </div>
  )
}
