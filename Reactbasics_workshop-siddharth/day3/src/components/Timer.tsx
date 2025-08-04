import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { TimerState } from '../types'

const Timer: React.FC = () => {
  const [timerState, setTimerState] = useState<TimerState>({
    seconds: 0,
    isRunning: true // Auto-start on mount as required
  })

  // useEffect for timer functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (timerState.isRunning) {
      intervalId = setInterval(() => {
        setTimerState(prev => ({
          ...prev,
          seconds: prev.seconds + 1
        }))
      }, 1000)
    }

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [timerState.isRunning])

  const toggleTimer = () => {
    setTimerState(prev => ({
      ...prev,
      isRunning: !prev.isRunning
    }))
  }

  const resetTimer = () => {
    setTimerState({
      seconds: 0,
      isRunning: false
    })
  }

  // Format seconds to MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-4">
      <div className="text-center p-4 bg-blue-100 rounded-lg">
        <span className="text-4xl font-mono font-bold text-blue-800">
          {formatTime(timerState.seconds)}
        </span>
      </div>
      
      <div className="flex gap-2 justify-center">
        <Button 
          onClick={toggleTimer}
          variant={timerState.isRunning ? "destructive" : "default"}
          size="sm"
          className="flex items-center gap-2"
        >
          {timerState.isRunning ? (
            <>
              <Pause size={16} />
              Stop
            </>
          ) : (
            <>
              <Play size={16} />
              Start
            </>
          )}
        </Button>
        
        <Button 
          onClick={resetTimer}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <RotateCcw size={16} />
          Reset
        </Button>
      </div>
      
      <div className="text-sm text-muted-foreground text-center">
        <p>Status: {timerState.isRunning ? 'Running' : 'Stopped'}</p>
        <p className="text-xs mt-1">Auto-started on component mount</p>
      </div>
    </div>
  )
}

export default Timer

