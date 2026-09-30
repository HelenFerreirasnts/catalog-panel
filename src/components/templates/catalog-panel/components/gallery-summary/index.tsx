import { catalogPanelStyles as styles } from '@/components/templates/catalog-panel/catalog-panel.stylesheet'
import type { GallerySummaryProps } from '@/components/templates/catalog-panel/components/gallery-summary/gallery-summary.types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCount } from '@/util/format/format-count'

export const GallerySummary = ({
  visibleCount,
  loadedCount,
  favoriteCount,
}: GallerySummaryProps) => {
  return (
    <div className={styles.summary}>
      <Card size="sm">
        <CardHeader>
          <CardDescription>Séries na tela</CardDescription>
          <CardTitle className={styles.summaryValue}>{formatCount(visibleCount)}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            de {formatCount(loadedCount)} carregadas
          </p>
        </CardContent>
      </Card>
      <Card size="sm">
        <CardHeader>
          <CardDescription>Favoritos salvos</CardDescription>
          <CardTitle className={styles.summaryValue}>{formatCount(favoriteCount)}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">ficam neste navegador</p>
        </CardContent>
      </Card>
      <Card size="sm">
        <CardHeader>
          <CardDescription>Fonte</CardDescription>
          <CardTitle className="text-base">TVMaze</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">API pública, sem chave</p>
        </CardContent>
      </Card>
    </div>
  )
}
