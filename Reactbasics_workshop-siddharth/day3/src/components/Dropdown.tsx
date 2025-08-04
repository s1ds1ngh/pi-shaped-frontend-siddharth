import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Check } from 'lucide-react'
import { DropdownProps, DropdownOption } from '../types'

// Generic Dropdown component using TypeScript generics
function Dropdown<T>({ 
  options, 
  onSelect, 
  placeholder = "Select an option...", 
  value 
}: DropdownProps<T>): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<DropdownOption<T> | null>(
    value ? options.find(opt => opt.value === value) || null : null
  )
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Update selected option when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      const option = options.find(opt => opt.value === value)
      setSelectedOption(option || null)
    }
  }, [value, options])

  const handleSelect = (option: DropdownOption<T>) => {
    setSelectedOption(option)
    onSelect(option.value)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={toggleDropdown}
        className="w-full justify-between"
        type="button"
      >
        <span className={selectedOption ? "text-foreground" : "text-muted-foreground"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-lg">
          <div className="py-1 max-h-60 overflow-auto">
            {options.length === 0 ? (
              <div className="px-3 py-2 text-sm text-muted-foreground">
                No options available
              </div>
            ) : (
              options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none flex items-center justify-between"
                  type="button"
                >
                  <span>{option.label}</span>
                  {selectedOption?.value === option.value && (
                    <Check size={16} className="text-primary" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown

