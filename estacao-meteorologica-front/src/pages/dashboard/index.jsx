import Header from '../../componentes/header'
import './dashboard.css';

export default function Dashboard(){
    return (
        <>
        <Header />
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
                <h2>12km</h2>
            </div>
        </section>

        <section className="graficos">
            <h6>gráficos</h6>
            <div>
                {/* colocar gráficos */}
            </div>
        </section>

        <section className="tabela">
            <h6>leituras recentes</h6>
            <table>
                <thead>
                    <tr>
                        <th>horario</th>
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
                        <td>13km</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>45ºC</td>
                        <td>50%</td>
                        <td>13km</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                        <td>45ºC</td>
                        <td>50%</td>
                        <td>13km</td>
                    </tr>
                </tbody>
            </table>
        </section>
        </>
    )
}












