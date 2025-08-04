import React from 'react'
import { Button } from '@/components/ui/button'
import { Sun, Moon, Palette } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-md">
      <div className="flex items-center gap-2">
        <Palette size={20} className="text-primary" />
        <span className="font-semibold">Theme Control</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          Current: <span className="font-medium capitalize">{theme}</span>
        </span>
        
        <Button
          onClick={toggleTheme}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          {theme === 'light' ? (
            <>
              <Moon size={16} />
              Switch to Dark
            </>
          ) : (
            <>
              <Sun size={16} />
              Switch to Light
            </>
          )}
        </Button>
      </div>
      
      <div className="text-xs text-muted-foreground">
        <p>Using useContext hook to access theme state</p>
      </div>
    </div>
  )
}

export default ThemeToggle

