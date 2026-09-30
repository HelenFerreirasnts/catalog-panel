import type { SortOption } from '@/components/templates/catalog-panel/hooks/use-show-filters.hook'

export type GalleryToolbarProps = {
  search: string
  genre: string
  status: string
  sort: SortOption
  favoritesOnly: boolean
  genres: string[]
  statuses: string[]
  onSearchChange: (value: string) => void
  onGenreChange: (value: string) => void
  onStatusChange: (value: string) => void
  onSortChange: (value: SortOption) => void
  onFavoritesOnlyChange: (value: boolean) => void
}
