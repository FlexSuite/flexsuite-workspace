import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: any) {
  return <div className={styles.container}>
      <div className="container">
        <div className="cabecalho">
          <h1>Workspace</h1>
        </div>
        <div className="conteudo">
        </div>
      </div>
      <Component {...pageProps} />
    </div>
}

export default MyApp