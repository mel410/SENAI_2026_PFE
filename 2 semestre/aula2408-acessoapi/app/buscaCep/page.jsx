'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function BuscaCep() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const search = async (event) => {
        event.preventDefault();
        const cepLimpo = cep.replace(/\D/g, '');

        if (cepLimpo.length !== 8) {
            setErro('Digite um CEP válido com 8 números.');
            setEndereco(null);
            return;
        }

        setCarregando(true);
        setErro('');

        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            if (!resposta.ok) throw new Error('Falha na comunicação');

            const dados = await resposta.json();
            if (dados.erro) {
                setEndereco(null);
                setErro('Não encontramos esse CEP. Confira os números e tente novamente.');
                return;
            }
            setEndereco(dados);
        } catch {
            setEndereco(null);
            setErro('Não foi possível consultar agora. Verifique sua conexão e tente novamente.');
        } finally {
            setCarregando(false);
        }
    };

    const formatarCep = (valor) => {
        const numeros = valor.replace(/\D/g, '').slice(0, 8);
        return numeros.length > 5 ? `${numeros.slice(0, 5)}-${numeros.slice(5)}` : numeros;
    };

    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <div className={styles.brandMark} aria-hidden="true">⌖</div>
                <div>
                    <p className={styles.eyebrow}>CONSULTA RÁPIDA</p>
                    <p className={styles.brand}>Mapa de endereços</p>
                </div>
            </header>

            <section className={styles.hero}>
                <div className={styles.copy}>
                    <p className={styles.kicker}>Brasil, de ponta a ponta</p>
                    <h1>Encontre um endereço pelo CEP.</h1>
                    <p className={styles.description}>Consulte ruas, bairros, cidades e estados em poucos segundos.</p>
                </div>

                <div className={styles.searchPanel}>
                    <form onSubmit={search} className={styles.form}>
                        <label htmlFor="cep">Qual CEP você quer consultar?</label>
                        <div className={styles.inputRow}>
                            <div className={styles.inputWrap}>
                                <span aria-hidden="true">⌕</span>
                                <input
                                    id="cep"
                                    inputMode="numeric"
                                    value={cep}
                                    onChange={(event) => setCep(formatarCep(event.target.value))}
                                    placeholder="00000-000"
                                    aria-describedby={erro ? 'cep-error' : undefined}
                                    aria-invalid={Boolean(erro)}
                                />
                            </div>
                            <button type="submit" disabled={carregando}>
                                {carregando ? 'Buscando...' : 'Consultar'}
                            </button>
                        </div>
                        {erro && <p id="cep-error" className={styles.error} role="alert">{erro}</p>}
                        <p className={styles.hint}>Exemplo: 01310-100</p>
                    </form>
                </div>
            </section>

            {endereco && (
                <section className={styles.result} aria-live="polite">
                    <div className={styles.resultHeading}>
                        <div>
                            <p className={styles.kicker}>Resultado encontrado</p>
                            <h2>{endereco.localidade} <span>/ {endereco.uf}</span></h2>
                        </div>
                        <span className={styles.cepBadge}>{endereco.cep}</span>
                    </div>
                    <div className={styles.details}>
                        <div><span>Logradouro</span><strong>{endereco.logradouro || 'Não informado'}</strong></div>
                        <div><span>Bairro</span><strong>{endereco.bairro || 'Não informado'}</strong></div>
                        <div><span>Cidade</span><strong>{endereco.localidade || 'Não informado'}</strong></div>
                        <div><span>Estado</span><strong>{endereco.estado || endereco.uf || 'Não informado'}</strong></div>
                    </div>
                </section>
            )}

            <footer className={styles.footer}>Dados consultados em tempo real via ViaCEP</footer>
        </main>
    );
}