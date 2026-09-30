import { appShellStyles as styles } from '@/components/templates/app-shell/app-shell.stylesheet'
import { Footer } from '@/components/templates/app-shell/components/footer'
import { Header } from '@/components/templates/app-shell/components/header'
import { CatalogPanel } from '@/components/templates/catalog-panel'

export const App = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <CatalogPanel />
      </main>
      <Footer />
    </div>
  )
}
