import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'

import { ColorMode, zColorMode } from '~/types-enums'

const COOKIE_THEME_KEY = 'preferred_theme'

export const getThemeFromCookie = createServerFn().handler(async (): Promise<ColorMode> => {
  const cookieTheme = getCookie(COOKIE_THEME_KEY) as ColorMode
  return cookieTheme || ColorMode.SYSTEM
})

export const setThemeCookie = createServerFn({ method: 'POST' })
  .inputValidator(zColorMode)
  .handler(async ({ data }) => {
    setCookie(COOKIE_THEME_KEY, data)
  })
