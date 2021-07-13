import { Header } from '@/components/Header'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@/styles/globals'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
