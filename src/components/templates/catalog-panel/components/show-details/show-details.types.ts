import type { Show } from '@/services/show/show.types'

export type ShowDetailsProps = {
  show: Show | null
  isFavorite: boolean
  onOpenChange: (open: boolean) => void
  onToggleFavorite: (id: number) => void
}
