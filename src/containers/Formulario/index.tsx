import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )

    if (nome.length >= 1) {
      navigate('/')
    }
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome Completo"
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
