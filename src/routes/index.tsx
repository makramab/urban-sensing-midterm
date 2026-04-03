import { createFileRoute } from '@tanstack/react-router'
import { Presentation } from '#/components/presentation/Presentation'

export const Route = createFileRoute('/')({ component: PresentationPage })

function PresentationPage() {
  return <Presentation />
}
