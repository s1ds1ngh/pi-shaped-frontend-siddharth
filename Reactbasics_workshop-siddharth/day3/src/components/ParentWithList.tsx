import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { RefreshCw, Zap } from 'lucide-react'
import List from './List'
import { ListItem } from '../types'

const ParentWithList: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([])
  const [unrelatedCounter, setUnrelatedCounter] = useState<number>(0)
  const [parentRenderCount, setParentRenderCount] = useState<number>(0)

  // Track parent renders
  React.useEffect(() => {
    setParentRenderCount(prev => prev + 1)
    console.log('🔄 ParentWithList component rendered')
  })

  // Memoized callback using useCallback
  const handleAddItem = useCallback((text: string) => {
    const newItem: ListItem = {
      id: crypto.randomUUID(),
      text: text
    }
    setItems(prev => [...prev, newItem])
    console.log('✅ Item added:', text)
  }, []) // Empty dependency array means this function never changes

  // Non-memoized callback for comparison (commented out)
  // const handleAddItem = (text: string) => {
  //   const newItem: ListItem = {
  //     id: crypto.randomUUID(),
  //     text: text
  //   }
  //   setItems(prev => [...prev, newItem])
  //   console.log('✅ Item added:', text)
  // }

  const handleClearItems = () => {
    setItems([])
  }

  const incrementUnrelated = () => {
    setUnrelatedCounter(prev => prev + 1)
  }

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-3 rounded-lg">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">Parent render count:</span> {parentRenderCount}
        </p>
        <p className="text-xs text-blue-600 mt-1">
          useCallback prevents child re-renders when parent re-renders
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Button 
          onClick={incrementUnrelated}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Zap size={16} />
          Trigger Parent Re-render ({unrelatedCounter})
        </Button>
        
        <Button 
          onClick={handleClearItems}
          variant="destructive"
          size="sm"
          className="flex items-center gap-2"
          disabled={items.length === 0}
        >
          <RefreshCw size={16} />
          Clear All Items
        </Button>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-3">Memoized List Component</h3>
        <List 
          items={items} 
          onAddItem={handleAddItem}
        />
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <p><strong>Performance optimization:</strong></p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>useCallback memoizes the onAddItem function</li>
          <li>React.memo prevents List re-renders when props haven't changed</li>
          <li>Try clicking "Trigger Parent Re-render" - List won't re-render!</li>
          <li>Check console for render logs</li>
        </ul>
      </div>
    </div>
  )
}

export default ParentWithList

