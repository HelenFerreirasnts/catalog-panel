import { footerStyles as styles } from '@/components/templates/app-shell/components/footer/footer.stylesheet'

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <p>
          Dados e pôsteres fornecidos pela{' '}
          <a
            className={styles.link}
            href="https://www.tvmaze.com/api"
            target="_blank"
            rel="noreferrer"
          >
            API pública do TVMaze
          </a>
          .
        </p>
        <p>A consulta não precisa de chave de acesso.</p>
      </div>
    </footer>
  )
}
