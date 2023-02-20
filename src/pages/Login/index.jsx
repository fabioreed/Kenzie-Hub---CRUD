import React from 'react'
import { LoginForm } from '../../components/LoginForm'
import { Container, Formm } from './style'

function Login() {
  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <Formm>
        <h3>Login</h3>
        <LoginForm />
      </Formm>
    </Container>
    
  )
}

export default Login