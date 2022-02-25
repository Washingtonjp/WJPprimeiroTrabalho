import React, { useState } from 'react'

function DigiteSeuNome(props) {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <h2>
        Nome :{nome}
      </h2>
       Nome : <input type="text" placeholder="digite seu nome"
        value={nome}
        onChange={event => setNome(event.target.value)}
      />
      <br />
      <br />
      <h2>
        Email : {email}
      </h2>
        Email :  <input type="email" placeholder="digite o email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />

    </>
  )
}

export default DigiteSeuNome