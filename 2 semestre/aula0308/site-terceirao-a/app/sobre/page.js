import Header from "../components/header";
import Footer from "../components/footer";

export default function Sobre() {
  return (
    <>
      <Header />

      <main className="pagina">
        <h2>Sobre a turma</h2>
        <p>
          O Terceiro A é uma turma unida, dedicada e cheia de histórias para
          contar.
        </p>
      </main>

      <Footer />
    </>
  );
}