import { useColorScheme as useColorSchemeMui } from '@mui/material/styles'

import { setThemeCookie } from './theme.functions'
import type { ColorMode } from '../../types-enums'

export const useColorScheme = () => {
  const muiColorScheme = useColorSchemeMui()

  const setMode = async (mode: ColorMode) => {
    muiColorScheme.setMode(mode)
    await setThemeCookie({ data: mode })
  }

  return {
    ...muiColorScheme,
    setMode,
  }
}
