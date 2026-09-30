import { catalogPanelStyles as styles } from '@/components/templates/catalog-panel/catalog-panel.stylesheet'
import type { ShowDetailsProps } from '@/components/templates/catalog-panel/components/show-details/show-details.types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { formatPremiered, formatRating, formatStatus } from '@/util/format/format-show'
import { Heart } from 'lucide-react'

export const ShowDetails = ({
  show,
  isFavorite,
  onOpenChange,
  onToggleFavorite,
}: ShowDetailsProps) => {
  if (!show) return null

  const facts = [
    { label: 'Emissora', value: show.network },
    { label: 'Estreia', value: formatPremiered(show.premiered) },
    { label: 'Status', value: formatStatus(show.status) },
    { label: 'Idioma', value: show.language },
    { label: 'Nota', value: formatRating(show.rating) },
  ]

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <img className={styles.detailsImage} src={show.imageUrl} alt="" />
        <DialogHeader>
          <DialogTitle>{show.name}</DialogTitle>
          <DialogDescription>{show.summary}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-2">
          {show.genres.map((genre) => (
            <Badge key={genre} variant="secondary">
              {genre}
            </Badge>
          ))}
        </div>
        <Separator />
        <dl className={styles.detailsList}>
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className={styles.detailsLabel}>{fact.label}</dt>
              <dd className={styles.detailsValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <DialogFooter>
          <Button type="button" onClick={() => onToggleFavorite(show.id)}>
            <Heart className={isFavorite ? 'fill-current' : undefined} />
            {isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
