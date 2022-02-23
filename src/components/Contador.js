import React , {useState} from 'react' 

function Contador (props)   {

    const [numero , setNumero] = useState(props.inicial)

    const incremento = () => { 
        if (numero >= props.limitemax ) {
            alert ("passou do limite de 100 amigo")
             return
        }
        setNumero(numero + props.passo) 
    }
    
    function decremento() {
        if (numero <= props.limitemin ) {
            alert("ja está negativo amigo")
            return
        }
        setNumero(numero - props.passo)
    }

return (
<>

    <h1> {numero} </h1>
    <button onClick = {incremento}>+</button>
    <button onClick = {decremento}>-</button>
</>
)
}

export default Contador