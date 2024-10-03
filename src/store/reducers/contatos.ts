import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
// import { useNavigate } from 'react-router-dom'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      if (!action.payload.nome) {
        alert('O campo Nome é obrigatório.')
        return
      }

      if (!action.payload.email && !action.payload.telefone) {
        alert(
          'Você deve preencher pelo menos um dos campos: E-mail ou Telefone.'
        )
        return
      }

      const contatoExistente = state.itens.find(
        (item) =>
          item.nome === action.payload.nome &&
          item.email === action.payload.email &&
          item.telefone === action.payload.telefone
      )

      if (contatoExistente) {
        alert('Já existe um contato com o mesmo nome, E-mail e telefone.')
        return
      } ///////////////////////////

      const contatoExistenteNome = state.itens.find(
        (item) => item.nome === action.payload.nome
      )

      if (contatoExistenteNome) {
        alert(`Já existe um contato com o mesmo nome: "${action.payload.nome}"`)
        return
      } /////////////////////////

      const contatoExistenteTel = state.itens.find(
        (item) => item.telefone === action.payload.telefone
      )

      if (contatoExistenteTel) {
        alert(
          `Já existe um contato com o mesmo telefone: "${action.payload.telefone}"`
        )
        return
      } /////////////////////////////////

      const contatoExistenteEmail = state.itens.find(
        (item) => item.email === action.payload.email
      )

      if (contatoExistenteEmail) {
        alert(
          `Já existe um contato com o mesmo E-mail: "${action.payload.email}"`
        )
        return
      } /////////////////////////

      const contatoExistenteEmailETel = state.itens.find(
        (item) =>
          item.email === action.payload.email &&
          item.telefone === action.payload.telefone
      )

      if (contatoExistenteEmailETel) {
        alert('Já existe um contato com o mesmo E-mail e telefone')
        return
      } /////////////////////////

      const ultimoContato = state.itens[state.itens.length - 1]
      const novoContato = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }

      state.itens.push(novoContato)
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
