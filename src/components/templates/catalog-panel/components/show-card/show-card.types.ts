import type { Show } from '@/services/show/show.types'

export type ShowCardProps = {
  show: Show
  isFavorite: boolean
  onSelect: (id: number) => void
  onToggleFavorite: (id: number) => void
}
