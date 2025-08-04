import React, { memo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash2 } from 'lucide-react'
import { ListProps } from '../types'

// Memoized child component to prevent unnecessary re-renders
const List: React.FC<ListProps> = memo(({ items, onAddItem }) => {
  const [inputValue, setInputValue] = React.useState<string>('')
  const [renderCount, setRenderCount] = React.useState<number>(0)

  // Track renders to demonstrate memoization
  React.useEffect(() => {
    setRenderCount(prev => prev + 1)
    console.log('🔄 List component rendered')
  })

  const handleAddItem = () => {
    if (inputValue.trim()) {
      onAddItem(inputValue.trim())
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem()
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 p-3 rounded-lg">
        <p className="text-sm text-yellow-800">
          <span className="font-semibold">Render count:</span> {renderCount}
        </p>
        <p className="text-xs text-yellow-600 mt-1">
          This component is memoized with React.memo
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Add new item..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1"
        />
        <Button 
          onClick={handleAddItem}
          disabled={!inputValue.trim()}
          size="sm"
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          Add
        </Button>
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold text-sm">Items ({items.length}):</h4>
        {items.length === 0 ? (
          <p className="text-muted-foreground text-sm italic">No items yet</p>
        ) : (
          <ul className="space-y-1">
            {items.map((item) => (
              <li 
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm"
              >
                <span>{item.text}</span>
                <span className="text-xs text-muted-foreground">#{item.id.slice(0, 8)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
})

List.displayName = 'List'

export default List

