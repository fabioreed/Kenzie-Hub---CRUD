import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Form, Error, InputContainer, PasswordLoginEye } from './style'
import * as yup from 'yup'
import { useContext, useState } from 'react'
import { UserContext } from '../providers/userContext'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const schema = yup.object({
    email: yup.string().email().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório')
})

export function LoginForm() {
    const { handleForm, isHidden, setIsHidden } = useContext(UserContext)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    
    function handleRegister(e) {
        e.preventDefault()

        navigate('/register')
    }

    async function submit(data) {

        await handleForm(data)
    }

    return (
        <>
           <Form onSubmit={handleSubmit(submit)}>
                <section>
                    <InputContainer>
                        <label htmlFor="Email">Email</label>
                        <input type="text" placeholder='Digite seu email de usuário' {...register('email')} />
                        { errors.email?.message ? <Error>{errors.email.message} *</Error> : <></> }
                    </InputContainer>
                    
                    <InputContainer>
                        <label htmlFor="Senha">Senha</label>
                        <input type={isHidden ? 'password' : 'text'} placeholder='Digite sua senha' {...register('password')} />
                        <PasswordLoginEye type='button' onClick={() => setIsHidden(!isHidden)}>
                            { isHidden ? <MdVisibility /> : <MdVisibilityOff /> }
                        </PasswordLoginEye>
                        { errors.password?.message ? <Error>{errors.password.message} *</Error> : <></> }
                    </InputContainer>
                    
                    <button type='submit'>Entrar</button>
                </section>

                <span>Ainda não possui uma conta?</span>
                <button onClick={handleRegister}>Cadastre-se</button>
            </Form>
        </>
        
    )
}