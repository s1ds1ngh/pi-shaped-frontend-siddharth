import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calculator, Zap } from 'lucide-react'

const ExpensiveCalc: React.FC = () => {
  const [number, setNumber] = useState<number>(5)
  const [unrelatedState, setUnrelatedState] = useState<number>(0)
  const [calculationCount, setCalculationCount] = useState<number>(0)

  // Expensive factorial calculation with intentional delay
  const calculateFactorial = (n: number): number => {
    console.log('🔄 Calculating factorial for:', n)
    setCalculationCount(prev => prev + 1)
    
    if (n < 0) return 0
    if (n === 0 || n === 1) return 1
    
    let result = 1
    // Intentionally slow loop to demonstrate the expensive operation
    for (let i = 2; i <= n; i++) {
      result *= i
      // Add small delay to make it visibly slow
      for (let j = 0; j < 1000000; j++) {
        // Busy wait to simulate expensive calculation
      }
    }
    
    return result
  }

  // useMemo to memoize the expensive calculation
  const factorial = useMemo(() => {
    return calculateFactorial(number)
  }, [number]) // Only recalculate when 'number' changes

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0
    if (value >= 0 && value <= 20) { // Limit to prevent browser freeze
      setNumber(value)
    }
  }

  const incrementUnrelated = () => {
    setUnrelatedState(prev => prev + 1)
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Number (0-20):
        </label>
        <Input
          type="number"
          min="0"
          max="20"
          value={number}
          onChange={handleNumberChange}
          className="w-full"
        />
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Calculator size={16} className="text-blue-600" />
          <span className="font-semibold text-blue-800">Factorial Result:</span>
        </div>
        <p className="text-2xl font-mono font-bold text-blue-900">
          {number}! = {factorial.toLocaleString()}
        </p>
      </div>
      
      <div className="space-y-2">
        <Button 
          onClick={incrementUnrelated}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Zap size={16} />
          Trigger Unrelated Update ({unrelatedState})
        </Button>
        
        <div className="text-sm text-muted-foreground space-y-1">
          <p>Calculation count: <span className="font-bold text-orange-600">{calculationCount}</span></p>
          <p className="text-xs">
            useMemo prevents recalculation when unrelated state changes
          </p>
          <p className="text-xs text-orange-600">
            Notice: Factorial only recalculates when the number changes!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExpensiveCalc

