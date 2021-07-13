import { createGlobalStyle } from 'styled-components'
import colors from './colors.json'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

const GlobalStyle = createGlobalStyle`
  *, html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: ${colors.background.primary};
  }

  img {
    width: 100%;
    height: auto;
  }

  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

export { theme, GlobalStyle }