import * as yup from 'yup'

export const formSchema = yup.object({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    password: yup
      .string()
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
      .required('Senha obrigatória'),
    passwordConfirmation: yup
      .string()
      .required('Confirmação de senha é obrigatória')
      .oneOf(
        [yup.ref("password"), null],
        "Confirmação de senha deve ser igual a senha"
      ),
      bio: yup.string().required('Uma frase ou algo que te defina'),
    contact: yup.string().required('Coloque o link de suas redes sociais ou número de telefone'),
    course_module: yup.string().required('Seleciona o módulo que você está')
})