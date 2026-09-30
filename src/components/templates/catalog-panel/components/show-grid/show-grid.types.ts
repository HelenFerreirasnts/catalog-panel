import type { Show } from '@/services/show/show.types'

export type ShowGridProps = {
  shows: Show[]
  isFavorite: (id: number) => boolean
  onSelect: (id: number) => void
  onToggleFavorite: (id: number) => void
}
