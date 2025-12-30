'use client'

import { useTheme } from './theme-provider'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className="rounded-full shadow-md hover:shadow-lg transition-all"
    >
      {theme === 'light' ? (
        <HiMoon className="w-5 h-5" />
      ) : (
        <HiSun className="w-5 h-5" />
      )}
    </Button>
  )
}
