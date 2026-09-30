import { cn } from '@/lib/utils'

export const headerStyles = {
  root: 'sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur',
  inner: cn(
    'mx-auto flex w-full max-w-[1200px] items-center gap-3 px-4 py-4',
    'md:px-6',
  ),
  mark: 'flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground',
  title: 'text-base font-semibold leading-tight',
  subtitle: 'text-sm text-muted-foreground',
}
