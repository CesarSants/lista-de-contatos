import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { Campo } from '../../styles'
import { Botao } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <Campo
            type="text"
            placeholder="Buscar Contatos"
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
          />
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar à lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
