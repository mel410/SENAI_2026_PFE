import Header from '../../componentes/header'
import './dashboard.css'
import GraficoBarra from '../../componentes/graficoBarra'

export default function Dashboard() {
    return (
        <>
            <Header />

            {/* CARDS */}
            <section className='cards'>
                <div className='card'>
                    <h6>temperatura</h6>
                    <h2>33º C</h2>
                </div>
                <div className='card'>
                    <h6>umidade</h6>
                    <h2>60%</h2>
                </div>
                <div className='card'>
                    <h6>pressão</h6>
                    <h2>1013 hPa</h2>
                </div>
                <div className='card'>
                    <h6>vento</h6>
                    <h2>12 km/h</h2>
                </div>
            </section>

            {/* GRÁFICOS */}
            <section className="graficos">
                <h6>gráficos</h6>

                <div className="container-graficos">
                    <div className="grafico-item" >
                        <GraficoBarra />
                    </div>

                    <div className="grafico-item">
                        <GraficoBarra />
                    </div>
                </div>
            </section>

            {/* TABELA */}
            <section className="tabela">
                <h6>leituras recentes</h6>

                <table>
                    <thead>
                        <tr>
                            <th>horário</th>
                            <th>temp.</th>
                            <th>umidade</th>
                            <th>vento</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>12:00</td>
                            <td>45ºC</td>
                            <td>50%</td>
                            <td>13 km/h</td>
                        </tr>
                        <tr>
                            <td>13:00</td>
                            <td>44ºC</td>
                            <td>52%</td>
                            <td>11 km/h</td>
                        </tr>
                        <tr>
                            <td>14:00</td>
                            <td>43ºC</td>
                            <td>55%</td>
                            <td>10 km/h</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}












