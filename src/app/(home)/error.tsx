"use client"

export default function error({error, reset}: errorProps){
    return (
        <div>
            <h1>Ocurrio un error :c</h1>
            <button onClick={reset}>Reiniciar</button>
        </div>
    )
}