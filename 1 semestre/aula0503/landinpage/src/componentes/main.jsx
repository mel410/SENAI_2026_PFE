import imgMusculacao from '../assets/img/download (3).jpg'
import imgYoga from "../assets/img/download (1).jpg"
import imgCardio from "../assets/img/download (2).jpg"

export default function Main(){
    return(
        <main>
            <section id="home">
                <h2>Transforme seu corpo com a <span>Fofitnes</span></h2>
                <p>A academia perfeita para quem deseja saúde, diversão e um shape incrível!</p>
                <button>Começar Agora</button>
            </section>

            <section id="sobre">
                <h2>Sobre a Fofitnes</h2>
                <p>Somos uma academia focada em saúde, bem-estar e inclusão. Aqui, todos os alunos são tratados com respeito e motivação. Nossa estrutura conta com equipamentos modernos, professores qualificados e um ambiente acolhedor.</p>
            </section>

            <section id="modalidades">
                <h2>Modalidades</h2>
                <div className="exercícios">
                    <h3>Musculação</h3>
                    <img src={imgMusculacao} alt="" />
                </div>
                <div className="exercícios">
                    <h3>Cardio</h3>
                    <img src={imgCardio} alt="" />
                </div>
                <div className="exercícios">
                    <h3>Yoga</h3>
                    <img src={imgYoga} alt="" />
                </div>
            </section>

            <section id="planos">
                <h2>Planos e preços</h2>
                <div className="tabela-plano">
                    <h3>Básico</h3>
                    <p className= "preço">R$ 79,90/mês</p>
                    <ul>
                        <li>Acesso à musculação</li>
                        <li>Aulas coletivas limitadas</li>
                        <li>Horário Livre</li>
                    </ul>
                </div>
                <div className="plano-destaque"> 
                    <h3>Premium</h3>
                    <p className= "preço">R$ 129,90/mês</p>
                    <ul>
                        <li>Acesso total</li>
                        <li>Personal Treiner</li>
                        <li>Yoga e Funcional</li>
                    </ul>
                </div>
                <div className="plano"> 
                    <h3>Vip</h3>
                    <p className= "preço">R$ 199,90/mês</p>
                    <ul>
                        <li>Personal exclusivo</li>
                        <li>Nutricionista</li>
                        <li>Acompanhamento mensal</li>
                        <li>Benefícios exclusivos</li>
                    </ul>
                </div>
            </section>

            <section id="depoimentos">
                <h2>O que nossos alunos dizem</h2>
                <div className="depoimento">
                    <p>"A Fofitnes mudou minha vida! Os professores são incríveis e o ambiente é super acolhedor. Recomendo para todos!"</p>
                    <span>-Noemi</span>
                </div>
                <div className="depoimento">
                    <p>"A Fofitnes é o lugar perfeito para quem busca saúde e bem-estar. A equipe é extremamente profissional e acolhedora."</p>
                    <span>-Rafael</span>
                </div>
            </section>

            <section id="contato" className="contato">
                <h2>Entre em contato</h2>
                <form action="">
                    <input type="text" placeholder="Seu nome" />
                    <input type="text" placeholder="Seu e-mail" />
                    <textarea name="" id=""placeholder="Mensagem">
                    </textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </main>
    )
}