import { catalogPanelStyles as styles } from '@/components/templates/catalog-panel/catalog-panel.stylesheet'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const skeletonItems = ['one', 'two', 'three', 'four', 'five', 'six']

export const GallerySkeleton = () => {
  return (
    <div className={styles.grid} aria-busy="true" aria-live="polite">
      {skeletonItems.map((item) => (
        <Card key={item} className="pt-0">
          <Skeleton className="aspect-[2/3] w-full rounded-none" />
          <CardHeader>
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </CardHeader>
          <CardContent className="flex gap-2">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-12 rounded-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
