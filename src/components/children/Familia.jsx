import React from 'react'
function Familia(props) {



    return (
      <>
        <h2>Inicio Menbros da Familia</h2>
            {props.children}
        <h2>Fim dos Menbros da Familia</h2>
      </>
    )
}

export default Familia