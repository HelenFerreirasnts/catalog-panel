import type { Show } from '@/services/show/show.types'
import { useMemo, useState } from 'react'

export type SortOption = 'name' | 'rating'

type UseShowFiltersParams = {
  shows: Show[]
  favoriteCodes: number[]
}

const uniqueSorted = (values: string[]) => {
  return [...new Set(values.filter((value) => value.length > 0))].sort((left, right) =>
    left.localeCompare(right, 'pt-BR'),
  )
}

export const useShowFilters = ({ shows, favoriteCodes }: UseShowFiltersParams) => {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('all')
  const [status, setStatus] = useState('all')
  const [sort, setSort] = useState<SortOption>('rating')
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const genres = useMemo(
    () => uniqueSorted(shows.flatMap((show) => show.genres)),
    [shows],
  )

  const statuses = useMemo(() => uniqueSorted(shows.map((show) => show.status)), [shows])

  const visibleShows = useMemo(() => {
    const term = search.trim().toLowerCase()
    const favoriteSet = new Set(favoriteCodes)

    const filtered = shows.filter((show) => {
      const matchesSearch = term.length === 0 || show.name.toLowerCase().includes(term)
      const matchesGenre = genre === 'all' || show.genres.includes(genre)
      const matchesStatus = status === 'all' || show.status === status
      const matchesFavorites = !favoritesOnly || favoriteSet.has(show.id)

      return matchesSearch && matchesGenre && matchesStatus && matchesFavorites
    })

    const comparators: Record<SortOption, (left: Show, right: Show) => number> = {
      name: (left, right) => left.name.localeCompare(right.name, 'pt-BR'),
      rating: (left, right) => (right.rating ?? -1) - (left.rating ?? -1),
    }

    return [...filtered].sort(comparators[sort])
  }, [favoriteCodes, favoritesOnly, genre, search, shows, sort, status])

  const selectedShow = visibleShows.find((show) => show.id === selectedId) ?? null

  const clearFilters = () => {
    setSearch('')
    setGenre('all')
    setStatus('all')
    setSort('rating')
    setFavoritesOnly(false)
  }

  const clearSelection = () => {
    setSelectedId(null)
  }

  return {
    search,
    setSearch,
    genre,
    setGenre,
    status,
    setStatus,
    sort,
    setSort,
    favoritesOnly,
    setFavoritesOnly,
    genres,
    statuses,
    visibleShows,
    selectedShow,
    setSelectedId,
    clearFilters,
    clearSelection,
  }
}
