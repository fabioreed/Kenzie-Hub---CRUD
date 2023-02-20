import React, { useContext, useState } from 'react'
import Modal from '../Modal'
import { TechContext } from '../providers/TechContext'
import { TechList, TechSection } from './style'

function TechnolgieSection() {
  const { setEditingTech, setModal, modal } = useContext(TechContext)
  const { profile } = useContext(TechContext)
  const [typeModal, setTypeModal] = useState('')
  const [techId, setTechId] = useState('')

  function infoTech(data) {
    setEditingTech(data)
    console.log(data)
  }

  return (
    <TechSection>
        <div>
            <h3>Tecnologias</h3>
        <button onClick={() => {
          setModal(true)
          setTypeModal('createModal')
        }}>+</button>
        </div>
      <Modal isOpen={modal} setModalOpen={() => setModal(!modal)} typeModal={typeModal} techId={techId} />
          {profile.techs?.length ? (
            <TechList>
                {profile?.techs.map(tech => (
                  <li key={tech.id} onClick={() => {
                    infoTech(tech)
                    setModal(true)
                    setTypeModal('editModal')
                    setTechId(tech.id)
                  }} >
                    <h4>{tech.title}</h4>
                    <span>{tech.status}</span>
                  </li>
                ))}
            </TechList>
          ) : (
            <p>Nenhuma tecnologia cadastrada ainda!</p>     
            )}
    </TechSection>
  )
}

export default TechnolgieSection

// 