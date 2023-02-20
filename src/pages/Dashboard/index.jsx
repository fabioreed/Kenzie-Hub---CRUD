import React, { useContext } from 'react'
import { TechContext } from '../../components/providers/TechContext'
import { UserContext } from '../../components/providers/userContext'
import TechnolgieSection from '../../components/TechnologieSection'
import { HeaderHome, MainContainer, SectionHome, SectionUser } from './style'

function Dashboard() {
  const { logout } = useContext(UserContext)
  const { profile } = useContext(TechContext)

  return (
    <MainContainer>
      <HeaderHome>
        <h1>Kenzie Hub</h1>
        <button onClick={logout}>Sair</button>
      </HeaderHome>
      <SectionHome>
        <h2>Hello, {profile.name}</h2>
        <p>{profile.course_module}</p>
      </SectionHome>
      <SectionUser>

        <TechnolgieSection />

      </SectionUser>
    </MainContainer>
  )
}

export default Dashboard