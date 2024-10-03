import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

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
    if (email && !email.includes('@')) {
      alert('O e-mail deve conter "@"')
      return
    }

    if (!nome) {
      alert('O campo Nome é obrigatório.')
      return
    }

    if (!email && !telefone) {
      alert('Você deve preencher pelo menos um dos campos: E-mail ou Telefone.')
      return
    }

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
        <S.Card>
          <S.TagEditando
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Nome Completo"
          />
          <S.TagEditando
            value={email}
            type="email"
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder="E-mail"
          />
          <S.TagEditando
            value={telefone}
            type="tel"
            onChange={(evento) =>
              setTelefone(evento.target.value.replace(/\D/, ''))
            }
            placeholder="Telefone"
            maxLength={14}
          />
          <div>
            <BotaoSalvar type="submit" onClick={salvarEdicao}>
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </div>
        </S.Card>
      ) : (
        <S.Card>
          <S.Tag>{nome}</S.Tag>
          <S.Tag>{email}</S.Tag>
          <S.Tag>{telefone}</S.Tag>
          <div>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </div>
        </S.Card>
      )}
    </div>
  )
}

export default Contato
