import Header from "../components/header";
import Footer from "../components/footer";

export default function Sobre() {
  return (
    <>
      <Header />

      <main className="pagina">
        <h2>Sobre o Terceiro A</h2>

        <div className="card">
          <h3>Quem somos</h3>
          <p>
            O Terceiro A é uma turma formada por estudantes dedicados,
            criativos e unidos. Durante nossa trajetória escolar vivemos
            momentos marcantes, desafios, conquistas e muitas amizades que
            levaremos para a vida.
          </p>
        </div>

        <div className="card">
          <h3>Nossa trajetória</h3>
          <p>
            Ao longo do ensino médio participamos de projetos, apresentações,
            eventos, gincanas, trotes e atividades que fortaleceram o espírito
            de equipe da turma. Cada etapa contribuiu para o nosso crescimento
            pessoal e acadêmico.
          </p>
        </div>

        <div className="card">
          <h3>A formatura</h3>
          <p>
            A cerimônia de formatura acontecerá em <strong>18 de dezembro de 2026</strong>,
            na quadra da Escola de Mirandópolis. Será um momento especial para
            celebrar o encerramento dessa etapa ao lado de nossos familiares,
            professores e amigos.
          </p>
        </div>

        <div className="card">
          <h3>Nossa mensagem</h3>
          <p>
            Este site foi criado para registrar as lembranças do Terceiro A e
            guardar os momentos que fizeram parte da nossa história. Que essas
            memórias permaneçam vivas por muitos anos e nos lembrem da amizade,
            da dedicação e da união que marcaram nossa turma.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}