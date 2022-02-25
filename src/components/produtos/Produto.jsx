import Reacr, {useState} from 'react' 
import './Produto.css'



export function Produto (props) {


    let btnClass = "btn "

if ( props.verde) {
  btnClass = btnClass + "verde"
}

btnClass += props.azul ?  'azul' : ''


return (
<>
    <ul>
    <li className='nome'> {props.nome} </li>
    <li className='marca'> {props.marca} </li>
    <li className='preco'> R$ {props.preco}  </li>
    <button className={btnClass} > salvar </button>
    </ul>
 </> 
 )
 }
 
export default Produto;