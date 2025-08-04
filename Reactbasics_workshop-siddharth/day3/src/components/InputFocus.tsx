import React, { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Focus } from 'lucide-react'

const InputFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState<string>('')
  const [focusCount, setFocusCount] = useState<number>(0)

  const handleFocusClick = () => {
    // Use useRef to focus the input field
    if (inputRef.current) {
      inputRef.current.focus()
      setFocusCount(prev => prev + 1)
    }
  }

  const handleClear = () => {
    setInputValue('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Click the button to focus me!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full"
        />
        
        <div className="flex gap-2">
          <Button 
            onClick={handleFocusClick}
            variant="default"
            size="sm"
            className="flex items-center gap-2"
          >
            <Focus size={16} />
            Focus Input
          </Button>
          
          <Button 
            onClick={handleClear}
            variant="outline"
            size="sm"
          >
            Clear
          </Button>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground space-y-1">
        <p>Current value: <span className="font-mono">{inputValue || '(empty)'}</span></p>
        <p>Focus count: <span className="font-bold">{focusCount}</span></p>
        <p className="text-xs">useRef allows direct DOM manipulation without re-renders</p>
      </div>
    </div>
  )
}

export default InputFocus

