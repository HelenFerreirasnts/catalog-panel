import { catalogPanelStyles as styles } from '@/components/templates/catalog-panel/catalog-panel.stylesheet'
import type { GalleryToolbarProps } from '@/components/templates/catalog-panel/components/gallery-toolbar/gallery-toolbar.types'
import type { SortOption } from '@/components/templates/catalog-panel/hooks/use-show-filters.hook'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { formatStatus } from '@/util/format/format-show'
import { Heart, Search } from 'lucide-react'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'rating', label: 'Nota' },
  { value: 'name', label: 'Nome' },
]

export const GalleryToolbar = ({
  search,
  genre,
  status,
  sort,
  favoritesOnly,
  genres,
  statuses,
  onSearchChange,
  onGenreChange,
  onStatusChange,
  onSortChange,
  onFavoritesOnlyChange,
}: GalleryToolbarProps) => {
  return (
    <div className={styles.toolbar}>
      <label className={styles.field}>
        <span className={styles.label}>Busca</span>
        <span className={styles.searchWrap}>
          <Search className={styles.searchIcon} />
          <Input
            value={search}
            className={styles.searchInput}
            placeholder="Nome da série"
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </span>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Gênero</span>
        <Select value={genre} onValueChange={onGenreChange}>
          <SelectTrigger className={styles.selectTrigger}>
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="all">Todos</SelectItem>
            {genres.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Status</span>
        <Select value={status} onValueChange={onStatusChange}>
          <SelectTrigger className={styles.selectTrigger}>
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="all">Todos</SelectItem>
            {statuses.map((item) => (
              <SelectItem key={item} value={item}>
                {formatStatus(item)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Ordenar</span>
        <Select value={sort} onValueChange={(value) => onSortChange(value as SortOption)}>
          <SelectTrigger className={styles.selectTrigger}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper">
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </label>

      <Button
        type="button"
        variant={favoritesOnly ? 'default' : 'outline'}
        className={styles.favoritesButton}
        onClick={() => onFavoritesOnlyChange(!favoritesOnly)}
      >
        <Heart className={favoritesOnly ? 'fill-current' : undefined} />
        Favoritos
      </Button>
    </div>
  )
}
