import React, { useState } from 'react'
import Filho from './Filho'

function Pai(props) {

let x =15 
let y = 200

    return (
      <>
         <Filho a = {x}  b  = {y} />
         <Filho a = {x + y } b = {x * y } />
      </>
    )
}

export default Pai