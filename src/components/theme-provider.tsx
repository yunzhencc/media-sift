import type { ReactNode } from 'react'
import { createContext, use, useCallback, useEffect, useState } from 'react'
import { storage } from '#imports'

export type Theme = 'dark' | 'light' | 'system'

interface ThemeContextValue {
  setTheme: (theme: Theme) => Promise<void>
  theme: Theme
}

const themeStorage = storage.defineItem<Theme>('sync:theme', {
  fallback: 'system',
})

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(theme: Theme) {
  const resolvedTheme = theme === 'system'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    : theme

  document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
  document.documentElement.style.colorScheme = resolvedTheme
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('system')

  useEffect(() => {
    let active = true

    void themeStorage.getValue().then((storedTheme) => {
      if (active)
        setCurrentTheme(storedTheme)
    })

    const unwatch = themeStorage.watch((newTheme) => {
      setCurrentTheme(newTheme)
    })

    return () => {
      active = false
      unwatch()
    }
  }, [])

  useEffect(() => {
    applyTheme(currentTheme)

    if (currentTheme !== 'system')
      return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme('system')

    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [currentTheme])

  const setTheme = useCallback(async (newTheme: Theme) => {
    setCurrentTheme(newTheme)
    await themeStorage.setValue(newTheme)
  }, [])

  return (
    <ThemeContext value={{ theme: currentTheme, setTheme }}>
      {children}
    </ThemeContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = use(ThemeContext)

  if (!context)
    throw new Error('useTheme must be used within ThemeProvider')

  return context
}
