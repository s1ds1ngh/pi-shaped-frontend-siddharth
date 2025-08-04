import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(0)

  // Color logic based on count value
  const getCountColor = (value: number): string => {
    if (value > 0) return 'text-green-600'
    if (value < 0) return 'text-red-600'
    return 'text-gray-600'
  }

  const getCountBgColor = (value: number): string => {
    if (value > 0) return 'bg-green-100'
    if (value < 0) return 'bg-red-100'
    return 'bg-gray-100'
  }

  return (
    <div className="space-y-4">
      <div className={`text-center p-4 rounded-lg ${getCountBgColor(count)}`}>
        <span className={`text-4xl font-bold ${getCountColor(count)}`}>
          {count}
        </span>
      </div>
      
      <div className="flex gap-2 justify-center">
        <Button 
          onClick={decrement}
          variant="outline"
          size="sm"
        >
          Decrement
        </Button>
        
        <Button 
          onClick={reset}
          variant="secondary"
          size="sm"
        >
          Reset
        </Button>
        
        <Button 
          onClick={increment}
          variant="default"
          size="sm"
        >
          Increment
        </Button>
      </div>
      
      <div className="text-sm text-muted-foreground text-center">
        <p>Green: Positive • Red: Negative • Gray: Zero</p>
      </div>
    </div>
  )
}

export default Counter

