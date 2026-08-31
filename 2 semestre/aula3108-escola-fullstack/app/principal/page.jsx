import Image from 'next/image';
import Header from '../components/header';
import styles from './page.module.css';

export default function Principal() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section id="painel" className={styles.hero}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Escola de excelência</span>
            <h1 className={styles.title}>Bem-vindo ao sistema escolar</h1>
            <p className={styles.text}>
              Acompanhe matrículas, notas, frequência e o desenvolvimento dos alunos em
              uma plataforma moderna, acolhedora e organizada para a comunidade escolar.
            </p>

            <div className={styles.ctaGroup}>
              <a href="#painel" className={styles.primary}>Acessar painel</a>
              <a href="#sobre" className={styles.secondary}>Saiba mais</a>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <div className={styles.logoBox}>
              <span className={styles.logoWord}>SESI</span>
              <span className={styles.logoLine} />
              <span className={styles.logoWord}>SENAI</span>
            </div>
            <div className={styles.badge}>+ 1.200 alunos ativos</div>
          </div>
        </section>

        <section id="sobre" className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardIcon}>📚</div>
            <h3>Aprendizado</h3>
            <p>Estratégias pedagógicas com foco no progresso e no bem-estar dos estudantes.</p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <h3>Desempenho</h3>
            <p>Monitoramento simples e eficiente de notas, presença e avanços por etapa.</p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardIcon}>🤝</div>
            <h3>Comunidade</h3>
            <p>Conexão entre professores, alunos e famílias em um ambiente acessível e claro.</p>
          </article>
        </section>
      </main>
    </>
  );
}