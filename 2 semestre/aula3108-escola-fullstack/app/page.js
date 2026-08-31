import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.badge}>Instituição escolar</span>
          <h1 className={styles.title}>Educação inspiradora em um só lugar</h1>
          <p className={styles.text}>
            Uma experiência moderna para gestão escolar, com identidade visual elegante,
            acolhedora e pensada para conectar alunos, professores e famílias.
          </p>

          <div className={styles.ctas}>
            <Link href="/principal" className={styles.primary}>Entrar no sistema</Link>
            <Link href="/principal#sobre" className={styles.secondary}>Conhecer mais</Link>
          </div>
        </div>

        <div className={styles.visual} aria-label="Ilustração da escola">
          <div className={styles.glow} />
          <div className={styles.cardImage}>
            <div className={styles.brandPanel}>
              <span className={styles.brandLabel}>SESI</span>
              <span className={styles.brandDivider} />
              <span className={styles.brandLabel}>SENAI</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
