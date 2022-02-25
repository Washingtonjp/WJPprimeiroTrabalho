import React, { useState } from 'react'

function Carros(props) {



    return (
    <div className = " mt-5">
        <li>Modelo : {props.modelo} </li>
        <li>Marca : {props.marca} </li>
        <li>Cor : {props.cor} </li>
        <li>Ano : {props.ano} </li>
        <li>Portas : {props.porta} </li>
        <li>Combustivel : {props.combustivel} </li>
        <li> Tamanho Aro : { props.aro} </li>
        <li> Potencia : { props.potencia} </li>
        <li> Preço : {props.preco } </li>
      </div>
    )
}

export default Carros 