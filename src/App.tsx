import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

import { ControllerRouter } from './components/ControllerRouter'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
export function App(){
  return (
    <>
      <ThemeProvider theme={light} >
        {/* todos conteúdos aqui */}
          <GlobalStyles />
          <ControllerRouter />
        {/* todos conteúdos aqui */}
      </ThemeProvider>
    </>
  )
}