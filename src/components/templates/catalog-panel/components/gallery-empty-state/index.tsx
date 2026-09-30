import { catalogPanelStyles as styles } from '@/components/templates/catalog-panel/catalog-panel.stylesheet'
import type { GalleryEmptyStateProps } from '@/components/templates/catalog-panel/components/gallery-empty-state/gallery-empty-state.types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const GalleryEmptyState = ({ onClear }: GalleryEmptyStateProps) => {
  return (
    <Card className={styles.stateCard}>
      <CardHeader>
        <CardTitle>Nenhuma série encontrada</CardTitle>
        <CardDescription>
          A busca ou os filtros não trouxeram resultados. Limpe os filtros para ver o catálogo de novo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button type="button" variant="outline" onClick={onClear}>
          Limpar filtros
        </Button>
      </CardContent>
    </Card>
  )
}
