import { createGlobalStyle } from 'styled-components'
import colors from './colors.json'

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundPrimary: #D9E6F6;
    --backgroundSecondary: #F1F9FE;
    --backgroundTertiary: #FFFFFF;
    --backgroundQuarternary: #BBCDE8;
    --colorPrimary: #2E7BB4;
    --colorSecondary: #388BB0;
    --colorTertiary: #2F4A71;
    --colorQuarternary: #D81D99;
    --textPrimaryColor: #333333;
    --textSecondaryColor: #FFFFFF;
    --textTertiaryColor: #5A5A5A;
    --textQuarternaryColor: #C5C6CA;
    --commonRadius: 8px;
  }
  
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

  @keyframes toggle-menu {
      0% {
          margin-left: -100vw;
      }
      25% {
          margin-left: -75vw;
      }
      50% {
          margin-left: -50vw;
      }
      75% {
          margin-left: -25vw;
      }
      100% {
          margin-left: 0;
      }
}
`

export { theme, GlobalStyle }