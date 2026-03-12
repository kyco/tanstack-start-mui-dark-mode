import { CssBaseline } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import type { ReactNode } from 'react'

import { theme } from '../styles/mui-theme'
import type { ColorMode } from '../types-enums'

type ThemeProviderProps = {
  defaultMode: ColorMode
  children: ReactNode
}

export default function ThemeProvider({ defaultMode, children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme} defaultMode={defaultMode} storageManager={null} noSsr>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}