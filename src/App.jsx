import { useState } from 'react'
import { themes } from './theme/theme'
import AppRoutes from './Routes/AppRoutes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <AppRoutes theme={themes[theme]} setTheme={setTheme} />
      </ThemeProvider>
    </>
  )
}

export default App
