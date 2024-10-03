import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding:0 ;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 1024px) {
    display: block;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 500px) {
    padding: 0 20px;
  }

  @media (max-width: 400px) {
    padding: 0;
  }
`

export const Titulo = styled.h2`
  display: block;
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulClaro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
