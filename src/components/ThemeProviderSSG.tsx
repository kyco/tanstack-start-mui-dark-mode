import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

import { theme } from '../styles/mui-theme'
import type { ColorMode } from '../types-enums'

type ThemeProviderProps = {
  defaultMode: ColorMode
  children: React.ReactNode
}

export default function ThemeProvider({
  defaultMode,
  children
}: ThemeProviderProps) {
  return (
    <MuiThemeProvider
      theme={theme}
      defaultMode={defaultMode}
      // storageManager={null}
      // noSsr
    >
      <InitColorSchemeScript defaultMode={defaultMode} attribute="class" />
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}