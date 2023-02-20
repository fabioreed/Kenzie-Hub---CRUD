import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoAndBtnContainer } from './style'

function LogoAndButton() {
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        navigate('/')
    }

  return (
    <LogoAndBtnContainer>
        <h1>Kenzie Hub</h1>
        <button onClick={handleLogin}>Voltar</button>
    </LogoAndBtnContainer>
  )
}

export default LogoAndButton