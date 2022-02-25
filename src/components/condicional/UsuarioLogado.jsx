import React from 'react'
import If from './if'
function UsuarioLogado(props) {

  const usuario = props.usuario ||  {}
//   const é caso usuario em branco ele retorna vazio para não dar erro

    return (
      <>
         <If test = {usuario && usuario.nome && usuario.email} >
            <h2> Usuario logado</h2>
            <h3>{usuario.nome}   -   { usuario.email } </h3>
         </If>
         <If test = {!usuario || !usuario.nome || !usuario.email} >
            <h2> bem vindo </h2>
         
         </If>
      </>
    )
}
export default UsuarioLogado