import { Button, ButtonGroup } from '@mui/material'

import { useColorScheme } from '../lib/theme/useColorScheme'
import { ColorMode } from '../types-enums'

const colorModeOptions = [
  { value: ColorMode.SYSTEM, label: 'System' },
  { value: ColorMode.LIGHT, label: 'Light' },
  { value: ColorMode.DARK, label: 'Dark' },
]

export default function ThemeSwitcher() {
  const { mode, setMode } = useColorScheme()

  return (
    <>
      <h4>Choose theme</h4>

      <ButtonGroup variant="outlined" aria-label="Basic button group">
        {colorModeOptions.map((option) => (
          <Button
            key={option.value}
            variant={mode === option.value ? 'contained' : 'outlined'}
            onClick={() => setMode(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
    </>
  )
}