

export default function PropsNomeado({titulo, subtitulo, status="true"}){
    return(
        <>
            <h1>{titulo}</h1>
            <h3>{subtitulo}</h3>
            <span>O status é {status}</span>
        </>
    )

}