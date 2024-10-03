import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
// import { Botao, BotaoSalvar } from '../../styles'

export type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  useEffect(() => {
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        id,
        nome,
        email,
        telefone
      })
    )
    setEstaEditando(false)
  }

  return (
    <div>
      {estaEditando ? (
        <>
          <input
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Nome Completo"
          />
          <input
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="E-mail"
          />
          <input
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
            placeholder="Telefone"
          />
          <div>
            <button onClick={salvarEdicao}>Salvar</button>
            <button onClick={cancelarEdicao}>Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <span>{nome}</span>
          <span>{email}</span>
          <span>{telefone}</span>
          <div>
            <button onClick={() => setEstaEditando(true)}>Editar</button>
            <button onClick={() => dispatch(remover(id))}>Remover</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Contato
