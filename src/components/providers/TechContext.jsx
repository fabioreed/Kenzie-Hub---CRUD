import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

export const TechContext = createContext({})

function TechProvider({ children }) {
  const [techs, setTechs] = useState([])
  const [profile, setProfile] = useState({})
  const [editingTech, setEditingTech] = useState(null)
  const [modal, setModal] = useState(false)
  const token = localStorage.getItem('@userToken')
  const [loading, setLoading] = useState(false)
  
  //carrega a lista
  useEffect(() => {
    if (token) {
      async function techLoad() {
        try {
          const res = await api.get('profile', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })

          setProfile(res.data)

        } catch (err) {
          console.log(err)
        }
      }
      techLoad()
    }
  }, [techs])

  //Create
  async function createTechnologie(data) {
    const token = localStorage.getItem('@userToken')
    try {
      const res = await api.post('users/techs', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      toast.success('Tecnologia cadastrada!')

      setTechs([...techs, res])
      setModal(!modal)

    } catch (err) {
      console.log(err)

      toast.error(err.message)
    }
  }

  //Edit
  async function editTechnologie(data, id) {
    const token = localStorage.getItem('@userToken')
    try {
      const res = await api.put(`users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const newTechs = techs.map(tech => {
        if (id === tech.id) {
          return {...tech, ...data}
        } else {
          return tech
        }
      })

      setTechs(newTechs)

      setModal(!modal)

      toast.success('Tecnologia atualizada!')

    } catch (err) {
      console.log(err)

      toast.error('Algo deu errado!')
    }
  }

  //Delete
  async function deleteTechnologie(id) {
    const token = localStorage.getItem('@userToken')
    try {
      const res = await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      
      const newTech = techs.filter(tech => tech.id !== id)

      setTechs(newTech)

      toast.success('Tecnologia deletada com sucesso!')

      setModal(!modal)

    } catch (error) {
      
      toast.error('Algo deu errado!')
    }
  }

  return (
    <TechContext.Provider value={{ techs, createTechnologie, editTechnologie, deleteTechnologie, editingTech, setEditingTech, setModal, modal, setProfile, profile }}>
      {children}
    </TechContext.Provider>
  )
}

export default TechProvider