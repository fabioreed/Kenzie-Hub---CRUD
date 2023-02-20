import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

export const UserContext = createContext({})

export function UserProvider({children}) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [isHidden, setIsHidden] = useState(true)

    //Register
    async function onSubmitFunction(data) {
        try {
            const res = await api.post('users', data)

            setUser(res.data)

            toast.success('Agora sim. User cadastrado!')

            navigate('/')

        } catch (err) {

            console.log(err)

            toast.error('Email já cadastrado!')
        }
    }

    //Login
    async function handleForm(data) {
        try {
            const res = await api.post('sessions', data)

            localStorage.clear()

            localStorage.setItem('@userToken', res.data.token)
            localStorage.setItem('@userId', res.data.user.id)

            setUser(res.data.user)

            toast.success('Logado!')

            navigate('/dashboard')

        } catch (err) {

            console.log(err)

            toast.error('Eita! Bugou geral agora D:')
        }
    }

    //Logout
    function logout() {
        localStorage.removeItem('@userToken')
        localStorage.removeItem('@userId')

        setUser(null)
    
        toast.success('Você saiu!')
    
        navigate('/')
    }

    //Auto Login
    useEffect(() => {
        const token = localStorage.getItem('@userToken')
        if(token) {
            async function autoLogin() {
                try {
                    const res = await api.get('profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
        
                    setUser(res.data)
        
                    navigate('/dashboard')
                
                } catch (error) {
                    localStorage.clear()
                    
                    console.log(error)
                }
            }
            autoLogin()
        }
    }, [])
    
    return (
        <UserContext.Provider value={{ user, onSubmitFunction, handleForm, logout, isHidden, setIsHidden }}>
            {children}
        </UserContext.Provider>
    )
}