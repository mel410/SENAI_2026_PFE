import {useState, useEffect} from "react"

export default function BuscaCep(){
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)

    useEffect(() => {
        if(cep.length == 8){
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            then(response => response.json()).then(data => {
                if(!data.erro){
                    setEndereco(data)
                }else{
                    setEndereco(null)
                    alert('cep nao localizado')
                }
            }).catch(error => console.error('erro ao acessar' , error))
        }
    },[cep])

    return(
        <>
            <h1>Busca CEP</h1>
            <input
                type="number"
                placeholder="Digite para pesquisar"
                maxLength="8"
                value={cep}
                onChange={(e) => setCep(e.target.value)}/>
                {endereço && (
                    <div>
                        <p>logradouro: {endereco.logradouro}</p>
                        <p>bairro: {endereco.bairro}</p>
                        <p>cidade: {endereco.cidade}</p>
                    </div>
                )}
        </>
    )
}
