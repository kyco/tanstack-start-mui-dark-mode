import { z } from 'zod'

export const ColorMode = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const zColorMode = z.enum([
  ColorMode.SYSTEM, ColorMode.LIGHT, ColorMode.DARK
] as const)

export type ColorMode = z.infer<typeof zColorMode>
