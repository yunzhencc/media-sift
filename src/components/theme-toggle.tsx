import type { Theme } from '@/components/theme-provider'
import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

const themes: Theme[] = ['system', 'light', 'dark']

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length]!

  return (
    <Button variant="outline" onClick={() => void setTheme(nextTheme)}>
      Theme:
      {' '}
      {theme}
    </Button>
  )
}

export { ThemeToggle }
