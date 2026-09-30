import { headerStyles as styles } from '@/components/templates/app-shell/components/header/header.stylesheet'
import { Tv } from 'lucide-react'

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.mark} aria-hidden="true">
          <Tv className="size-5" />
        </div>
        <div>
          <p className={styles.title}>Catálogo</p>
          <p className={styles.subtitle}>Painel de séries</p>
        </div>
      </div>
    </header>
  )
}
