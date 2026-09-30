import { showCardStyles as styles } from '@/components/templates/catalog-panel/components/show-card/show-card.stylesheet'
import type { ShowCardProps } from '@/components/templates/catalog-panel/components/show-card/show-card.types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { formatRating, formatStatus } from '@/util/format/format-show'
import { Heart } from 'lucide-react'

export const ShowCard = ({ show, isFavorite, onSelect, onToggleFavorite }: ShowCardProps) => {
  const mainGenre = show.genres[0] ?? 'Sem gênero'

  return (
    <Card className={styles.card}>
      <button type="button" className={styles.openButton} onClick={() => onSelect(show.id)}>
        <img className={styles.image} src={show.imageUrl} alt="" loading="lazy" decoding="async" />
        <CardHeader>
          <CardTitle className={styles.title}>{show.name}</CardTitle>
          <CardDescription>{show.network}</CardDescription>
        </CardHeader>
        <CardContent className={styles.badges}>
          <Badge variant="secondary">{mainGenre}</Badge>
          <Badge variant="outline">{formatStatus(show.status)}</Badge>
          <Badge variant="outline">{formatRating(show.rating)}</Badge>
        </CardContent>
      </button>
      <CardAction className={styles.favorite}>
        <Button
          type="button"
          size="icon-sm"
          variant={isFavorite ? 'default' : 'outline'}
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(show.id)}
        >
          <Heart className={isFavorite ? 'fill-current' : undefined} />
        </Button>
      </CardAction>
    </Card>
  )
}
