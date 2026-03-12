import { useColorScheme as muiUseColorScheme } from '@mui/material/styles'

import type { ColorMode } from '../../types-enums'

import { setThemeCookie } from './theme.functions'

export const useColorScheme = () => {
  const { colorScheme, mode, systemMode, setMode: muiSetMode } = muiUseColorScheme()

  const setMode = async (mode: ColorMode) => {
    muiSetMode(mode)
    await setThemeCookie({ data: mode })
  }

  return {
    colorScheme,
    mode,
    systemMode,
    setMode,
  }
}
