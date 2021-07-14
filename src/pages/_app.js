import { Header } from '@/components/Header'
import { ThemeProvider } from 'styled-components'
import { DevkutProvider } from '@/contexts/DevkutContext'
import { GlobalStyle, theme } from '@/styles/globals'

export default function App({ Component, pageProps }) {
  return (
    <DevkutProvider>
      <GlobalStyle />
      <Header />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </DevkutProvider>
  )
}
