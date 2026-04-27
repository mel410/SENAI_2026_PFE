import Header from "../../componentes/Header"

export default function Relatorio() {
    const leituras = [
        { horario: "12:00", qualidadeAr: "Boa", iqa: 42, temperatura: "26°C", umidade: "68%" },
        { horario: "13:00", qualidadeAr: "Moderada", iqa: 46, temperatura: "25°C", umidade: "70%" },
        { horario: "14:00", qualidadeAr: "Moderada", iqa: 45, temperatura: "26°C", umidade: "69%" },
        { horario: "15:00", qualidadeAr: "Boa", iqa: 42, temperatura: "26°C", umidade: "68%" },
    ]

    return (
        <div className="container">
            <Header />

            <h3>Relatório Estação Meteorológica</h3>
            <p>Monitoramento da temperatura e umidade em tempo real</p>

            <section className="graficos">
                {/* gráficos futuramente */}
            </section>

            <section className="tabela-leituras">
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade do Ar</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leituras.map((leitura, index) => (
                            <tr key={index}>
                                <td>{leitura.horario}</td>
                                <td>{leitura.qualidadeAr}</td>
                                <td>{leitura.iqa}</td>
                                <td>{leitura.temperatura}</td>
                                <td>{leitura.umidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}