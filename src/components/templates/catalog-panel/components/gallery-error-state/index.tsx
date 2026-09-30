import { catalogPanelStyles as styles } from '@/components/templates/catalog-panel/catalog-panel.stylesheet'
import type { GalleryErrorStateProps } from '@/components/templates/catalog-panel/components/gallery-error-state/gallery-error-state.types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const GalleryErrorState = ({ isRetrying, onRetry }: GalleryErrorStateProps) => {
  return (
    <Card className={styles.stateCard}>
      <CardHeader>
        <CardTitle>Não foi possível carregar as séries</CardTitle>
        <CardDescription>
          A API pública não respondeu. Verifique a conexão e tente de novo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button type="button" disabled={isRetrying} onClick={onRetry}>
          {isRetrying ? 'Tentando de novo...' : 'Tentar novamente'}
        </Button>
      </CardContent>
    </Card>
  )
}
