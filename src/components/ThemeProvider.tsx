import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { ReactNode } from 'react'

import { theme } from '~/styles/mui-theme'
import type { ColorMode } from '~/types-enums'

type ThemeProviderProps = {
  defaultMode: ColorMode
  children: ReactNode
}

const Component = ({ defaultMode, children }: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme} defaultMode={defaultMode} storageManager={null} noSsr>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Component
