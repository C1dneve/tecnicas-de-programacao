import { useState } from 'react'
function Botao(){

    const[valor, setValor]= useState(0)

    return(
        <>
        <button onClick={() => {
            setValor(valor + 1);
            alert('Você clicou no botão!');
        }}>
            Clique aqui! valor: {valor}
        </button>
        <button onClick={() => {
            setValor(0);
            alert('Você reiniciou o botão!');
        }}>
            Reinicie aqui! 
        </button>
        </>
    )
}
export default Botao;