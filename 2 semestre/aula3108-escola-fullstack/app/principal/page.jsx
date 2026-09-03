import Header from '../components/header';
import styles from './page.module.css';

export default function Principal() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section id="painel" className={styles.hero}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>Painel escolar</span>
            <h1 className={styles.title}>Olá, seja bem-vindo</h1>
            <p className={styles.text}>Acesse rapidamente as principais áreas da escola.</p>
          </div>
        </section>

        <section id="sobre" className={styles.grid}>
          <a href="/cadaaluno" className={styles.card}>
            <div className={styles.cardIcon}>📚</div>
            <h3>Cadastrar aluno</h3>
            <p>Adicione um novo aluno ao sistema.</p>
          </a>

          <a href="/listaaluno" className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <h3>Lista de alunos</h3>
            <p>Consulte os alunos cadastrados.</p>
          </a>

          <a href="/listnota" className={styles.card}>
            <div className={styles.cardIcon}>🤝</div>
            <h3>Boletins</h3>
            <p>Veja as notas dos alunos.</p>
          </a>
        </section>
      </main>
    </>
  );
}