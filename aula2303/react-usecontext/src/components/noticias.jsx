import "./noticias.css";

const noticias = [
  {
    titulo: "Edward Cullen",
    descricao: "E então o leão se apaixonou pelo cordeiro.",
    imagem: "https://i.pinimg.com/control1/1200x/fb/f0/47/fbf047b8896696e32af3d8d7c50ff2e3.jpg"
  },
  {
    titulo: "Bella Swan",
    descricao: "Prefiro morrer do que ficar longe de você.",
    imagem: "https://i.pinimg.com/736x/e7/53/a5/e753a55160136c665fb0fbee0ae03072.jpg"
  },
  {
    titulo: "Jacob Black",
    descricao: "Eu sou melhor para você do que ele",
    imagem: "https://i.pinimg.com/736x/fa/e9/ea/fae9ea50fc65790068b44ffebf32596f.jpg"
  }
];

export default function Noticias({ tema }) {
  return (
    <section className={`noticias-${tema}`}>
      <h2>Notícias</h2>

      <div className="cards">
        {noticias.map((n, index) => (
          <div key={index} className="card">
            <img src={n.imagem} alt={n.titulo} />
            <h3>{n.titulo}</h3>
            <p>{n.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}