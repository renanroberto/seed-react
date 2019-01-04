import React from 'react'
import { Link } from 'react-router-dom'

import FirstLetter from '../components/FirstLetter'
import ErrorBoundary from '../components/ErrorBoundary'

const Error = () => (
  <section>
    <div><Link to='/'>voltar</Link></div>
    <h2>Bem vindo a página de Error Handling!</h2>
    <p>
      O botão abaixo pega a primeira letra do que você digitar.
      Tente deixar o input vazio e pegar a primeira letra para
      ver o que acontece.
    </p>
    <ErrorBoundary>
      <FirstLetter />
    </ErrorBoundary>
  </section>
)

export default Error
