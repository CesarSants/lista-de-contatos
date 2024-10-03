import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nome.toLowerCase().includes(termo.toLowerCase()) ||
          item.email.toLowerCase().includes(termo.toLowerCase())
      )
    }
    return contatosFiltrados
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <Titulo as="p">{contatos.length} contato(s) encontrado(s)</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
