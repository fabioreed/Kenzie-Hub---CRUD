import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../components/providers/userContext'

function ProtectedRoutes() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user) {
            navigate('/')
        }
    }, [])

  return (
    <>
        { user ? <Outlet /> : null }
    </>
  )
}

export default ProtectedRoutes