import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Counter from './components/Counter'
import Timer from './components/Timer'
import InputFocus from './components/InputFocus'
import ExpensiveCalc from './components/ExpensiveCalc'
import ParentWithList from './components/ParentWithList'
import ThemeToggle from './components/ThemeToggle'
import DropdownDemo from './components/DropdownDemo'
import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            React Hooks & TypeScript Exercise
          </h1>
          
          <div className="mb-6">
            <ThemeToggle />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Part 1: Counter & Timer */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Counter (useState)</h2>
              <Counter />
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Timer (useEffect)</h2>
              <Timer />
            </div>

            {/* Part 2: useRef & useMemo */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Input Focus (useRef)</h2>
              <InputFocus />
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Expensive Calc (useMemo)</h2>
              <ExpensiveCalc />
            </div>

            {/* Part 3: useCallback & Memoized Child */}
            <div className="bg-card p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">List with useCallback</h2>
              <ParentWithList />
            </div>

            {/* Part 5: Generic Dropdown */}
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Generic Dropdown</h2>
              <DropdownDemo />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

