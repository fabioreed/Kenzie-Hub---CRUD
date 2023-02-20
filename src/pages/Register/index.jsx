import React, { useContext, useState } from 'react'
import LogoAndButton from '../../components/LogoAndButton'
import { Error, PasswordEye, RegisterContainer, RegisterMainContainer } from './style'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './validations'
import { UserContext } from '../../components/providers/userContext'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

function Register() {
  const [confirmPass, setConfirmPass] = useState(true)

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const { onSubmitFunction, isHidden, setIsHidden } = useContext(UserContext)

  async function submit(data) {

    await onSubmitFunction(data)

  }

  return (
    <RegisterMainContainer>
      <LogoAndButton />
      <RegisterContainer onSubmit={handleSubmit(submit)}>
        <header>
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa</span>
        </header>

        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" placeholder='Digite aqui seu nome' {...register('name')}/>
          {errors.name?.message ? <Error>{errors.name.message} *</Error> : null}
        </div>
        
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="" placeholder='nome@example.com' {...register('email')}/>
          {errors.email?.message ? <Error>{errors.email.message} *</Error> : null}
        </div>
        
        <div>
          <label htmlFor="senha">Senha</label>
          <input type={isHidden ? 'password' : 'text'} placeholder='Criar senha'{...register('password')}/>
          {errors.password?.message ? <Error>{errors.password.message} *</Error> : null}
          <PasswordEye type='button' onClick={() => setIsHidden(!isHidden)}>
            { isHidden ? <MdVisibility /> : <MdVisibilityOff /> }
          </PasswordEye>
        </div>
        
        <div>
          <label htmlFor="senha">Confirmar Senha</label>
          <input type={confirmPass ? 'password' : 'text'} placeholder='Confirmar senha' {...register('passwordConfirmation')}/>
          {errors.passwordConfirmation?.message ? <Error>{errors.passwordConfirmation.message} *</Error> : null}
          <PasswordEye type='button' onClick={() => setConfirmPass(!confirmPass)}>
            { confirmPass ? <MdVisibility /> : <MdVisibilityOff /> }
          </PasswordEye>
        </div>
        
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="text" placeholder='Fale sobre você'{...register('bio')}/>
          {errors.bio?.message ? <Error>{errors.bio.message} *</Error> : null}
        </div>

        <div>
          <label htmlFor="contato">Contato</label>
          <input type="text" placeholder='Link das redes ou número de contato' {...register('contact')}/>
          {errors.contact?.message ? <Error>{errors.contact.message} *</Error> : null}
        </div>

        <div>
          <label htmlFor="modulo">Selecionar Módulo</label>
          <select name="modulo" {...register('course_module')}>
            <option value="">Selecionar Módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
            <option value="Segundo módulo (Frontend intermediário)">Segundo Módulo</option>
            <option value="Terceiro módulo (React - Frontend avançado)">Terceiro Módulo</option>
            <option value="Quarto módulo (Introdução ao Backend)">Quarto Módulo</option>
            <option value="Quinto módulo (Backend intermediário)">Quinto Módulo</option>
            <option value="Sexto módulo (Backend avançado)">Sexto Módulo</option>
          </select>
          {errors.course_module?.message ? <Error>{errors.course_module.message} *</Error> : null}
        </div>

        <button type='submit'>Cadastrar</button> 
    </RegisterContainer>
    </RegisterMainContainer>
  )
}
export default Register
//disabled={true}