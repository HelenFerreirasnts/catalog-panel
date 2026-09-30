import { ShowCard } from '@/components/templates/catalog-panel/components/show-card'
import type { ShowGridProps } from '@/components/templates/catalog-panel/components/show-grid/show-grid.types'
import { catalogPanelStyles as styles } from '@/components/templates/catalog-panel/catalog-panel.stylesheet'

export const ShowGrid = ({ shows, isFavorite, onSelect, onToggleFavorite }: ShowGridProps) => {
  return (
    <div className={styles.grid}>
      {shows.map((show) => (
        <ShowCard
          key={show.id}
          show={show}
          isFavorite={isFavorite(show.id)}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}
