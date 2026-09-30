import { cn } from '@/lib/utils'

export const catalogPanelStyles = {
  section: 'flex flex-col gap-5',
  summary: 'grid grid-cols-1 gap-3 sm:grid-cols-3',
  summaryValue: 'text-2xl font-semibold tracking-tight',
  toolbar: cn(
    'grid grid-cols-1 gap-3',
    'md:grid-cols-2',
    'xl:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,0.8fr))_auto]',
  ),
  field: 'flex min-w-0 flex-col gap-1.5',
  label: 'text-xs font-medium text-muted-foreground',
  searchWrap: 'relative',
  searchIcon: 'pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground',
  searchInput: 'pl-8',
  selectTrigger: 'w-full',
  favoritesButton: 'w-full xl:w-auto xl:self-end',
  grid: 'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3',
  stateCard: 'items-start gap-3 p-6',
  detailsImage: 'mx-auto max-h-[32rem] w-full max-w-72 rounded-lg object-cover',
  detailsList: 'grid gap-3',
  detailsLabel: 'text-xs text-muted-foreground',
  detailsValue: 'text-sm font-medium',
}
