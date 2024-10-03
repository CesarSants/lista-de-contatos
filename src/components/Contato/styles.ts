import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 70%;
  margin: 32px auto 0;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 92%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const Tag = styled.span`
  padding: 8px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  text-align: center;
  overflow-wrap: break-word;
`
export const TagEditando = styled.input`
  padding: 8px 8px;
  color: ${variaveis.azulEscuro};
  font-weight: bold;
  font-size: 18px;
  background-color: #eeeeee;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  text-align: center;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
