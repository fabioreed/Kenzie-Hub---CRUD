import React from 'react'

function Input({ label, id, type, error, ...rest }) {
  return (
    <div>
        <label htmlFor={id}>Senha</label>
        <input type={type} placeholder='Criar senha'{...register('password')}/>
        {errors.password?.message ? <Error>{errors.password.message} *</Error> : null}
    </div>
  )
}

export default Input

// <div>
//   <label htmlFor="nome">Nome</label>
//   <input type="text" placeholder='Digite aqui seu nome' {...register('name')}/>
//   {errors.name?.message ? <Error>{errors.name.message} *</Error> : null}
// </div>