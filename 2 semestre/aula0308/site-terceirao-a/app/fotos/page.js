import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";

export default function Fotos() {
  return (
    <>
      <Header />

      <main className="pagina">
        <h2>Galeria de fotos</h2>

        <div className="galeria">
          <Image src={Img1} alt="Foto 1" className="foto" />
          <Image src={Img2} alt="Foto 2" className="foto" />
          <Image src={Img3} alt="Foto 3" className="foto" />
        </div>
      </main>

      <Footer />
    </>
  );
}