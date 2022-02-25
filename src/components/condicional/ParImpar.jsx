import React, { useState } from 'react'

function ParImpar({num = 0}) {


    // let numero = 0
    // numero = props.num ? props.num: 0
    // usar props parametro e usar numero vai para num h2

    return (
      <>
        <h2>O resultado é : </h2>

        {num % 2 == 0  
        ?<h3>PAR</h3> 
        :<h3>IMPAR</h3> }
        
      </>
    )
}

export default ParImpar